# CLAUDE.md — Project Instructions for Claude Code

## Project Summary

ProductAgentLab is a learning environment for product teams (PMs, UX designers, researchers) to use AI-powered document analysis. Users place product documents in `context/`, the system ingests them into searchable memory in `memory/`, and they query it via the CLI. The tool answers questions grounded in those documents with citations.

**The people using this project are not engineers.** They are product managers, UX designers, and researchers who are learning to use AI tools. Explain things in plain language. When running commands on their behalf, explain what the command does and why.

## Project Structure

```
context/              User's product documents (add .md or .txt files here)
memory/               Auto-generated (chunks.jsonl + index.json) — do not edit manually
prompts/templates.md  Reusable prompt templates organized by role
src/
  ingest.ts           Reads context/, splits into chunks, summarizes, builds memory
  ask.ts              Retrieves relevant chunks and queries Claude with grounding
  retrieve.ts         Keyword-based chunk retrieval from memory
  llm.ts              Anthropic Messages API via fetch (no SDK)
  utils.ts            File walking, chunking, keyword extraction, shared types
  server.ts           Optional localhost:3333 memory viewer
.env                  ANTHROPIC_API_KEY and ANTHROPIC_MODEL (never commit)
SYLLABUS.md           3-week self-directed learning guide
```

## Commands

```bash
npm run ingest          # Read context/ and build memory/ (resets memory each run)
npm run ask -- "..."    # Ask a grounded question against memory
npm run view            # Start memory viewer at http://localhost:3333
```

## Tech Stack

- TypeScript with ES modules (`"type": "module"`)
- Node.js built-ins only (`node:fs`, `node:http`, `node:path`)
- Anthropic Messages API called directly via `fetch` in `src/llm.ts` — no SDK
- Runtime deps: `dotenv`, `yargs`
- Dev deps: `tsx`, `typescript`
- No test framework currently configured

## Key Architectural Contracts

These relationships must stay consistent if code is modified:

1. **Chunk format**: The `Chunk` type in `src/utils.ts` defines the shape. `ingest.ts` writes chunks as JSONL. `retrieve.ts` reads them. Both must agree on the schema.

2. **Index format**: `ingest.ts` writes `index.json` with `chunks` array and `keyword_to_ids` map. `retrieve.ts` reads this for lookup. Changes to one require changes to the other.

3. **Grounding contract**: `ask.ts` hardcodes a system prompt that requires citation as `(source: path#chunk_id)` and forbids inventing facts. This is the core trust mechanism. Do not weaken it.

4. **Memory reset**: `ingest.ts` deletes and rebuilds `chunks.jsonl` on every run. This is intentional for the learning phase. Users re-ingest after adding documents.

## Rules for Working in This Project

### Grounding and Citations

- Every answer the tool produces must cite local sources using `(source: path#chunk_id)`
- If retrieval returns fewer than 2 relevant chunks, the system should ask the user to add more documents or refine their question — not guess
- Never invent product facts. If something isn't in the documents, say so.
- When generating or modifying prompts sent to Claude, always include a Grounding section with retrieved context

### Code Changes

- Keep dependencies minimal. Do not add packages without explicit user request.
- Preserve the grounding/citation behavior in `src/ask.ts` — this is non-negotiable
- The memory format (JSONL + JSON index) is shared between `ingest.ts` and `retrieve.ts` — change both or neither
- Prefer simple, readable code over clever code. Users may read the source to learn.

### Interacting With the User

- Explain in plain language before showing commands or code
- If the user asks about their product content (not this tool), guide them to use `npm run ask` with appropriate documents in `context/` rather than answering product questions directly
- When suggesting prompt modifications, follow the five-element structure defined in `prompts/templates.md`: Role, Task, Constraints, Output format, Quality bar
- The learning guide is in `SYLLABUS.md` — reference specific sections when relevant rather than re-explaining concepts it already covers

### Files to Never Commit or Share

- `.env` — contains the user's Anthropic API key
- `memory/` — auto-generated, contains summaries of potentially sensitive documents
- `node_modules/`

Note: there is currently no `.gitignore` file. If initializing a git repo, create one covering the above.
