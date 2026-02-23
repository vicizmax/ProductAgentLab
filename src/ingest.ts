import fs from "node:fs";
import path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  appendJsonl, chunkId, ensureDir, extractKeywords,
  nowIso, readText, simpleTypeFromPath, truncate, walkFiles, writeJson
} from "./utils.js";
import { callClaude } from "./llm.js";

type Index = {
  chunks: Array<{ id: string; source_path: string; title: string; keywords: string[]; type: string }>;
  keyword_to_ids: Record<string, string[]>;
};

function splitIntoChunks(text: string, maxChars = 3500): string[] {
  // naive chunker: split by blank lines; then pack
  const paras = text.split(/\n\s*\n/g).map(p => p.trim()).filter(Boolean);
  const out: string[] = [];
  let buf = "";
  for (const p of paras) {
    if ((buf + "\n\n" + p).length > maxChars) {
      if (buf.trim()) out.push(buf.trim());
      buf = p;
    } else {
      buf = buf ? `${buf}\n\n${p}` : p;
    }
  }
  if (buf.trim()) out.push(buf.trim());
  return out.length ? out : [text.slice(0, maxChars)];
}

async function summarizeWithLLM(title: string, chunk: string): Promise<string> {
  const system =
    "You are a precise PM assistant. Summarize text faithfully. Do NOT invent facts.";
  const user =
`Summarize the following content for later retrieval.

Requirements:
- 6–10 bullet points max
- Capture decisions, constraints, risks, and open questions
- Use neutral language
- No speculation

TITLE: ${title}

CONTENT:
${chunk}`;
  return callClaude(system, user);
}

async function main() {
  const argv = await yargs(hideBin(process.argv))
    .option("contextDir", { type: "string", default: "context" })
    .option("memoryDir", { type: "string", default: "memory" })
    .option("useLLM", { type: "boolean", default: true })
    .parse();

  const contextDir = path.resolve(argv.contextDir);
  const memoryDir = path.resolve(argv.memoryDir);
  ensureDir(memoryDir);

  const chunksPath = path.join(memoryDir, "chunks.jsonl");
  const indexPath = path.join(memoryDir, "index.json");

  // reset memory each ingest for simplicity (Week 1)
  if (fs.existsSync(chunksPath)) fs.unlinkSync(chunksPath);

  const files = walkFiles(contextDir)
    .filter(f => !f.includes(`${path.sep}memory${path.sep}`))
    .filter(f => !path.basename(f).startsWith("."))
    .filter(f => !f.toLowerCase().endsWith(".png") && !f.toLowerCase().endsWith(".jpg"));

  const index: Index = { chunks: [], keyword_to_ids: {} };

  for (const filePath of files) {
    const rel = path.relative(process.cwd(), filePath);
    const raw = readText(filePath);
    const title = path.basename(filePath);
    const type = simpleTypeFromPath(filePath);

    const parts = splitIntoChunks(raw, 3500);

    for (let i = 0; i < parts.length; i++) {
      const id = chunkId(rel, i);
      const excerpt = truncate(parts[i].replace(/\s+/g, " "), 500);

      let summary = "";
      if (argv.useLLM) {
        try {
          summary = await summarizeWithLLM(`${title} (chunk ${i + 1}/${parts.length})`, parts[i]);
        } catch {
          // fallback to heuristic if no key / API blocked
          summary = excerpt;
        }
      } else {
        summary = excerpt;
      }

      const keywords = extractKeywords(`${title}\n${summary}\n${excerpt}`, 14);

      const chunkObj = {
        id,
        source_path: rel,
        title,
        type,
        summary,
        keywords,
        excerpt,
        created_at: nowIso()
      };

      appendJsonl(chunksPath, chunkObj);

      index.chunks.push({ id, source_path: rel, title, keywords, type });

      for (const kw of keywords) {
        index.keyword_to_ids[kw] ||= [];
        index.keyword_to_ids[kw].push(id);
      }

      process.stdout.write(`✓ ${rel} #${i + 1}/${parts.length}\n`);
    }
  }

  writeJson(indexPath, index);
  process.stdout.write(`\nDone. Wrote ${index.chunks.length} chunks.\n`);
  process.stdout.write(`Memory: ${path.relative(process.cwd(), chunksPath)}\n`);
  process.stdout.write(`Index:  ${path.relative(process.cwd(), indexPath)}\n`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
