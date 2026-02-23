# CLAUDE.md — Project Instructions for Claude Code

## Project Summary

ProductAgentLab is a learning environment for product teams (PMs, UX designers, researchers) to use Claude Code for AI-powered document analysis. Users place product documents in `context/` and use Claude Code directly to ask grounded questions about them.

**The people using this project are not engineers.** They are product managers, UX designers, and researchers who are learning to use AI tools. Explain things in plain language. When running commands on their behalf, explain what the command does and why.

## Project Structure

```
context/              User's product documents (add .md, .txt, .csv files here)
prompts/templates.md  Reusable prompt templates organized by role (PM, UX, Research)
SYLLABUS.md           3-week self-directed learning guide
CLAUDE.md             This file — project instructions for Claude Code
```

## How This Project Works

There is no custom application code. The workflow is:

1. User places product documents (PRDs, specs, research, meeting notes) in `context/`
2. User opens Claude Code in this project directory
3. Claude Code reads documents from `context/` and answers questions grounded in them
4. Prompt templates in `prompts/templates.md` provide structured starting points for common tasks

## Rules for Working in This Project

### Grounding and Citations

- When answering questions about documents in `context/`, cite the specific file and relevant section
- Never invent product facts. If something isn't in the documents, say "Not found in the current context documents" rather than guessing
- If the user's question can't be answered from the available documents, say so and suggest what documents would help
- Prefer structured, scannable output: bullets, tables, checklists — not walls of prose

### Interacting With the User

- Explain in plain language before showing commands or code
- If the user asks about their product content, read the relevant files from `context/` and answer grounded in those documents
- When suggesting prompt modifications, follow the five-element structure defined in `prompts/templates.md`: Role, Task, Constraints, Output format, Quality bar
- The learning guide is in `SYLLABUS.md` — reference specific sections when relevant rather than re-explaining concepts it already covers

### What Not to Commit

- `context/` — user's product documents, may contain sensitive/proprietary content (already in `.gitignore`)
- Any files containing API keys, credentials, or personally identifiable information
