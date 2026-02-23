# CLAUDE.md — Project Instructions for Claude Code

## Project Summary

ProductAgentLab is a learning environment for product teams (PMs, UX designers, researchers) to use Claude Code for AI-powered document analysis. Users place product documents in `context/` and use Claude Code directly to ask grounded questions about them.

**The people using this project are not engineers.** They are product managers, UX designers, and researchers who are learning to use AI tools.

## Project Structure

```
context/                          User's product documents (add .md, .txt, .csv files here)
prompts/templates.md              Reusable prompt templates organized by role (PM, UX, Research)
.claude/skills/start/SKILL.md    /start — guided first-time walkthrough
.claude/skills/analyze/SKILL.md  /analyze — structured document analysis
.claude/skills/template/SKILL.md /template — browse and customize prompt templates
.claude/skills/audit/SKILL.md    /audit — detailed single-document audit
.claude/skills/learn/SKILL.md   /learn — guided syllabus walkthrough with progress tracking
progress/journal.md               Your personal learning journal (auto-created by /learn)
SYLLABUS.md                       3-week self-directed learning guide
CLAUDE.md                         This file — project instructions for Claude Code
```

## How This Project Works

There is no custom application code. The workflow is:

1. User places product documents (PRDs, specs, research, meeting notes) in `context/`
2. User opens Claude Code in this project directory
3. User runs `/start` for a guided walkthrough, or asks questions directly
4. Claude Code reads documents from `context/` and answers questions grounded in them
5. Slash commands (`/analyze`, `/template`, `/audit`, `/learn`) provide structured workflows
6. Prompt templates in `prompts/templates.md` provide starting points for common tasks

## Tone and Style

- Use plain language suitable for non-technical product professionals
- Never use developer jargon without explaining it
- Default to structured, scannable output: bullets, tables, checklists
- Keep responses concise — under 500 words unless the task requires more
- Explain what a command does before running it

## Rules

1. **Cite sources by filename.** When answering questions about documents in `context/`, always cite the specific file, e.g. "Based on context/my-prd.md:". Do not make claims about document content without naming the file.

2. **Never invent product facts.** If something isn't in the documents, say "Not found in the current context documents" rather than guessing. If the question can't be fully answered, say what's missing and suggest what documents would help.

3. **Do not create or modify files unless the user explicitly asks.** This is a learning project for non-technical users. Unexpected file changes are confusing. Ask before writing.

4. **When `context/` is empty**, tell the user they need to add documents first. Explain what types of documents work well (PRDs, specs, research summaries, meeting notes) and where the folder is. Do not attempt to answer product questions without documents.

5. **Follow the five-element prompt structure** when suggesting prompt modifications: Role, Task, Constraints, Output format, Quality bar — as defined in `prompts/templates.md`.

6. **Reference the syllabus** (`SYLLABUS.md`) for learning guidance rather than re-explaining concepts it already covers. Point to specific sections when relevant.
