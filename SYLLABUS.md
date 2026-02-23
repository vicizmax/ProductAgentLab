# Claude Code for Product Teams
## A Self-Directed Learning Guide

**Who this is for**: Product managers, UX designers, product researchers, product analysts, and anyone in the product department who wants to use AI to work smarter — without needing to write code.

Most examples in this guide use PM scenarios (PRDs, roadmaps, stakeholder updates) because they're the broadest common denominator across product orgs. But the concepts, tools, and techniques apply equally to UX research synthesis, design critique, content strategy, and product analytics. Where workflows differ meaningfully by role, the guide calls that out with **role-specific variations**.

**What this is**: A 3-week learning path that starts from zero and ends with a set of repeatable AI-powered workflows you use daily. It uses this `pm-agent-lab` project as a hands-on practice environment.

**What this is not**: A coding course. You will see code files here. You do not need to edit or understand them.

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
| Memory between conversations | None | Can maintain context within a project |
| Can it automate tasks? | No | Yes — it can write files, run scripts, explore codebases |
| Good for | Quick questions, writing help | Sustained work on a specific project |

**The practical implication**: If you paste a summary of a PRD (or a usability report, or a design spec) into Claude.ai and ask questions, it only knows what you pasted. Claude Code can read your entire document *and* every related document in a folder simultaneously. That's the fundamental difference.

### What is This `pm-agent-lab` Project?

This project is a practical learning environment. It gives you a working system that:
- Reads your product documents (`context/` folder)
- Builds a searchable memory from them (`memory/` folder)
- Answers questions about your documents with citations to sources

Think of it as building a "product brain" — a private, queryable version of all your product knowledge.

**It uses the Anthropic API** (the same AI that powers Claude.ai) but runs entirely on your laptop.

### The Three Concepts You Must Understand

**1. Context**
The information you give Claude before asking a question. Bad context = generic answers. Good context = specific, accurate answers. Everything you put in the `context/` folder becomes Claude's context.

**2. Grounding**
Making Claude's answers stick to your actual documents rather than its general knowledge. A grounded answer says "Based on the MMF-SQC spec..." An ungrounded answer says "Generally speaking, compliance systems should..." One is useful, one is noise.

**3. Hallucination**
When AI confidently states something false. It happens because the model doesn't "know" it doesn't know — it predicts the most likely next word. This is why every answer in this system *requires citations*. If there's no citation, treat the answer as unverified.

---

## Week 1: Get Set Up and Start Getting Value

**Goal**: By the end of this week, Claude Code is running on your laptop, you've ingested your first product documents, and you've gotten your first grounded answer to a real work question.

---

### Day 1–2: Setup

**What you're doing**: Installing everything and running your first command.

#### Setup Checklist

- [ ] Install Node.js — download from [nodejs.org](https://nodejs.org), choose the LTS version. Just click through the installer like any other app.
- [ ] Install Claude Code — open Terminal (Mac) or Command Prompt (Windows) and run:
  ```
  npm install -g @anthropic-ai/claude-code
  ```
- [ ] Get an Anthropic API key — go to [console.anthropic.com](https://console.anthropic.com), create an account, and generate a key. It looks like `sk-ant-...`
- [ ] Add your API key to this project — open the `.env` file in this project and add:
  ```
  ANTHROPIC_API_KEY=sk-ant-your-key-here
  ```

> **Important**: The `.env` file contains your API key. Never share it, commit it to git, or send it to anyone. The `.gitignore` file in this project already prevents it from being accidentally uploaded.

#### The Only Two Commands You Need This Week

Open Terminal, navigate to this project folder, and use:
```
npm run ingest    → reads your documents and builds memory
npm run ask       → asks Claude a question about your documents
```

That's it. Everything else this week is about what you put into those commands.

---

### Day 3–4: Your First Real Task

**What you're doing**: Putting your own product documents into the system and asking it real questions.

#### Exercise 1.1: Ingest Your First Document

1. Find ONE real work document you already have — see below for ideas by role:
   - **PM**: a PRD, feature spec, or roadmap document
   - **UX**: a usability study summary, design spec, or user journey map
   - **Research**: an interview synthesis, survey results summary, or persona document
   - **Any role**: meeting notes, strategy docs, or competitive analysis
2. Save it as a `.md` or `.txt` file
3. Copy it into the `context/` folder in this project
4. In Terminal, run: `npm run ingest`

Watch what happens. You'll see it reading your file and summarizing it. When it's done, a `memory/` folder will contain searchable summaries.

> **Note**: The two files already in `context/` (`MMF-SQC-Compliance-Report.md` and `MMF-SQC-Portfolio-Dashboards.md`) are example documents. You can replace them with your own, or keep them and add yours alongside.

#### Exercise 1.2: Ask Real Questions

Replace the bracketed parts with your actual content:

```bash
npm run ask -- "What are the key decisions made about [feature name]?"
npm run ask -- "What risks are mentioned in this spec?"
npm run ask -- "What open questions still need to be resolved?"
npm run ask -- "Summarize the acceptance criteria for [feature]"
npm run ask -- "What are the stated success metrics?"
```

**What to pay attention to**:
- Does the answer include a citation like `(source: context/your-file.md#chunk_id)`? Good — it's grounded.
- Does it say "Not found in current context"? Also good — it's not making things up.
- Does it give a confident answer with no citation? That's a warning sign. Verify independently.

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

Add 5–8 documents to `context/`. Re-run `npm run ingest`.

#### Exercise 1.4: Test the Limits

Ask Claude something you know is NOT in your documents. It should say it doesn't have that information. If it answers confidently without a citation, that's a hallucination. Testing the limits early builds appropriate (not blind) trust in the tool.

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
2. Run `npm run ingest`
3. Ask for a draft or analysis
4. Review critically — edit, add nuance, correct errors
5. Ask Claude to refine based on your changes
6. You own and are accountable for the final output

The workflow that produces garbage: give Claude no context, accept the output, ship it.

#### Prompt Templates for Document Work

Save these in `prompts/` as a reference. Replace `[brackets]` with your specifics.

**PRD Executive Summary:**
```
Based on the context provided, write a one-page executive summary of the [feature name] PRD.
Include: problem statement, proposed solution, success metrics, key risks, and open decisions.
Cite your sources. If critical information is missing, list what's needed.
```

**Risk Identification:**
```
Review the context for [project name] and identify all risks mentioned, implied, or
typically associated with this type of work.
Categorize each as: Technical / User Adoption / Timeline / Stakeholder.
Rate each risk High / Medium / Low with a brief rationale.
Cite sources for every risk. Do not invent risks not grounded in the documents.
```

**Open Questions Audit:**
```
Based on all documents in context, list every unresolved question, outstanding decision,
and piece of missing information that a PM would need to address before this feature ships.
Group by: Needs stakeholder input / Needs engineering answer / Needs user research.
Cite sources.
```

**Stakeholder Update Draft:**
```
Draft a weekly stakeholder update for [project name].
Format:
- Status: [On Track / At Risk / Blocked]
- What happened this week: 3 bullets max
- What's happening next week: 3 bullets max
- Decisions needed: any blockers that require stakeholder input
- Key metrics: only if mentioned in context, do not fabricate numbers
Tone: factual, concise, no jargon. Cite context sources.
```

#### Exercise 2.1: Real-World Test

Pick one current or upcoming project. Add its relevant documents to `context/`. Run these three queries and compare the output to your own mental model:
1. "Summarize the current state of this project"
2. "What are the top 3 risks?"
3. "What are the open questions?"

Where does Claude add value? Where is it wrong? What did it miss because it wasn't in the documents?

---

### Day 11–12: Bridge the Product-Engineering Gap

**What you're doing**: Using Claude to understand technical context without needing to be technical.

This is one of the highest-leverage use cases for PMs. Being able to quickly understand *why* engineering made a decision — without a 30-minute meeting — changes how you work.

#### Types of Engineering Context Worth Ingesting

- Sprint planning documents or retrospective notes
- Architecture Decision Records (ADRs) — ask your engineers, they may already have these
- Ticket descriptions exported from Jira or Linear (as markdown or CSV)
- Changelogs or release notes
- API documentation for external integrations you're deciding on

#### Exercise 2.2: Understand a Technical Decision

Ask your engineering team for one ADR or a document explaining a technical choice. Add it to `context/` and run:

```bash
npm run ask -- "Why did we choose [technology/approach]? What alternatives were considered?"
npm run ask -- "What are the long-term implications of the decision in [doc name]?"
npm run ask -- "What constraints does this technical decision impose on product decisions?"
npm run ask -- "What would a PM need to know about the tradeoffs here?"
```

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
2. Add to `context/`, re-run `npm run ingest`
3. Ask synthesis questions

#### Synthesis Prompt Templates

**Themes Extraction:**
```
Based on the user research in context, identify the top 5 recurring themes across feedback.
For each theme provide:
- A short name and description
- 2–3 example quotes or data points (with citations)
- The implication for product decisions
Do not include themes not supported by the documents.
```

**Opportunity Identification:**
```
Based on user research in context, what are the highest-impact unmet user needs?
For each need, estimate:
- Frequency: how many users mentioned it?
- Severity: how much friction or pain?
- Current workaround: what do users do today instead?
Cite sources. If frequency data isn't available, say so.
```

**Gap Analysis:**
```
Compare the user needs described in the research to the features described in the product spec.
What user needs are currently unaddressed?
What features in the spec don't have corresponding user needs stated in the research?
Cite sources for both sides.
```

#### Exercise 2.3: Synthesize a Real Research Batch

Take user research from the past quarter. Synthesize it with Claude. Compare the output to the synthesis your team produced manually. What did Claude surface that you missed? What important context did it lose because it wasn't written down?

---

### Role-Specific Variations: UX and Design Workflows

If you're in UX, design, or research, these exercises are your equivalent of the PM document workflows above. You can do them instead of (or in addition to) the PM-focused Day 8–12 exercises.

#### UX Prompt Templates

**Usability Findings Review:**
```
Based on the usability test reports in context, identify the top usability issues across all sessions.
For each issue:
- Task or screen where it occurred
- Severity: Critical (blocks task) / Major (significant friction) / Minor (annoyance)
- How many participants encountered it
- Any workarounds participants attempted
Cite specific sessions or reports. Do not generalize beyond what's documented.
```

**Design Spec Consistency Check:**
```
Review the design specs and UI documentation in context.
Identify any inconsistencies in:
- Interaction patterns (same action handled differently across screens)
- Terminology (same concept called different names)
- Edge cases mentioned in one spec but not addressed in related specs
Cite specific documents for each inconsistency found.
```

**Journey Map Gap Analysis:**
```
Based on the user journey maps and research in context, identify:
1. Steps in the journey where users experience the most friction (cite evidence)
2. Steps where we have no research data at all (gaps in understanding)
3. Moments where the experience differs significantly between user segments
For each finding, note whether it's based on research evidence or is an assumption in the journey map.
```

**Accessibility Review Prep:**
```
Review the design documentation in context and flag:
- Components or interactions that may pose accessibility concerns
- Any stated accessibility requirements and whether they appear addressed
- Gaps: common accessibility considerations not mentioned in the docs
Reference WCAG 2.1 AA as the baseline. Cite specific documents for every finding.
```

#### Exercise 2.4 (UX): Audit a Design Decision

Take a recent design spec or usability report. Add it to `context/` and ask:

```bash
npm run ask -- "What user evidence supports the current design approach?"
npm run ask -- "What usability issues were found, and which are still unresolved?"
npm run ask -- "Where does the design spec make assumptions about user behavior without citing research?"
```

The value isn't that Claude is a UX expert — it's that it can systematically cross-reference your design docs against your research docs and find gaps a human might miss when switching between tabs.

---

## Week 3: Build Systems, Not Just Answers

**Goal**: By the end of this week, you have a personal prompt library, a reliable way to evaluate AI outputs, and you can introduce a colleague to this system.

---

### Day 15–17: Build Your Prompt Library

**What you're doing**: Creating reusable templates so every query doesn't start from scratch.

#### What Makes a Good PM Prompt

A strong prompt has five elements:

| Element | What It Does | Example |
|---|---|---|
| **Role** | Tells Claude who it's acting as | "You are a senior PM reviewing a launch readiness checklist..." |
| **Task** | The specific action | "...identify all blockers that should prevent shipping." |
| **Constraints** | What it should NOT do | "Do not invent risks not present in the context." |
| **Output format** | How the answer should be structured | "List as: Risk / Severity / Evidence / Recommended action" |
| **Quality bar** | The standard to meet | "Flag any assumption you're making explicitly." |

Prompts with all five elements give consistently better outputs than vague questions.

#### Starter Prompt Library

Create a file `prompts/templates.md` and populate it with templates that match your actual recurring tasks. Start with these and add your own:

```markdown
## Feature Readiness Check
When to use: Before recommending a feature for launch

You are a senior PM doing a pre-launch readiness review for [feature name].
Review all context provided and assess:
1. Are acceptance criteria clearly defined? (Yes / No / Partially — explain)
2. Are known risks mitigated, accepted, or still open? List each with status.
3. Are all open questions resolved? List any that aren't.
4. What is missing that you'd need before recommending launch?
Cite sources for every finding. Flag any assumption not grounded in context.
Output format: structured checklist, not prose.

---

## Competitive Feature Response
When to use: Analyzing a competitor announcement

Review the competitive context provided. Analyze [competitor name]'s [feature/announcement]:
1. What user problem are they solving?
2. How does their approach compare to ours?
3. What segments of our users might this affect, and how?
4. What are our options in response? List each with tradeoffs.
Be explicit about what is in context vs. what would require additional research.
Avoid speculation labeled as fact.

---

## Sprint Retrospective Synthesis
When to use: After a sprint, to synthesize notes into decisions

Based on retrospective notes in context, produce a structured summary:
- What worked well (keep doing): max 3 bullets with supporting evidence
- What didn't work (change or stop): max 3 bullets with supporting evidence
- Action items agreed upon: list with owner if mentioned
- Open questions or tensions not yet resolved
Cite source documents for every item.
```

#### Exercise 3.1: Write Your Three Templates

Think about the three most repetitive tasks **in your specific role** right now. Write a prompt template for each. Test each one with real documents. The test passes when you'd actually use the output in a real work situation without major edits.

Some starting points by role:
- **PM**: stakeholder update, launch readiness check, roadmap prioritization rationale
- **UX Designer**: design review checklist, handoff documentation audit, interaction pattern consistency check
- **UX Researcher**: research synthesis, participant recruitment screener review, findings-to-recommendations bridge
- **Product Analyst**: metric definition audit, experiment results summary, data gap identification

---

### Day 18–19: Evaluate AI Outputs Reliably

**What you're doing**: Developing judgment about when to trust Claude's output and when to verify it.

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

#### Exercise 3.2: Output Audit

Take 5 answers Claude gave you during Weeks 1–2. For each:
1. Identify every factual claim
2. Check: was this in your context? (find the source)
3. Is the claim accurate?
4. What would have happened if you had used this without checking?

The goal is not paranoia — it's calibration. After this exercise, you should have a clear sense of what this specific system is reliable for and what it isn't.

---

### Day 20–21: Share With Your Team

**What you're doing**: Turning your personal setup into a team resource.

#### What to Share and What to Handle Carefully

**Share freely:**
- This syllabus
- Your `prompts/templates.md` file
- Your setup instructions with your own notes
- What worked, what didn't, and what surprised you

**Handle with care:**
- Your `.env` file — it contains your API key. Never share it. Each person needs their own.
- Documents in `context/` that contain sensitive business data, personal data, or unreleased product plans. Check your company's AI usage policy before adding anything confidential.
- The `memory/` folder contains summaries of your specific documents — it's only useful alongside those documents.

#### How to Run a Team Onboarding Session

When introducing this to colleagues, structure it as:

1. **Demo first (10 min)**: Show a real example. Use a real document. Ask a real question. Show the citation in the answer.
2. **Explain the why (5 min)**: Why does context matter? What happens when Claude doesn't have it? (Test this live — ask something it can't answer.)
3. **Live setup (15 min)**: Walk through installation together. Have them add their own document.
4. **First exercise (20 min)**: Everyone ingests one document and asks three questions.
5. **Debrief (10 min)**: What surprised them? What questions came up?

#### Exercise 3.3: Teach One Colleague

Find one person who might benefit. Walk them through setup and their first `npm run ask`. Write down the questions they asked that you couldn't answer — those are gaps to fix either in documentation or in this guide.

---

## Appendix A: Terminal Cheat Sheet (For Non-Engineers)

**Open Terminal on Mac**: Press Cmd + Space, type "Terminal", press Enter.

**Navigate to this project:**
```bash
cd ~/Documents/Claude/ProductAgentLab
```

**The three commands you'll use:**
```bash
npm run ingest           # Read context/ and build memory
npm run ask -- "..."     # Ask a grounded question
npm run view             # Open memory browser at localhost:3333
```

**Troubleshooting:**
```bash
node --version    # Should show v18 or higher. If not, reinstall Node.js.
cat .env          # Check that your API key is set (should show your sk-ant-... key)
```

If `npm run ingest` fails with an API error: check that your API key in `.env` is correct and that your Anthropic account has credits.

If `npm run ask` returns "I found limited relevant context": your documents are in `context/` but the question keywords don't match well. Try rephrasing, or add more documents.

---

## Appendix B: Glossary

| Term | What It Means in Plain English |
|---|---|
| API / API key | A way for software to communicate with another service. Your API key is like a password that lets this project talk to Anthropic's Claude. |
| CLI / Terminal | The text-based window where you type commands. Looks old-fashioned but is incredibly powerful. |
| Chunk | A piece of a document after it's been split into sections for processing. A 10-page PRD might become 8 chunks. |
| Context | The documents and information Claude can see when answering. More relevant context = better answers. |
| `.env` file | A hidden file that stores sensitive configuration like API keys. The dot at the start makes it hidden in Finder. |
| Grounding | Anchoring Claude's answers to your specific documents rather than its general training. |
| Hallucination | When AI confidently states something false. Common, manageable, but requires vigilance. |
| Ingestion | The process of reading your documents and building searchable memory from them. |
| LLM | Large Language Model — the type of AI technology underlying Claude. |
| Memory | The stored summaries of your documents that Claude can search when answering questions. |
| Node.js | The software environment this project runs in. You don't need to understand it; you just need it installed. |
| Prompt | The instruction or question you give Claude. Prompt quality directly determines answer quality. |
| RAG | Retrieval-Augmented Generation. A technique that makes AI answers grounded in specific documents rather than general knowledge. What this project does. |
| Token | The unit of text an AI processes — roughly ¾ of a word. Relevant for understanding why very long documents get split into chunks. |
| TypeScript | The programming language the code in `src/` is written in. You don't need to read or edit it. |

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

## Appendix D: Going Further

Once you've completed the three weeks, options for going deeper:

**Make the memory smarter**: The current system finds relevant chunks using keyword matching. A more advanced approach uses "embeddings" — a way of measuring meaning similarity rather than just word overlap. This is the "Week 2 upgrade" ChatGPT's scaffolding hinted at. Search for "semantic search with Anthropic embeddings" when you're ready.

**Automate ticket ingestion**: If your team uses Jira or Linear, you can export tickets as JSON or CSV and ingest them. This lets you ask questions like "what are the most common themes in bugs filed against X feature?" Search for "[your tool] export to CSV" and add those files to `context/`.

**Build a team shared memory**: Right now this runs locally. You can host the same pattern on a shared server so the whole team queries the same context library. This is an engineering task — bring in a developer when you're ready.

**Official documentation**:
- Claude Code: [docs.anthropic.com](https://docs.anthropic.com) → search "Claude Code"
- Anthropic prompt engineering guide: same site, search "prompt engineering"

---

*This guide was self-generated as a structured alternative to a paid course. Share it with your product, UX, and research teammates. Improve it as you learn. The prompts you write in Week 3 are the most valuable artifact — they're specific to how your team works and what your product needs.*
