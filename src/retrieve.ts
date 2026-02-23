import fs from "node:fs";
import path from "node:path";
import { Chunk, extractKeywords } from "./utils.js";

type Index = {
  chunks: Array<{ id: string; source_path: string; title: string; keywords: string[]; type: string }>;
  keyword_to_ids: Record<string, string[]>;
};

function readJson<T>(p: string): T {
  return JSON.parse(fs.readFileSync(p, "utf8")) as T;
}

function readJsonlChunks(p: string): Chunk[] {
  if (!fs.existsSync(p)) return [];
  const lines = fs.readFileSync(p, "utf8").split("\n").map(l => l.trim()).filter(Boolean);
  return lines.map(l => JSON.parse(l) as Chunk);
}

export function retrieve(memoryDir: string, query: string, topK = 5): Chunk[] {
  const indexPath = path.join(memoryDir, "index.json");
  const chunksPath = path.join(memoryDir, "chunks.jsonl");

  const idx = readJson<Index>(indexPath);
  const allChunks = readJsonlChunks(chunksPath);
  const chunkById = new Map(allChunks.map(c => [c.id, c]));

  const qKeywords = extractKeywords(query, 10);
  const candidateIds = new Set<string>();

  for (const kw of qKeywords) {
    for (const id of idx.keyword_to_ids[kw] ?? []) candidateIds.add(id);
  }

  // fallback if nothing matches: consider everything
  const candidates = (candidateIds.size ? [...candidateIds] : idx.chunks.map(c => c.id))
    .map(id => chunkById.get(id))
    .filter(Boolean) as Chunk[];

  const qSet = new Set(qKeywords);

  const scored = candidates.map(c => {
    const overlap = c.keywords.filter(k => qSet.has(k)).length;
    // tiny boost for PRDs
    const typeBoost = c.type === "prd" ? 0.5 : c.type === "ticket" ? 0.25 : 0;
    return { c, score: overlap + typeBoost };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.c);
}
