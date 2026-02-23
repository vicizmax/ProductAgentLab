# ProductAgentLab — Cursor Rules

## What This Project Is

This is a learning environment for product teams (PMs, UX designers, researchers) to use AI-powered document analysis. It ingests product documents from `context/`, builds searchable memory in `memory/`, and answers grounded questions via the Anthropic API.

The users of this project are **not engineers**. They are product managers, UX designers, and researchers learning to use AI tools. Any assistance, code suggestions, or explanations should account for that.

## Project Structure

```
context/          → User's product documents (PRDs, specs, research, etc.)
memory/           → Auto-generated searchable memory (chunks.jsonl, index.json)
prompts/          → Reusable prompt templates (templates.md)
src/              → Application code (TypeScript)
  ingest.ts       → Reads context/, builds memory
  ask.ts          → Retrieves relevant chunks, queries Claude with grounding
  retrieve.ts     → Keyword-based chunk retrieval
  llm.ts          → Anthropic API wrapper
  utils.ts        → Shared utilities (file walking, chunking, keyword extraction)
  server.ts       → Optional localhost viewer
.env              → API key (never commit, never share)
SYLLABUS.md       → 3-week self-directed learning guide
```

## Non-Negotiable Rules

These apply to ALL AI-generated output in this project, whether from the tool itself or from Cursor assistance:

1. **Always cite sources.** Every factual claim must reference a local source using the format `(source: path#chunk_id)`. If information isn't in the provided context, say "Not found in current context" — never invent product facts.

2. **Never hallucinate product information.** This project exists specifically to prevent hallucination through grounding. Any code change, prompt modification, or suggested answer must preserve this guarantee. If retrieval returns fewer than 2 relevant chunks, ask a clarifying question or instruct the user to add missing context files.

3. **Output must be usable by non-technical product people.** Prefer structured, scannable formats: bullets, tables, checklists. Use the output structures from `prompts/templates.md` as the standard. Avoid jargon unless defining it.

4. **Grounding section is mandatory.** When generating or modifying prompts that will be sent to Claude, always include an explicit "Grounding" section that contains retrieved context. Never send prompts that rely on the model's general knowledge for product-specific claims.

## Code Conventions

- **Language**: TypeScript, ES modules (`"type": "module"` in package.json)
- **Runtime**: Node.js, no framework — plain `node:fs`, `node:http`, `node:path`
- **No external AI SDK**: The Anthropic API is called directly via `fetch` in `src/llm.ts`
- **Dependencies are intentionally minimal**: `dotenv`, `yargs`, `tsx`, `typescript`. Do not add dependencies without explicit user request.
- **Memory format**: `chunks.jsonl` (one JSON object per line) + `index.json` (keyword-to-chunk-id mapping). Do not change this format without updating both `ingest.ts` and `retrieve.ts`.

## When Helping Users in This Project

- If someone asks how to do something, **explain in plain language first**, then show the command or code. Assume they've read the SYLLABUS.md but have limited terminal experience.
- If someone asks to modify a prompt template, check it against the five-element structure (Role, Task, Constraints, Output format, Quality bar) defined in `prompts/templates.md`.
- If someone asks to add a new feature, keep it simple. This is a learning project, not a production system. Prefer clarity over cleverness.
- If someone's question is actually about their product (not this tool), redirect them to use `npm run ask` with appropriate context rather than answering directly.

## Files That Should Not Be Committed

- `.env` (API key)
- `memory/` (auto-generated, user-specific)
- `node_modules/`

## System Prompt Reference

The system prompt used by `src/ask.ts` enforces these behaviors at runtime:
- Answer ONLY from provided Grounding
- Do not invent facts
- Cite every non-trivial claim as `(source: path#chunk_id)`
- Structure output as: Decisions, Rationale, Risks, Open Questions, Next Steps
- If Grounding is insufficient, say so and propose what info is missing

Any changes to `src/ask.ts` must preserve these behaviors.
