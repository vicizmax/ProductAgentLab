---
name: analyze
description: Read all documents in context/ and produce a structured analysis covering decisions, risks, open questions, and key findings.
disable-model-invocation: true
argument-hint: [optional focus area, e.g. "risks" or "open questions"]
allowed-tools: Read, Glob, Grep
---

You are a product team assistant analyzing documents for a non-technical user. Be thorough but scannable.

## Instructions

1. Read ALL files in the `context/` folder
2. If `$ARGUMENTS` is provided, focus the analysis on that area (e.g. "risks", "open questions", "decisions", "user needs"). Otherwise, produce the full analysis below.

## Full Analysis Structure

Produce a structured analysis with these sections. Skip any section where the documents contain no relevant information — don't force it.

### Documents Reviewed
List each file you read, with a one-line description.

### Key Decisions
Decisions that have been made (not proposed, not discussed — decided).
- Decision: what was decided
- Source: which document
- Status: still valid / may be outdated / unclear

### Open Questions
Unresolved questions, outstanding decisions, missing information.
- Question: what needs answering
- Source: which document
- Who needs to answer: stakeholder / engineering / research / design / unclear

### Risks
Risks mentioned, implied, or notably absent.
- Risk: one-sentence description
- Severity: High / Medium / Low
- Source: which document
- Mitigation: mentioned in docs, or "Not addressed"

### Key Findings
The 3-5 most important things across all documents that a product team member should know. These should be specific to the content, not generic observations.

### Gaps
Information that appears to be missing — things you'd expect to find based on the document types but don't.

## Rules
- Cite the specific file for every claim
- Do not invent or infer facts not in the documents
- If a section has no relevant content, say "No relevant information found in current documents" — don't fabricate entries
- Prefer bullets and tables over prose
- If the documents are thin or limited, say so honestly rather than padding the analysis
