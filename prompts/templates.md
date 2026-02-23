# Prompt Templates

A reusable library of prompts for Claude Code. Copy any template, replace `[brackets]` with your specifics, and paste it into Claude Code.

## How to Use These Templates

1. Make sure the relevant documents are in `context/`
2. Start Claude Code (`claude`) in this project folder
3. Copy a template below, replace everything in `[brackets]` with your actual project/feature/doc names
4. Paste the prompt into Claude Code

You can also use `/template` inside Claude Code to browse and customize these interactively.

## What Makes a Good Prompt

Every template here follows five elements. When writing your own, include all five:

| Element | Purpose | If you skip it... |
|---|---|---|
| **Role** | Who Claude is acting as | Answers lack appropriate perspective |
| **Task** | What it should do | Answers are vague or unfocused |
| **Constraints** | What it should NOT do | You get hallucinations and invented facts |
| **Output format** | How the answer should be structured | Answers are hard to use directly |
| **Quality bar** | The standard to meet | No way to judge if the output is good enough |

---

## Product Management Templates

### 1. PRD Executive Summary

**When to use**: Distilling a long PRD into a one-pager for stakeholders or your own review.

```
You are a senior product manager summarizing a PRD for executive review.

Based on the documents in context/, write a one-page executive summary of the [feature name] PRD.

Include these sections:
- Problem statement: what user or business problem this solves
- Proposed solution: what we're building, in plain language
- Success metrics: how we'll know it worked
- Key risks: top 3, with severity
- Open decisions: anything still unresolved

Constraints:
- Cite your sources for every claim using (source: context/filename.md)
- If critical information is missing from the context, list what's needed in a "Gaps" section
- Do not invent details not present in the documents
- Keep it under 500 words
```

---

### 2. Risk Identification

**When to use**: Before a planning meeting or launch review, to surface risks you might be overlooking.

```
You are a product manager preparing a risk assessment for [project name].

Review the documents in context/ and identify risks that are:
- Explicitly mentioned in the documents
- Implied by constraints, timelines, or dependencies described
- Commonly associated with this type of work (but flag these separately as "inferred")

For each risk, provide:
- Risk: one-sentence description
- Category: Technical / User Adoption / Timeline / Stakeholder / Dependency
- Severity: High / Medium / Low
- Evidence: what in the documents supports this (with citation)
- Mitigation: any mitigation already mentioned in context, or "Not addressed"

Constraints:
- Clearly separate documented risks from inferred ones
- Do not invent risks that have no basis in the context
- If the documents don't contain enough information to assess risk, say so
```

---

### 3. Open Questions Audit

**When to use**: Before a spec review or planning session, to find everything that still needs answering.

```
You are a product manager auditing [feature/project name] for unresolved questions.

Based on all documents in context, list every:
- Unresolved question (explicitly stated as open)
- Outstanding decision (options discussed but not decided)
- Missing information (referenced but not provided)
- Assumptions (stated or implied but not validated)

Group by who needs to answer:
- Needs stakeholder input
- Needs engineering answer
- Needs user research
- Needs data/analytics
- Needs design decision

Constraints:
- Cite the source document for every item
- Do not add questions that aren't grounded in the context
- If a question appears resolved elsewhere in the documents, note that
```

---

### 4. Stakeholder Update Draft

**When to use**: Weekly or bi-weekly status updates.

```
You are a product manager drafting a stakeholder update for [project name].

Based on the documents in context/, draft a status update email.

Format:
- Status: On Track / At Risk / Blocked (pick one, justify briefly)
- Progress this period: 3 bullets max, concrete outcomes only
- Next period: 3 bullets max, specific planned work
- Decisions needed: any blockers requiring stakeholder input
- Key metrics: only include if actual numbers exist in context — never fabricate

Constraints:
- Tone: factual, concise, no jargon, no fluff
- Every factual claim must cite a source
- If the context doesn't contain enough information for a complete update, list what's missing
- Keep the entire update under 200 words
```

---

### 5. Feature Readiness Check

**When to use**: Before recommending a feature for launch or release.

```
You are a senior PM doing a pre-launch readiness review for [feature name].

Review the documents in context/ and assess:

1. Acceptance criteria
   - Are they clearly defined? (Yes / No / Partially)
   - List each criterion and its status if available

2. Known risks
   - List each risk with status: Mitigated / Accepted / Open
   - For open risks, note what's needed to resolve

3. Open questions
   - List any unresolved questions from the context
   - Note who needs to answer each one

4. Dependencies
   - List any external dependencies mentioned
   - Are they resolved or still pending?

5. Missing information
   - What would you need to see before recommending launch?

Constraints:
- Cite sources for every finding
- Flag any assumption you're making that isn't grounded in the documents
- Output as a structured checklist, not prose
- Do not fabricate readiness signals — if the documents don't say it's ready, say so
```

---

### 6. Competitive Feature Response

**When to use**: When a competitor launches something relevant and you need a structured response.

```
You are a product manager analyzing a competitive development.

Based on the competitive documents in context/, analyze [competitor name]'s [feature/announcement]:

1. What user problem are they solving?
2. How does their approach compare to ours? (be specific about differences)
3. Which segments of our users might this affect, and how?
4. What are our options? List 2–4 options, each with:
   - What it involves
   - Tradeoffs (what we gain, what it costs)
   - Timeline implication

Constraints:
- Be explicit about what is grounded in context vs. what would require additional research
- Do not speculate about competitor strategy beyond what the documents describe
- Avoid alarmist language — present facts and options, not urgency
- Cite sources for every factual claim
```

---

### 7. Roadmap Prioritization Rationale

**When to use**: When you need to justify or re-evaluate what's on the roadmap.

```
You are a product manager reviewing the prioritization of [feature/initiative name].

Based on all context provided, construct a prioritization rationale:

1. User impact: what evidence exists for user demand or pain? (cite research, support data, etc.)
2. Business impact: what evidence connects this to business goals or metrics?
3. Effort/complexity: what do the engineering documents say about scope?
4. Dependencies: what must happen first, or what does this unblock?
5. Risks of NOT doing it: what happens if we defer?

Then provide:
- Recommendation: prioritize / defer / needs more information
- Confidence level: high / medium / low (based on quality of evidence available)
- What would change the recommendation: what new information would shift the answer

Constraints:
- Only use evidence from the context
- If evidence is weak or missing for a category, say so explicitly
- Do not default to "prioritize" — defer is a valid recommendation when evidence is thin
```

---

### 8. Sprint Retrospective Synthesis

**When to use**: After a sprint, to turn retro notes into structured action items.

```
You are a product manager synthesizing sprint retrospective notes for [sprint/team name].

Based on the retrospective documents in context, produce:

What worked well (keep doing):
- Max 3 items, each with supporting evidence from the notes

What didn't work (change or stop):
- Max 3 items, each with supporting evidence from the notes

Action items:
- List each with owner (if mentioned) and concrete next step
- Flag any action items that are vague or lack a clear owner

Patterns:
- Are any themes recurring from previous retros? (only if prior retro notes are in context)

Constraints:
- Cite source documents for every item
- Do not editorialize — report what the team said, not what you think they should have said
- If retro notes are too vague to extract clear actions, flag that explicitly
```

---

## Research & Synthesis Templates

### 9. Research Themes Extraction

**When to use**: After a research cycle, to identify recurring patterns across sessions or responses.

```
You are a product researcher synthesizing findings across multiple research inputs.

Based on the user research in context, identify the top 5 recurring themes across all feedback.

For each theme provide:
- Theme name: short, descriptive label
- Description: 2–3 sentences explaining the theme
- Evidence: 2–3 specific quotes, data points, or observations (with citations)
- Frequency: how many sources mention this theme
- Product implication: what this means for product decisions

Constraints:
- Do not include themes not supported by the documents
- If a theme appears in only one source, label it as "emerging" rather than "recurring"
- Distinguish between what users said vs. your interpretation of what they meant
- Cite specific research sessions or documents for every piece of evidence
```

---

### 10. Opportunity Identification

**When to use**: Turning research insights into actionable product opportunities.

```
You are a product researcher identifying opportunities from user feedback.

Based on user research in context, what are the highest-impact unmet user needs?

For each need:
- Need: one-sentence description
- Frequency: how many participants/responses mentioned it (cite sources)
- Severity: how much friction or pain does it cause (with evidence)
- Current workaround: what do users do today instead?
- Opportunity: what could we build or change to address this?

Constraints:
- Rank by impact (frequency x severity), highest first
- If frequency data isn't available, state that explicitly
- Do not invent needs not grounded in the research
- Separate clearly observed needs from researcher inference
```

---

### 11. Research-to-Spec Gap Analysis

**When to use**: Checking whether a product spec actually addresses the user needs identified in research.

```
You are a product researcher auditing alignment between research findings and a product spec.

Compare the user needs described in the research documents to the features described in the product spec.

Produce three lists:

1. Addressed needs: user needs from research that the spec covers
   - Need → corresponding spec section (cite both)

2. Unaddressed needs: user needs from research with no corresponding spec coverage
   - Need (cite research) → "Not found in spec"

3. Unvalidated features: features in the spec with no corresponding user need in the research
   - Feature (cite spec) → "No research evidence found"

Constraints:
- Cite both the research source and spec section for every match
- Do not assume a feature addresses a need unless the connection is clear
- If the spec uses different terminology than the research, note the mapping
```

---

## UX & Design Templates

### 12. Usability Findings Review

**When to use**: After usability testing, to consolidate findings across sessions.

```
You are a UX researcher consolidating usability test findings.

Based on the usability test reports in context, identify the top usability issues across all sessions.

For each issue:
- Screen or task: where it occurred
- Description: what happened
- Severity: Critical (blocks task completion) / Major (significant friction, workaround needed) / Minor (annoyance, task still completable)
- Frequency: how many participants encountered it
- Workarounds: any alternative approaches participants attempted
- Recommendation: any recommendation already stated in the reports

Constraints:
- Cite specific sessions or reports for each finding
- Do not generalize beyond what's documented
- If severity ratings differ across reports, note the range
- List issues in severity order (critical first)
```

---

### 13. Design Spec Consistency Check

**When to use**: Before handoff to engineering, to catch inconsistencies across design documents.

```
You are a UX designer reviewing design documentation for internal consistency.

Review the design specs and UI documentation in context and identify inconsistencies in:

1. Interaction patterns: same user action handled differently across screens or flows
2. Terminology: same concept referred to by different names
3. Component usage: similar UI elements described with different specs
4. Edge cases: scenarios mentioned in one spec but not addressed in related specs
5. States: missing loading, empty, error, or offline states

For each inconsistency:
- What: describe the conflict
- Where: cite both documents
- Suggested resolution: which approach should win (if one is clearly better), or flag for team discussion

Constraints:
- Cite specific documents for each finding
- Only flag genuine inconsistencies, not intentional variations between contexts
- If you're unsure whether something is an inconsistency or intentional, flag it as "possible — needs team input"
```

---

### 14. Journey Map Gap Analysis

**When to use**: To identify where a journey map's claims are backed by research and where they're assumptions.

```
You are a UX researcher auditing a user journey map against research evidence.

Based on the journey maps and research in context, identify:

1. Evidence-backed steps: journey stages supported by research data
   - Stage → evidence (cite research)

2. High-friction points: stages where research shows significant user difficulty
   - Stage → evidence of friction → current severity

3. Research gaps: stages where the journey map makes claims without research backing
   - Stage → claim in map → "No supporting research found"

4. Segment differences: places where the experience likely differs between user types
   - Stage → how it differs → evidence (or flag as assumption)

Constraints:
- For each finding, clearly label whether it's based on research evidence or is an assumption in the journey map
- Cite specific documents for every piece of evidence
- Do not assume a journey stage is accurate just because it appears in the map
```

---

### 15. Accessibility Review Prep

**When to use**: Before a formal accessibility audit, to identify likely issues from design docs.

```
You are a UX designer preparing for an accessibility review of [feature/product name].

Review the design documentation in context and flag:

1. Potential concerns: components or interactions that may pose accessibility barriers
   - Component → concern → which WCAG 2.1 AA criterion it relates to

2. Stated requirements: any accessibility requirements already documented
   - Requirement → where it's stated → whether implementation guidance exists

3. Gaps: common accessibility considerations NOT mentioned in the docs
   - Category (color contrast, keyboard navigation, screen reader support, focus management, etc.)
   - Whether the docs address it: Yes / Partially / Not mentioned

Constraints:
- Reference WCAG 2.1 AA as the baseline standard
- Cite specific documents for every finding
- This is prep, not a formal audit — flag areas for investigation, don't make final compliance judgments
- If the docs don't contain enough detail to assess accessibility, say what's missing
```

---

## Cross-Functional Templates

### 16. Meeting Prep Brief

**When to use**: Before a meeting about a specific project, to get up to speed quickly.

```
You are a product team member preparing for a meeting about [project/topic name].

Based on all context provided, produce a meeting prep brief:

Current state:
- Where does this project stand? (cite sources)
- What was most recently decided or shipped?

Key decisions needed:
- List open decisions from the documents that may come up in this meeting

Potential questions you should be ready to answer:
- Based on the documents, what are stakeholders or teammates likely to ask about?

Context you might need:
- Key metrics, dates, or constraints mentioned in the documents
- Any disagreements or tensions visible in the context

Constraints:
- Keep it under 300 words — this is a pre-meeting scan, not a report
- Cite sources for every factual claim
- If context is thin on a topic, say "limited information available" rather than guessing
```

---

### 17. Handoff Documentation Audit

**When to use**: Before handing work to another team (design → engineering, PM → QA, etc.) to check nothing's missing.

```
You are reviewing handoff documentation for [feature name] from [team A] to [team B].

Based on the documents in context, check for:

1. Completeness: are the standard handoff elements present?
   - Requirements / acceptance criteria
   - Edge cases and error states
   - Dependencies and assumptions
   - Success metrics
   - Timeline or deadlines

2. Clarity: is anything ambiguous?
   - Vague requirements that could be interpreted multiple ways
   - Missing specifics (sizes, thresholds, copy, etc.)
   - References to other documents that aren't included in context

3. Gaps: what's missing that the receiving team will need?
   - Information they'll have to ask about
   - Decisions not yet made that block their work

Constraints:
- Cite specific documents for every finding
- Rate each gap as: Blocks work / Causes rework later / Nice to have
- Do not assume missing information — flag it as missing
```

---

### 18. Decision Log Extraction

**When to use**: After a series of meetings or documents, to compile what was actually decided.

```
You are a product team member creating a decision log from project documents.

Review all context and extract every decision that was made (not just discussed).

For each decision:
- Decision: what was decided, stated clearly
- Date: when it was made (if mentioned)
- Context: why this decision was made (rationale, constraints)
- Decider: who made the call (if mentioned)
- Alternatives considered: what other options were discussed (if mentioned)
- Status: still valid / superseded / unclear

Also list:
- Decisions that appear contradicted by later documents
- Discussions that look like decisions but never reached a clear conclusion

Constraints:
- Only include actual decisions, not proposals or recommendations
- Cite the source document for every entry
- If a decision's status is unclear (it was made but may have changed), flag it
```

---

## How to Add Your Own Templates

When you create a new template, include:

1. **A name** that describes the output, not the input ("Risk Assessment" not "Read the PRD")
2. **When to use** — the specific situation that triggers this template
3. **The five elements**: role, task, constraints, output format, quality bar
4. **Test it** with real documents before considering it "done" — if the output needs heavy editing every time, the template needs work

Save your custom templates in this file below the line.

---

## My Custom Templates

*Add your own below as you develop them during Week 3.*
