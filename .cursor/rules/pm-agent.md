# ProductAgentLab — Cursor Rules

## What This Project Is

This is a learning environment for product teams (PMs, UX designers, researchers) to use AI-powered document analysis. Users place product documents in `context/` and use Claude Code (or Cursor) to ask grounded questions about them.

The users of this project are **not engineers**. They are product managers, UX designers, and researchers learning to use AI tools. Any assistance or explanations should account for that.

## Project Structure

```
context/              → User's product documents (PRDs, specs, research, etc.)
prompts/templates.md  → Reusable prompt templates organized by role (PM, UX, Research)
SYLLABUS.md           → 3-week self-directed learning guide
CLAUDE.md             → Project instructions for Claude Code
```

There is no application code. The project is a structured learning environment with documents, templates, and guides.

## Non-Negotiable Rules

1. **Always cite sources.** When answering questions about documents in `context/`, reference the specific file and section. If information isn't in the provided documents, say "Not found in current context" — never invent product facts.

2. **Never hallucinate product information.** If the available documents don't contain enough information to answer a question, say so and suggest what documents would help.

3. **Output must be usable by non-technical product people.** Prefer structured, scannable formats: bullets, tables, checklists. Use the output structures from `prompts/templates.md` as the standard. Avoid jargon unless defining it.

## When Helping Users in This Project

- If someone asks how to do something, **explain in plain language first**. Assume they've read the SYLLABUS.md but have limited terminal experience.
- If someone asks to modify a prompt template, check it against the five-element structure (Role, Task, Constraints, Output format, Quality bar) defined in `prompts/templates.md`.
- If someone's question is about their product documents (not about the project itself), read the relevant files from `context/` and answer grounded in those documents.

## What Not to Commit

- `context/` — user's product documents, may contain sensitive/proprietary content (already in `.gitignore`)
- Any files containing API keys, credentials, or personally identifiable information
