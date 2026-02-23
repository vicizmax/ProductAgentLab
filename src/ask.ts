import path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { retrieve } from "./retrieve.js";
import { callClaude } from "./llm.js";

function formatGrounding(chunks: Array<{ id: string; source_path: string; summary: string }>): string {
  return chunks.map((c, i) =>
`[${i + 1}] source: ${c.source_path}#${c.id}
${c.summary}`).join("\n\n");
}

async function main() {
  const argv = await yargs(hideBin(process.argv))
    .usage('npm run ask -- "your question"')
    .option("memoryDir", { type: "string", default: "memory" })
    .option("topK", { type: "number", default: 5 })
    .parse();

  const question = (argv._.join(" ") || "").trim();
  if (!question) {
    console.error('Provide a question, e.g. npm run ask -- "What did we decide about X?"');
    process.exit(1);
  }

  const memoryDir = path.resolve(argv.memoryDir);
  const chunks = retrieve(memoryDir, question, argv.topK);

  if (chunks.length < 2) {
    console.log("I found limited relevant context (<2 chunks).");
    console.log("Suggestion: add more files to context/ and re-run ingest, or refine your question.");
    console.log("\nTop matches:");
    for (const c of chunks) console.log(`- ${c.source_path}#${c.id}`);
    process.exit(0);
  }

  const system =
`You are a product manager assistant answering ONLY from the provided Grounding.
Rules:
- Do not invent facts.
- If the Grounding is insufficient, say so and propose what info is missing.
- Every non-trivial claim MUST include a citation formatted exactly as: (source: path#chunk_id)
- Prefer PM-usable structure: Decisions, Rationale, Risks, Open Questions, Next Steps.`;

  const user =
`QUESTION:
${question}

GROUNDING:
${formatGrounding(chunks)}

Answer now. Remember: cite sources.`;

  const answer = await callClaude(system, user);
  console.log("\n" + answer.trim() + "\n");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
