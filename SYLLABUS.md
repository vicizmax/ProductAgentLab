# Claude Code for Product Teams
## A 4-Week Self-Directed Learning Guide

**Who this is for**: Product managers, UX designers, product researchers, product analysts, and anyone in the product department who wants to use AI to work smarter — without needing to write code.

Most examples in this guide use PM scenarios (PRDs, roadmaps, stakeholder updates) because they're the broadest common denominator across product orgs. But the concepts, tools, and techniques apply equally to UX research synthesis, design critique, content strategy, and product analytics. Where workflows differ meaningfully by role, the guide calls that out with **role-specific variations**.

**What this is**: A 4-week learning path that starts from zero and ends with a set of repeatable AI-powered workflows you use daily.

**What this is not**: A coding course. There is no code to write, run, or debug.

---

## Before You Start: The Concepts That Actually Matter

Before touching anything, spend 30 minutes with these concepts. Everything else in this guide builds on them.

### What is Claude Code?

Claude Code is a tool made by Anthropic (the company behind Claude) that runs on your laptop and lets Claude interact directly with files on your computer.

**It is different from Claude.ai (the website):**

| | Claude.ai | Claude Code |
|---|---|---|
| Where it runs | Your browser | Your terminal (command line) |
| What it can see | Only text you paste in | Entire folders and files on your laptop |
| Memory between conversations | Projects feature stores context | Reads project files fresh each session; use `--continue` to resume a conversation |
| Can it automate tasks? | No | Yes — it can write files, run scripts, explore codebases |
| Good for | Quick questions, writing help | Sustained work on a specific project |

**The practical implication**: If you paste a summary of a PRD (or a usability report, or a design spec) into Claude.ai and ask questions, it only knows what you pasted. Claude Code can read your entire document *and* every related document in a folder simultaneously. That's the fundamental difference.

### What is This Project?

This project is a structured learning environment. It gives you:
- A `context/` folder where you place your product documents
- A library of reusable prompt templates in `prompts/templates.md`
- This syllabus to guide you through learning

You use Claude Code directly to read your documents and answer questions about them. There's no custom software to install or run — Claude Code is the tool.

### The Four Concepts You Must Understand

**1. Context**
The information Claude can see when answering a question. Bad context = generic answers. Good context = specific, accurate answers. Everything you put in the `context/` folder becomes available to Claude when you ask it to read those files.

**2. Grounding**
Making Claude's answers stick to your actual documents rather than its general knowledge. A grounded answer says "Based on the MMF-SQC spec..." An ungrounded answer says "Generally speaking, compliance systems should..." One is useful, one is noise.

**3. Hallucination**
When AI confidently states something false. It happens because the model doesn't "know" it doesn't know — it predicts the most likely next word. This is why you should always ask Claude to cite which document it's drawing from. If there's no citation, treat the answer as unverified.

**4. Tokens and Cost**
Every interaction with Claude uses "tokens" — units of text roughly equal to ¾ of a word. More tokens = higher cost. Reading a long document costs more than asking a simple question. You don't need to obsess about this, but two practical tips: (1) use `claude --continue` to resume a conversation instead of starting fresh — it's cheaper because Claude doesn't re-read everything from scratch, and (2) type `/cost` inside Claude Code to see your usage anytime.

---

## Week 1: Get Set Up and Start Getting Value

**Goal**: By the end of this week, you understand how the project works, you've asked your first grounded questions, and you've started building your context library with your own documents.

---

### Day 1–2: Orientation

**What you're doing**: Getting familiar with the project, understanding how sessions work, and trying your first grounded question.

You're already inside Claude Code — which means setup is done. (If you're reading this before setting up, see the README for installation steps.) This exercise is about understanding what you're looking at and how to use it.

#### What's in This Project

| File or Folder | What It's For |
|---|---|
| `context/` | Where your product documents live. Claude reads from here when you ask questions. It comes with two sample documents to practice with — replace them with your own when you're ready. |
| `prompts/templates.md` | 18 reusable prompt templates organized by role (PM, UX, Research). |
| `SYLLABUS.md` | This file — the 4-week learning guide. |
| `CLAUDE.md` | Standing instructions that tell Claude how to behave in this project (cite sources, don't invent facts, use plain language). |
| `progress/` | Your personal learning journal, created automatically when you use `/learn`. |

#### Your First Interaction

The `context/` folder already contains two sample documents: a PRD for a smart notification feature and user research on notification overload. Try asking Claude about them:

```
Read the files in context/ and give me a brief summary of each document.
```

Then try something more specific:

```
Based on the documents in context/, what risks are mentioned?
```

```
What are the open questions across the documents in context/?
```

**What to notice**: Claude cites the specific file it's drawing from (e.g., "Based on context/sample-prd-beacon.md:"). That's **grounding** — answers tied to your actual documents, not generic knowledge. This is the core pattern you'll use throughout the learning journey.

#### Available Slash Commands

This project comes with five built-in commands you can use anytime inside Claude Code:

| Command | What It Does |
|---|---|
| `/start` | Quick orientation — summarizes your documents and suggests questions |
| `/learn` | Work through this syllabus interactively with progress tracking |
| `/analyze` | Structured analysis of all documents (decisions, risks, open questions) |
| `/template` | Browse and customize prompt templates from the library |
| `/audit` | Detailed audit of a specific document for completeness and gaps |

You can also pass arguments to some commands, e.g. `/analyze risks` to focus on risks only, or `/audit sample-prd-beacon.md` to audit a specific file.

#### How Sessions Work

This is the most important concept for daily use:

| Command | What It Does | When to Use It |
|---|---|---|
| `claude` | Start a fresh session | New task, clean slate |
| `claude --continue` | Resume your last conversation | Picking up where you left off — faster and cheaper because Claude doesn't re-read everything |
| `claude --resume` | Pick a specific past session | Jumping back to a particular conversation from days ago |

**Why this matters for cost**: Every new session means Claude re-reads your project files and CLAUDE.md. Using `--continue` skips that, saving tokens (and money). For multi-day work like this syllabus, `--continue` is almost always the right choice.

**Check your spending**: Type `/cost` inside Claude Code at any time to see how many tokens you've used in the current session.

#### Useful Commands

- `/help` — see all available commands (use this whenever you're stuck)
- `/exit` or Ctrl+C — leave Claude Code

**Tip**: Run `/learn` to work through this syllabus with a guided coach. It saves your progress to `progress/journal.md`, so you can exit and pick up where you left off in a new session.

---

### Day 3–4: Your First Real Task

**What you're doing**: Putting your own product documents into the system and asking it real questions.

#### Exercise 1.1: Add Your First Document

You've been practicing with the sample documents that came with the project. They're useful for learning, but the real value comes from using your own work documents. Time to add one.

1. Find ONE real work document you already have — see below for ideas by role:
   - **PM**: a PRD, feature spec, or roadmap document
   - **UX**: a usability study summary, design spec, or user journey map
   - **Research**: an interview synthesis, survey results summary, or persona document
   - **Any role**: meeting notes, strategy docs, or competitive analysis
2. Save it as a `.md` or `.txt` file
3. Copy it into the `context/` folder in this project

That's it — no ingestion step needed. Claude Code reads files directly when you ask it to.

**Don't have a document ready?** That's fine. You can keep using the sample documents for all of Week 1's exercises. When you do have a real document, add it to `context/` and you'll immediately see the difference in how relevant the answers are.

#### Exercise 1.2: Ask Real Questions

Start Claude Code (`claude`) and try these. Replace the bracketed parts with your actual content:

```
Read all files in context/ and tell me: what are the key decisions made about [feature name]?
```

```
Based on the documents in context/, what risks are mentioned?
```

```
Review the documents in context/ and list all open questions that still need to be resolved.
```

```
Read context/[your-file-name].md and summarize the acceptance criteria.
```

```
Based on the documents in context/, what are the stated success metrics?
```

**What to pay attention to**:
- Does Claude reference the specific file it's drawing from? Good — it's grounded.
- Does it say it can't find that information in the documents? Also good — it's not making things up.
- Does it give a confident answer without referencing any document? That's a warning sign. Ask "Which document is that from?" to check.

#### Reflection (Do This — It Matters)

After your first session, write down answers to these three questions in a doc or notebook:
1. What did Claude answer accurately?
2. What did it get wrong or miss?
3. What questions could I not ask because the information wasn't in the documents?

Your answers to question 3 will tell you exactly what to add to `context/` next.

---

### Day 5–7: Build Your Context Library

**What you're doing**: Understanding what makes good context and building a richer set of documents.

#### What Makes Good Context

Not all documents give Claude equal value. A general rule: the more specific and current the document, the more useful it is as context.

| Document Type | Good For | Watch Out For |
|---|---|---|
| PRDs / Feature Specs | Decisions, requirements, scope, success metrics | Outdated specs look equally authoritative to Claude |
| Meeting notes | Decisions made, open questions, context | Conversational notes are noisy — clean them up first |
| User research summaries | User needs, pain points, behaviors | Raw transcripts are too long; use synthesized summaries |
| Usability test reports | Task success rates, friction points, design recommendations | Include the methodology, not just the findings |
| Design specs / UI documentation | Component decisions, interaction patterns, accessibility requirements | Version-stamp these — designs change fast |
| User journey maps | End-to-end flows, pain points, moments of delight | Most useful when they include both the current and ideal state |
| Persona documents | User archetypes, goals, behaviors, frustrations | Only valuable if based on real research, not assumptions |
| OKRs / Strategy docs | Goals, priorities, company context | Works best when you have quarterly/annual specifics |
| Competitive analysis | Market context, competitor positioning | Date-stamp everything — Claude won't know it's stale |
| Engineering ADRs* | Technical decisions and constraints | Valuable for anyone bridging product/engineering |

*ADR = Architecture Decision Record — a short doc engineers write to explain *why* a technical decision was made.

#### Exercise 1.3: Context Audit

Before adding documents, filter them:
- Is this still accurate and current?
- Does it contain decisions or facts, or just discussion?
- Would knowing this help Claude give me a better answer?

Add 5–8 documents to `context/`.

#### Exercise 1.4: Test the Limits

Ask Claude something you know is NOT in your documents. It should say it doesn't have that information. If it answers confidently without referencing a document, that's a hallucination. Testing the limits early builds appropriate (not blind) trust in the tool.

---

## Week 2: Apply It to Real Work

**Goal**: By the end of this week, you've used this system for at least three actual work tasks and have a growing library of prompt templates.

> **Note on role focus**: Days 8–10 and 11–12 lean toward PM workflows. Day 13–14 (Research Synthesis) is relevant to everyone, and particularly central for UX and research roles. After Day 14, there's a dedicated section with **UX-specific workflows** you can work through instead of or in addition to the PM exercises.

---

### Day 8–10: Document Generation and Refinement

**What you're doing**: Using Claude as a thinking partner for writing and reviewing product documents.

#### The Right Mental Model

Claude is best used as a **first drafter and critical reviewer** — not an oracle. The workflow that works:

1. Add relevant background documents to `context/`
2. Start Claude Code and ask it to read those documents
3. Ask for a draft or analysis
4. Review critically — edit, add nuance, correct errors
5. Ask Claude to refine based on your changes
6. You own and are accountable for the final output

The workflow that produces garbage: give Claude no context, accept the output, ship it.

#### Prompt Templates for Document Work

These are already saved in `prompts/templates.md` with the full five-element structure. Here are the short versions — replace `[brackets]` with your specifics:

**PRD Executive Summary:**
```
Read the documents in context/ and write a one-page executive summary of the [feature name] PRD.
Include: problem statement, proposed solution, success metrics, key risks, and open decisions.
Cite the specific document for each claim. If critical information is missing, list what's needed.
```

**Risk Identification:**
```
Review the documents in context/ for [project name] and identify all risks mentioned, implied, or
typically associated with this type of work.
Categorize each as: Technical / User Adoption / Timeline / Stakeholder.
Rate each risk High / Medium / Low with a brief rationale.
Cite sources for every risk. Do not invent risks not grounded in the documents.
```

**Open Questions Audit:**
```
Based on all documents in context/, list every unresolved question, outstanding decision,
and piece of missing information that a PM would need to address before this feature ships.
Group by: Needs stakeholder input / Needs engineering answer / Needs user research.
Cite the source document for each item.
```

**Stakeholder Update Draft:**
```
Draft a weekly stakeholder update for [project name] based on the documents in context/.
Format:
- Status: [On Track / At Risk / Blocked]
- What happened this week: 3 bullets max
- What's happening next week: 3 bullets max
- Decisions needed: any blockers that require stakeholder input
- Key metrics: only if mentioned in the documents, do not fabricate numbers
Tone: factual, concise, no jargon. Cite source documents.
```

#### Exercise 2.1: Real-World Test

Pick one current or upcoming project. Add its relevant documents to `context/`. Start Claude Code and run these three queries, comparing the output to your own mental model:
1. "Read all documents in context/ and summarize the current state of this project"
2. "Based on the documents in context/, what are the top 3 risks?"
3. "What are the open questions across these documents?"

Where does Claude add value? Where is it wrong? What did it miss because it wasn't in the documents?

**Part 2: Refine the Draft**

Now practice the iterative refinement loop — the skill that separates useful AI outputs from generic ones:

1. Ask Claude to generate a draft executive summary of your project based on the documents in `context/`
2. Read the draft critically. Mark 2-3 specific problems: missing nuance, wrong emphasis, generic language, factual gaps
3. Tell Claude exactly what to fix:
   ```
   Revise the executive summary. Specifically:
   - The risk section understates [specific risk] — make it more prominent
   - The success metrics are too vague — use the specific numbers from context/[file].md
   - The tone is too optimistic — add the concerns raised in context/[other-file].md
   ```
4. Compare the revision to the original. Is it better? What improved and what didn't?

The point: Claude's first draft is rarely the final answer. Your judgment about *what's wrong* and your ability to articulate *how to fix it* is what makes the output useful. This describe → generate → critique → revise loop is the core skill for working with AI.

---

### Day 11–12: Bridge the Product-Engineering Gap

**What you're doing**: Using Claude to understand technical context without needing to be technical.

This is one of the highest-leverage use cases for PMs. Being able to quickly understand *why* engineering made a decision — without a 30-minute meeting — changes how you work.

#### Types of Engineering Context Worth Adding

- Sprint planning documents or retrospective notes
- Architecture Decision Records (ADRs) — ask your engineers, they may already have these
- Ticket descriptions exported from Jira or Linear (as markdown or CSV)
- Changelogs or release notes
- API documentation for external integrations you're deciding on

#### Exercise 2.2: Understand a Technical Decision

Ask your engineering team for one ADR or a document explaining a technical choice. Add it to `context/` and ask Claude:

```
Read context/[adr-filename].md and explain:
- Why did we choose this approach?
- What alternatives were considered?
- What are the long-term implications?
- What constraints does this impose on product decisions?
- What would a PM need to know about the tradeoffs here?
```

**Don't have an ADR?** Most teams don't write formal ADRs. Try these alternatives instead:
- A technical design document or RFC from your engineering team
- An engineering Slack thread or email where someone explained why a decision was made
- Release notes or a changelog — paste the relevant section into a `.md` file
- A ticket description that includes technical context (export from Jira or Linear)

Any document where an engineer explains *why* something was built a certain way works for this exercise.

**Still can't find anything?** You can also practice this skill with the sample PRD: the Beacon PRD references the Notification API v2 and an ML platform dependency. Ask Claude to explain the technical constraints those impose on product decisions — it's a lighter version of the same skill.

**The goal is not to become technical.** The goal is to ask better questions in engineering conversations and to understand when product decisions are constrained by technical ones.

---

### Day 13–14: Research Synthesis

**What you're doing**: Turning raw user research into structured product insights.

#### The Research Synthesis Workflow

1. Collect research artifacts:
   - Interview summary notes (synthesized, not raw transcripts)
   - Survey results exported as text or CSV
   - Support ticket themes from your customer success team
   - NPS comment analysis
2. Add them to `context/`
3. Start Claude Code and ask synthesis questions

#### Synthesis Prompt Templates

**Themes Extraction:**
```
Read all user research documents in context/ and identify the top 5 recurring themes across feedback.
For each theme provide:
- A short name and description
- 2–3 example quotes or data points (cite the specific document)
- The implication for product decisions
Do not include themes not supported by the documents.
```

**Opportunity Identification:**
```
Based on the user research documents in context/, what are the highest-impact unmet user needs?
For each need, estimate:
- Frequency: how many users mentioned it?
- Severity: how much friction or pain?
- Current workaround: what do users do today instead?
Cite source documents. If frequency data isn't available, say so.
```

**Gap Analysis:**
```
Compare the user needs described in the research documents to the features described in the product spec.
What user needs are currently unaddressed?
What features in the spec don't have corresponding user needs stated in the research?
Cite source documents for both sides.
```

#### Exercise 2.3: Synthesize a Real Research Batch

Take user research from the past quarter. Synthesize it with Claude. Compare the output to the synthesis your team produced manually. What did Claude surface that you missed? What important context did it lose because it wasn't written down?

---

### Evaluate What You Just Built: Trust Calibration

**What you're doing**: Now that you've generated summaries, syntheses, and analyses in Weeks 1-2, developing judgment about when to trust Claude's output and when to verify it.

#### The Trust Calibration Framework

Not all AI outputs require the same level of scrutiny:

**High trust — use with light review:**
- Summaries of documents you gave it (Claude is extracting, not inventing)
- Reformatting or restructuring existing content
- Identifying explicit mentions ("what risks are listed in this doc")

**Medium trust — review carefully before using:**
- Synthesis across multiple documents (Claude is interpreting relationships)
- Identifying patterns or themes (may miss important nuance)
- First drafts of new documents based on your context

**Low trust — always verify independently:**
- Any specific numbers, dates, or statistics
- Claims about competitor behavior or market trends
- Technical recommendations
- Anything that would be professionally embarrassing if wrong
- Legal, compliance, or safety-adjacent conclusions

#### Red Flags in AI Output

Train yourself to notice these:
- **Confident claims with no citation**: Where is this coming from?
- **Vague answers that could describe any product**: Claude is pattern-matching on generic PM language, not your documents
- **Missing nuance you know exists**: It found a fact but lost the context that complicates it
- **Very long outputs with thin substance**: A sign the prompt was too vague
- **Answers that are suspiciously well-structured but wrong**: Looks authoritative, isn't

#### Exercise 2.5: Output Audit

Ask Claude 5 different questions about your documents in `context/`. Try a mix — some factual ("What are the success metrics?"), some analytical ("What's the biggest risk?"), some that push beyond what's in the documents ("How does this compare to competitors?"). Then, for each answer:

1. Identify every factual claim
2. Check: was this in your documents? (ask Claude "Which document is that from?")
3. Is the claim accurate?
4. What would have happened if you had used this without checking?

The goal is not paranoia — it's calibration. After this exercise, you should have a clear sense of what this tool is reliable for and what it isn't.

---

### Role-Specific Variations: UX and Design Workflows

> **Not in a UX or design role?** Skip ahead to Exercise 2.5 (Output Audit) below. Exercise 2.4 is a UX-specific variation — you're not missing anything by skipping it.

If you're in UX, design, or research, these exercises are your equivalent of the PM document workflows above. You can do them instead of (or in addition to) the PM-focused Day 8–12 exercises.

#### UX Prompt Templates

**Usability Findings Review:**
```
Read the usability test reports in context/ and identify the top usability issues across all sessions.
For each issue:
- Task or screen where it occurred
- Severity: Critical (blocks task) / Major (significant friction) / Minor (annoyance)
- How many participants encountered it
- Any workarounds participants attempted
Cite specific sessions or reports. Do not generalize beyond what's documented.
```

**Design Spec Consistency Check:**
```
Review the design specs and UI documentation in context/.
Identify any inconsistencies in:
- Interaction patterns (same action handled differently across screens)
- Terminology (same concept called different names)
- Edge cases mentioned in one spec but not addressed in related specs
Cite specific documents for each inconsistency found.
```

**Journey Map Gap Analysis:**
```
Based on the user journey maps and research in context/, identify:
1. Steps in the journey where users experience the most friction (cite evidence)
2. Steps where we have no research data at all (gaps in understanding)
3. Moments where the experience differs significantly between user segments
For each finding, note whether it's based on research evidence or is an assumption in the journey map.
```

**Accessibility Review Prep:**
```
Review the design documentation in context/ and flag:
- Components or interactions that may pose accessibility concerns
- Any stated accessibility requirements and whether they appear addressed
- Gaps: common accessibility considerations not mentioned in the docs
Reference WCAG 2.1 AA as the baseline. Cite specific documents for every finding.
```

#### Exercise 2.4 (UX): Audit a Design Decision

Take a recent design spec or usability report. Add it to `context/` and ask Claude:

```
Read the design spec and usability reports in context/ and tell me:
- What user evidence supports the current design approach?
- What usability issues were found, and which are still unresolved?
- Where does the design spec make assumptions about user behavior without citing research?
```

The value isn't that Claude is a UX expert — it's that it can systematically cross-reference your design docs against your research docs and find gaps a human might miss when switching between tabs.

---

## Week 3: Level Up — New Capabilities

**Goal**: By the end of this week, you've customized Claude Code for your workflow, used advanced techniques like multi-perspective analysis and data analysis, built a reusable prompt library, and created something shareable with your team.

---

### Day 15–16: Customize Your Setup

**What you're doing**: Learning how to configure Claude Code to work the way you want — and understanding what things cost.

#### What is CLAUDE.md?

The file `CLAUDE.md` in this project is a set of standing instructions that Claude reads every time it starts. Open it and look — you'll see rules like "Cite sources by filename" and "Never invent product facts." These rules shape how Claude behaves in this project.

You can create a `CLAUDE.md` for any project you work on. Think of it as training a new team member: "Here's how we do things around here."

**How this project uses CLAUDE.md**: The rules in this project's `CLAUDE.md` enforce grounded answers, source citations, and plain language. Without them, Claude would give generic, uncited responses. The rules make the difference.

#### Session Management

You've been using `claude` and `claude --continue`. Here's the full picture:

| Command | What It Does | When to Use It |
|---|---|---|
| `claude` | Start a fresh session | New task, clean slate |
| `claude --continue` | Resume your last conversation | Picking up where you left off — faster and cheaper because Claude already has context |
| `claude --resume` | Pick a specific past session | Jumping back to a particular conversation from days ago |

**Why this matters for cost**: Every new session means Claude re-reads your project files and CLAUDE.md. Using `--continue` skips that, saving tokens (and money). For multi-day work like this syllabus, `--continue` is almost always the right choice.

#### Cost Awareness

Type `/cost` inside Claude Code to see how many tokens you've used in the current session. A few rules of thumb:
- Reading lots of documents = more tokens = higher cost
- Long conversations accumulate tokens — start fresh if you're switching to an unrelated task
- `--continue` is cheaper than starting fresh for ongoing work
- Simple questions about a single document cost much less than complex synthesis across many documents

#### Exercise 3.1: Create a Custom CLAUDE.md

Create a `CLAUDE.md` for a real project you work on (not this learning project — a different one). Ask Claude to help:

```
I want to create a CLAUDE.md file for my [project type] project. The project is about
[brief description]. My team values [what matters — accuracy, speed, specific formats].

Help me write a CLAUDE.md that includes:
- A description of the project and who uses it
- Rules for how Claude should behave (tone, format, what to avoid)
- Any role-specific instructions

Use this project's CLAUDE.md as a reference for the structure.
```

Review what Claude generates. Edit it to match how your team actually works. You don't need to deploy it yet — just create it as a draft.

---

### Day 17–18: Advanced Techniques

**What you're doing**: Learning techniques that get significantly better results from Claude — multi-perspective analysis, parallel work, and structured data.

#### Multi-Perspective Analysis

One of the most powerful patterns: ask Claude to analyze a document from multiple viewpoints simultaneously. Instead of one answer, you get a richer picture.

The pattern:
```
Read context/[your-file].md and analyze it from four perspectives:
1. As a PM: What are the key decisions, risks, and open questions?
2. As an engineer: What are the technical constraints and feasibility concerns?
3. As an executive: What's the business case and strategic alignment?
4. As a user: What problem does this solve and what's the experience like?

For each perspective, list the top 3 insights and any concerns. Note where perspectives conflict.
```

This works well for PRDs, feature specs, strategy documents, and launch plans.

#### Sub-Agents: Parallel Work

When you ask Claude to do multiple independent tasks, it can work on them simultaneously using sub-agents. You don't need to understand how this works technically — just know the pattern:

```
Do these three things at the same time:
1. Summarize each document in context/
2. List all risks across all documents
3. Find contradictions between documents
```

Claude splits the work, runs it in parallel, and combines the results. This is faster than asking three separate questions.

#### Working with Structured Data (CSVs)

Claude Code can read CSV files directly from `context/`. This is useful for:
- Sprint data exported from Jira or Linear
- Survey results
- Analytics exports
- Customer feedback databases

```
Read context/[data-file].csv and tell me:
- How many rows are there and what do the columns represent?
- What are the top patterns or trends in the data?
- Are there any outliers or anomalies?
Summarize the key findings in a table.
```

#### Exercise 3.2: Multi-Perspective Document Review

Pick the most important document in your `context/` folder and run a multi-perspective analysis:

```
Read context/[your-most-important-doc].md and analyze it from four perspectives:
1. Product manager: decisions, risks, gaps in the spec
2. Engineer: feasibility, technical debt, missing requirements
3. Executive: business value, strategic fit, resource justification
4. End user: problem-solution fit, usability, unaddressed needs

For each perspective, give the top 3 insights and flag any conflicts between perspectives.
Cite specific sections of the document.
```

Compare the output to your own analysis. Did the multi-perspective approach surface anything you hadn't considered?

#### Exercise 3.3: Analyze Structured Data

If you have a CSV file (sprint data, survey results, analytics export, feedback data):

```
Read context/[your-data].csv and:
1. Describe the dataset — what's in it, how many records, what time period
2. Identify the top 3 patterns or trends
3. Flag anything that looks unusual or concerning
4. Suggest 3 questions a PM should ask based on this data
Present the findings in a table where possible.
```

**Don't have a CSV?** No problem — here are quick ways to get one:
- Open any spreadsheet you have (Google Sheets, Excel) → File → Download as CSV
- Export tickets from Jira or Linear (most project tools have a CSV export option)
- Copy a table from a document into a spreadsheet, then save as CSV

Even a simple task list or feature tracker works. If you really don't have any data to use, skip this exercise and move to 3.4. You can come back to it anytime.

---

### Day 19–20: Build Your Toolkit

**What you're doing**: Creating reusable prompt templates and building a shareable artifact.

#### Your Prompt Library

A strong prompt has five elements:

| Element | What It Does | Example |
|---|---|---|
| **Role** | Tells Claude who it's acting as | "You are a senior PM reviewing a launch readiness checklist..." |
| **Task** | The specific action | "...identify all blockers that should prevent shipping." |
| **Constraints** | What it should NOT do | "Do not invent risks not present in the context." |
| **Output format** | How the answer should be structured | "List as: Risk / Severity / Evidence / Recommended action" |
| **Quality bar** | The standard to meet | "Flag any assumption you're making explicitly." |

The file `prompts/templates.md` already contains 18 templates organized by role (PM, UX, Research, Cross-functional). Browse it with `/template` and start customizing.

#### Exercise 3.4: Write Your Three Templates

Think about the three most repetitive tasks **in your specific role** right now. Write a prompt template for each using the five-element structure. Test each one with real documents. The test passes when you'd actually use the output in a real work situation without major edits.

Some starting points by role:
- **PM**: stakeholder update, launch readiness check, roadmap prioritization rationale
- **UX Designer**: design review checklist, handoff documentation audit, interaction pattern consistency check
- **UX Researcher**: research synthesis, participant recruitment screener review, findings-to-recommendations bridge
- **Product Analyst**: metric definition audit, experiment results summary, data gap identification

Add your templates to `prompts/templates.md` in the "My Custom Templates" section at the bottom.

#### Exercise 3.5: Build Something Shareable

Choose one option based on your role and create a polished output that you could actually send to your team:

**Option A — Project Health Summary (PMs)**:
```
Read all documents in context/ and create a comprehensive Project Health Summary.
Include: overall status, key decisions made, open risks, unresolved questions,
and recommended next steps. Format it as a document I could email to my team.
Cite every claim to a specific source file.
```

**Option B — Research Digest (UX/Research)**:
```
Read all research documents in context/ and create a Research Digest.
Include: key findings, top user pain points, opportunity areas, and
recommended research priorities. Format as a one-page summary suitable
for sharing at a team meeting. Cite source documents.
```

**Option C — Competitive Brief (Any role)**:
```
Based on the documents in context/, create a Competitive Analysis Brief.
Include: our positioning, competitor strengths and weaknesses, gaps in
our approach, and strategic recommendations. Format as a scannable
one-pager with a summary table. Cite sources.
```

**Stretch goal**: Ask Claude to generate the output as an HTML page you can open in your browser and share as a link.

---

### Day 21: Share With Your Team

**What you're doing**: Turning your personal setup into a team resource.

#### What to Share and What to Handle Carefully

**Share freely:**
- This syllabus
- Your `prompts/templates.md` file
- Your custom CLAUDE.md (from Exercise 3.1)
- The shareable artifact you built (from Exercise 3.5)
- What worked, what didn't, and what surprised you

**Handle with care:**
- Documents in `context/` that contain sensitive business data, personal data, or unreleased product plans. Check your company's AI usage policy before adding anything confidential.

#### How to Run a Team Onboarding Session

When introducing this to colleagues, structure it as:

1. **Demo first (10 min)**: Show a real example. Open Claude Code, point it at a real document, ask a real question. Show how it references the source document in the answer.
2. **Explain the why (5 min)**: Why does context matter? What happens when Claude doesn't have it? (Test this live — ask something it can't answer.)
3. **Live setup (15 min)**: Walk through installing Claude Code together. Have them add their own document to `context/`.
4. **First exercise (20 min)**: Everyone asks Claude three questions about their document.
5. **Debrief (10 min)**: What surprised them? What questions came up?

#### Exercise 3.6: Teach One Colleague

Find one person who might benefit. Walk them through setup and their first Claude Code session. Write down the questions they asked that you couldn't answer — those are gaps to fix either in documentation or in this guide.

**Flying solo?** If you don't have a colleague to teach right now, write a 5-minute walkthrough document instead — as if you were onboarding a new team member. Cover: what you'd show them first, what you'd have them try, and what questions you'd expect them to ask. This forces the same knowledge consolidation as teaching someone live, and you'll have a useful artifact if a colleague does want to learn later.

---

## Week 4: Go Further — Build, Connect, Visualize

**Goal**: By the end of this week, you've built a working prototype, connected Claude to one of your work tools, generated visual artifacts, and documented your personal AI workflow system.

> **Note**: This week introduces the most advanced capabilities in the guide. Every exercise is designed so that Claude does the technical work — you describe what you want and review the results. No coding knowledge is needed.

---

### Day 22–24: Build a Prototype (Vibe Coding)

**What you're doing**: Describing what you want and having Claude build a working interactive prototype — no coding required.

#### What is "Vibe Coding"?

Vibe coding means describing what you want in plain language and letting Claude generate the code for you. You don't write, read, or debug any code. Your job is to:
1. Describe what you want clearly
2. Open the result in your browser
3. Critique it and ask for revisions
4. Repeat until it's useful

This works because Claude can generate HTML, CSS, and JavaScript — which your browser can run directly. No servers, no deployment, no technical setup.

#### The Pattern

1. Pick a document from `context/` (a PRD, spec, or feature description)
2. Ask Claude to build something based on it
3. Claude generates an HTML file
4. Open the file in your browser
5. Tell Claude what to change
6. Claude revises — repeat until you're satisfied

#### What You Can Build

- **Interactive dashboards** showing data or metrics from your documents
- **Landing pages** that describe a feature as if it were already shipped
- **Simple internal tools** like a decision tracker, risk register, or prioritization matrix
- **Clickable prototypes** showing a user flow described in a spec

#### Exercise 4.1: Build a Prototype

Pick one document from `context/` and ask Claude to build something from it. Choose the scope that fits your role:

**Option A — Dashboard (PMs, Analysts)**:
```
Read context/[your-file].md and build an interactive HTML dashboard that displays
the key metrics, milestones, and status of this project. Include sections for risks
and open questions. Save it as prototype.html so I can open it in my browser.
```

**Option B — Landing Page (PMs, Marketing)**:
```
Read context/[your-file].md and build a landing page for this feature as if it were
already shipped. Include the value proposition, key benefits, and a call to action.
Save it as prototype.html.
```

**Option C — Internal Tool (Any role)**:
```
Read context/[your-file].md and build a simple [decision tracker / risk register /
prioritization matrix] as an interactive HTML page based on the data in the document.
Save it as prototype.html.
```

After Claude generates the file, open it in your browser. Then tell Claude what to change — colors, layout, missing information, different emphasis. Iterate at least twice. The goal is to experience the describe → generate → critique → revise loop.

**Stretch goal**: Ask Claude to make the prototype look polished enough to share with a stakeholder.

---

### Day 25–26: Connect Your Tools (MCP)

**What you're doing**: Setting up Claude Code to read directly from a tool you already use at work, so you don't have to export files manually.

#### What is MCP?

MCP stands for Model Context Protocol. It's a way to let Claude Code connect to your work tools directly. Instead of this workflow:

1. Export data from Jira → 2. Save as CSV → 3. Copy to `context/` → 4. Ask Claude to read it

You get this:

1. Ask Claude to query Jira directly

MCP turns Claude Code from a tool that reads files into a tool that reads your entire work environment.

#### How It Works

MCP servers are small connectors that Claude Code uses to talk to external tools. You configure them once, and then Claude can query those tools whenever you ask. Claude will help you with the setup — you don't need to understand the technical details.

#### Exercise 4.2 (Advanced — Optional): Connect a Tool with MCP

> **Note**: This is the most technical exercise in the guide and requires API credentials for one of your work tools. If you're not sure what API credentials are, or your company's IT team manages tool access, skip this for now — you can come back when you have help from someone technical. Skipping this does not affect the rest of the syllabus.

Pick one tool you use daily:

| Tool | What Claude Can Do With It |
|---|---|
| **Linear / Jira** | Read tickets, query project status, list sprint items |
| **Notion** | Read wiki pages, search databases |
| **Google Drive** | Read documents and spreadsheets |
| **Slack** | Search message history |
| **GitHub** | Read issues, PRs, and project boards |
| **Figma** | Inspect design files and components |

Then ask Claude:

```
Help me set up the MCP server for [tool name] so you can read from it directly.
Walk me through the setup step by step.
```

Claude will guide you through:
1. Installing the MCP server connector
2. Configuring your credentials
3. Testing the connection with a simple query

Once connected, try a real query:
```
Using the [tool] connection, show me the open tickets assigned to me this sprint.
```

---

### Day 27: Visualize Your Work

**What you're doing**: Generating diagrams, flowcharts, and visual artifacts from your documents.

#### What Claude Can Generate

Claude can create visual representations of processes, flows, and structures described in your documents:

- **Mermaid diagrams** — flowcharts, sequence diagrams, org charts. These render in GitHub, Notion, and many other tools.
- **SVG files** — scalable graphics you can embed in presentations
- **HTML visualizations** — interactive diagrams you open in your browser (similar to prototyping in Day 22-24)

#### Exercise 4.3: Generate Visual Artifacts

Pick a process, user flow, or architecture described in your documents and ask Claude to visualize it.

**Option A — Mermaid flowchart**:
```
Read context/[your-file].md and generate a Mermaid flowchart showing the user journey
described in this document. Include decision points and alternative paths.
```

**Option B — HTML diagram**:
```
Read context/[your-file].md and build an interactive HTML diagram showing the
architecture / process / user flow described in this document. Save it as diagram.html.
```

**Option C — Presentation-ready visual**:
```
Read context/[your-file].md and generate an SVG diagram showing the key components
and their relationships. Make it clean enough to include in a stakeholder presentation.
```

Try generating the same content in two different formats and see which works better for your audience.

---

### Day 28: Graduation — Your AI Workflow Playbook

**What you're doing**: Documenting the personal system you've built over four weeks so you can sustain and share it.

#### Exercise 4.4: Create Your AI Workflow Playbook

This is your capstone exercise. Create a personal reference document that captures everything you've learned. Ask Claude to help:

```
Help me create my personal AI Workflow Playbook. Ask me questions about:
- Which Claude Code workflows I've found most valuable
- What CLAUDE.md rules I'd set up for my team
- Which prompt templates I use regularly
- What tools I'd connect with MCP
Then organize my answers into a clean, shareable document.
```

Your playbook should include:
1. **Your top 5 workflows** — the specific things you'll do with Claude Code regularly
2. **Your CLAUDE.md rules** — what instructions you'd give Claude for your team's projects
3. **Your prompt templates** — the refined versions you built in Exercise 3.4
4. **Your tool connections** — which MCP servers are worth setting up
5. **Your quality checklist** — how you verify Claude's outputs (from Exercise 2.5)

Save this as a document you own and can share with your team. This is the most tangible artifact of the entire learning journey.

---

## Appendix A: Terminal Cheat Sheet (For Non-Engineers)

**Open Terminal on Mac**: Press Cmd + Space, type "Terminal", press Enter.

**Navigate to this project:**
```bash
cd ~/Documents/Claude/product-ai-starter
```

**Start Claude Code:**
```bash
claude                   # New session
claude --continue        # Resume your last conversation
claude --resume          # Pick a past session to resume
```

**Inside Claude Code, built-in project commands:**
```
/start                   # Guided first-time walkthrough
/learn                   # Guided syllabus walkthrough with progress tracking
/analyze                 # Structured analysis of all documents
/analyze risks           # Focus analysis on a specific area
/template                # Browse and customize prompt templates
/template UX             # Filter templates by role
/audit my-prd.md         # Audit a specific document
/help                    # See all available commands
/exit                    # Leave Claude Code
```

**Quick one-off question (without starting an interactive session):**
```bash
claude -p "Read context/my-prd.md and list the top 3 risks"
```

**Or ask questions directly inside Claude Code:**
```
Read all the files in context/ and summarize each one.
Based on the documents in context/, what are the top risks for [project]?
Read context/[filename].md and list all open questions.
```

**Troubleshooting:**
- "claude: command not found" → Claude Code isn't installed. Run: `npm install -g @anthropic-ai/claude-code`
- "npm: command not found" → Node.js isn't installed. Download from [nodejs.org](https://nodejs.org)
- Claude gives generic answers not based on your documents → make sure you're asking it to read files from `context/`, e.g. "Read the files in context/ and..."
- Claude doesn't remember your last session → use `claude --continue` instead of `claude`

---

## Appendix B: Glossary

| Term | What It Means in Plain English |
|---|---|
| CLI / Terminal | The text-based window where you type commands. Looks old-fashioned but is incredibly powerful. |
| Context | The documents and information Claude can see when answering. More relevant context = better answers. |
| Grounding | Anchoring Claude's answers to your specific documents rather than its general training. |
| Hallucination | When AI confidently states something false. Common, manageable, but requires vigilance. |
| LLM | Large Language Model — the type of AI technology underlying Claude. |
| Prompt | The instruction or question you give Claude. Prompt quality directly determines answer quality. |
| Token | The unit of text an AI processes — roughly 3/4 of a word. Tokens determine cost — more tokens in your conversation means higher usage. Use `/cost` in Claude Code to check your spending. |
| CLAUDE.md | A configuration file you place in a project folder to customize Claude Code's behavior for that project. Think of it as standing instructions Claude reads every time it starts. |
| Sub-agent | When Claude Code splits a large task into smaller pieces and works on them in parallel — like delegating to assistants. You trigger this with prompts like "Do X and Y at the same time." |
| MCP | Model Context Protocol — a way to connect Claude Code directly to tools like Jira, Linear, Notion, or Figma so it can read from them without you exporting files manually. |
| Vibe coding | Describing what you want in plain language and letting Claude generate working code (HTML, CSS, JS) for you. No coding knowledge required — you review and iterate on the output. |

---

## Appendix C: When Not to Use This Tool

Claude Code is powerful for the tasks described in this guide. It is not the right tool for:

- **Legal and compliance decisions**: AI can help you understand context and draft questions to ask lawyers. It cannot replace legal review.
- **Final customer-facing copy**: Always have a human review before it goes to users.
- **Replacing user research**: Claude synthesizes what's in documents. It cannot replace talking to actual users. If you don't have recent research, the synthesis will be stale or missing.
- **Design decisions**: Claude can audit consistency and flag gaps. It cannot judge whether a design is good. Aesthetic judgment, spatial reasoning, and understanding visual hierarchy are not its strengths.
- **Decisions with high personal-data sensitivity**: Check your company's AI usage policy. If a document contains user PII, employee data, research participant identities, or similarly sensitive information, do not put it in `context/`.
- **Replacing stakeholder alignment**: Claude can help you draft the communication and anticipate questions. It cannot replace the relationship and judgment calls.

---

## Appendix D: Tips & Tricks

A collection of power-user techniques to get more out of Claude Code.

### Session Management

| Command | What It Does | When to Use It |
|---|---|---|
| `claude` | Start a fresh session | New task, clean slate |
| `claude --continue` | Resume your last conversation | Picking up where you left off (saves tokens — Claude doesn't re-read everything) |
| `claude --resume` | Pick a specific past session | Jumping back to a particular conversation |

**Cost-saver**: `--continue` is cheaper than starting fresh because Claude already has your context loaded. Use it whenever you're working on the same project across sessions.

### Check Your Spending

Type `/cost` inside Claude Code to see how many tokens you've used in the current session. This helps you:
- Understand which queries are expensive (long documents, complex synthesis)
- Decide when to start a fresh session vs. continue
- Stay within your budget

### CLAUDE.md Hierarchy

Claude Code reads `CLAUDE.md` files at multiple levels:
- **Personal** (`~/.claude/CLAUDE.md`) — your preferences across all projects
- **Project** (`CLAUDE.md` in the project root) — rules for this specific project (this is what product-ai-starter uses)
- **Folder** (`CLAUDE.md` in a subfolder) — overrides for specific parts of a project

Rules combine from all levels. More specific files take priority.

### Parallel Sub-Agents

For tasks with multiple independent parts, ask Claude to work on them simultaneously:

```
Read the documents in context/ and do these three things at the same time:
1. Summarize the key decisions in each document
2. List all open questions across all documents
3. Identify any contradictions between documents
```

Claude will spin up sub-agents to handle each part in parallel — faster than doing them one at a time.

### Verify Sources

When Claude makes a claim, ask: **"Which document is that from?"** This is the simplest, most effective hallucination check. If Claude can't point to a specific file and section, treat the claim as unverified.

### Model Selection

Claude Code uses the best available model by default. If you find responses are slow or expensive for simple tasks, you can use `/model` to switch to a faster model for routine queries and switch back for complex analysis.

### MCP Servers: Connect Your Work Tools

MCP (Model Context Protocol) lets Claude Code read directly from tools like:
- **Jira / Linear** — query tickets and project status
- **Notion** — read wiki pages and databases
- **Figma** — inspect design files
- **Slack** — search message history
- **Google Drive** — read docs and spreadsheets

Instead of exporting files and saving them to `context/`, Claude queries the tool directly. See Week 4 Day 25-26 for a hands-on exercise, or check the [MCP documentation](https://code.claude.com/docs/en/mcp).

---

## Appendix E: Going Further

Once you've completed the four weeks, options for going deeper:

**Add more document types**: Export Jira or Linear tickets as CSV, export Confluence pages as markdown, pull in Slack thread summaries. The more of your real working context lives in `context/`, the more useful Claude becomes.

**Install document skills**: Anthropic publishes official skills for reading Excel, Word, PowerPoint, and PDF files. Install them from [github.com/anthropics/skills](https://github.com/anthropics/skills) to work with these formats directly in Claude Code.

**Connect external tools via MCP**: Model Context Protocol (MCP) lets Claude Code connect to Jira, Linear, Notion, Figma, Slack, and more. This turns Claude Code from a file-level tool into a connected workflow engine. See [code.claude.com/docs/en/mcp](https://code.claude.com/docs/en/mcp).

**Set up project-specific instructions**: The `CLAUDE.md` file in this project tells Claude Code how to behave (cite sources, don't hallucinate, etc.). You can create a `CLAUDE.md` in any project folder to customize Claude's behavior for that specific context.

**Build your own skills**: Once you're comfortable using the built-in `/start`, `/analyze`, `/template`, and `/audit` skills, create your own for workflows specific to your team. Read the official guide: [The Complete Guide to Building Skills for Claude](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf) (PDF, 32 pages).

**For teammates who prefer a visual interface**: Claude Cowork ([claude.com/product/cowork](https://claude.com/product/cowork)) offers the same agentic capabilities as Claude Code but with a graphical interface instead of a terminal. It can generate Excel spreadsheets, PowerPoint decks, and Word documents directly.

**Resources**:
- Claude Code docs: [code.claude.com/docs](https://code.claude.com/docs)
- Anthropic prompt engineering guide: [docs.anthropic.com](https://docs.anthropic.com) — search "prompt engineering"
- Free PM-focused course: [ccforpms.com](https://ccforpms.com)
- Community skills and examples: [github.com/anthropics/skills](https://github.com/anthropics/skills)

---

*This guide was self-generated as a structured alternative to a paid course. Share it with your product, UX, and research teammates. Improve it as you learn. The CLAUDE.md rules you write, the prototypes you build, and the prompt templates you customize are the most valuable artifacts — they're specific to how your team works and what your product needs.*
