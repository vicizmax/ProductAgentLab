# Claude Code for Product Teams
## A Self-Directed Learning Guide

**Who this is for**: Product managers, UX designers, product researchers, product analysts, and anyone in the product department who wants to use AI to work smarter — without needing to write code.

Most examples in this guide use PM scenarios (PRDs, roadmaps, stakeholder updates) because they're the broadest common denominator across product orgs. But the concepts, tools, and techniques apply equally to UX research synthesis, design critique, content strategy, and product analytics. Where workflows differ meaningfully by role, the guide calls that out with **role-specific variations**.

**What this is**: A 3-week learning path that starts from zero and ends with a set of repeatable AI-powered workflows you use daily.

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

### The Three Concepts You Must Understand

**1. Context**
The information Claude can see when answering a question. Bad context = generic answers. Good context = specific, accurate answers. Everything you put in the `context/` folder becomes available to Claude when you ask it to read those files.

**2. Grounding**
Making Claude's answers stick to your actual documents rather than its general knowledge. A grounded answer says "Based on the MMF-SQC spec..." An ungrounded answer says "Generally speaking, compliance systems should..." One is useful, one is noise.

**3. Hallucination**
When AI confidently states something false. It happens because the model doesn't "know" it doesn't know — it predicts the most likely next word. This is why you should always ask Claude to cite which document it's drawing from. If there's no citation, treat the answer as unverified.

---

## Week 1: Get Set Up and Start Getting Value

**Goal**: By the end of this week, Claude Code is running on your laptop, you've loaded your first product documents, and you've gotten your first grounded answer to a real work question.

---

### Day 1–2: Setup

**What you're doing**: Installing Claude Code and running your first command.

#### Setup Checklist

- [ ] Install Claude Code — open Terminal (Mac: press Cmd + Space, type "Terminal", press Enter) and run:
  ```
  npm install -g @anthropic-ai/claude-code
  ```
  (If this command fails with "npm not found", you need Node.js first: download from [nodejs.org](https://nodejs.org), choose the LTS version, install it, then try the command again.)
- [ ] Download this project folder to your computer (from GitHub, click the green "Code" button, then "Download ZIP")
- [ ] Open Terminal, navigate to this project folder:
  ```
  cd ~/Documents/Claude/ProductAgentLab
  ```
- [ ] Start Claude Code by typing:
  ```
  claude
  ```

That's it. Claude Code is now running and can see all the files in this project.

#### Your First Interaction

Once Claude Code is running, type:

```
/start
```

This launches a guided walkthrough that will:
- Check what documents you have in `context/`
- Summarize them for you
- Walk you through your first grounded question
- Explain what happened and what to do next

If you prefer to explore on your own, you can also just type questions directly, like:

```
Read the files in context/ and give me a brief summary of each document.
```

#### Available Slash Commands

This project comes with four built-in commands you can use anytime inside Claude Code:

| Command | What It Does |
|---|---|
| `/start` | Guided first-time walkthrough — start here |
| `/learn` | Work through this syllabus interactively with progress tracking |
| `/analyze` | Structured analysis of all documents (decisions, risks, open questions) |
| `/template` | Browse and customize prompt templates from the library |
| `/audit` | Detailed audit of a specific document for completeness and gaps |

You can also pass arguments to some commands, e.g. `/analyze risks` to focus on risks only, or `/audit my-prd.md` to audit a specific file.

#### Useful Commands to Know Right Away

- `/help` — see all available commands (use this whenever you're stuck)
- `/exit` or Ctrl+C — leave Claude Code

#### How to Exit and Resume

- To start a new session: navigate to the project folder and type `claude`
- To resume where you left off: type `claude --continue` (picks up your last conversation)
- To pick a specific past session: type `claude --resume`

**Important**: Each new `claude` session starts fresh — Claude reads your project files but does not remember previous conversations. Use `--continue` when you want to build on earlier work, which is especially useful during the multi-week learning journey.

**Tip**: Run `/learn` to work through this syllabus with a guided coach. It saves your progress to `progress/journal.md`, so you can exit and pick up where you left off in a new session.

---

### Day 3–4: Your First Real Task

**What you're doing**: Putting your own product documents into the system and asking it real questions.

#### Exercise 1.1: Add Your First Document

1. Find ONE real work document you already have — see below for ideas by role:
   - **PM**: a PRD, feature spec, or roadmap document
   - **UX**: a usability study summary, design spec, or user journey map
   - **Research**: an interview synthesis, survey results summary, or persona document
   - **Any role**: meeting notes, strategy docs, or competitive analysis
2. Save it as a `.md` or `.txt` file
3. Copy it into the `context/` folder in this project

That's it — no ingestion step needed. Claude Code reads files directly when you ask it to.

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

### Role-Specific Variations: UX and Design Workflows

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

## Week 3: Build Systems, Not Just Answers

**Goal**: By the end of this week, you have a personal prompt library, a reliable way to evaluate AI outputs, and you can introduce a colleague to this system.

---

### Day 15–17: Build Your Prompt Library

**What you're doing**: Creating reusable templates so every query doesn't start from scratch.

#### What Makes a Good Prompt

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

The file `prompts/templates.md` already contains 18 templates organized by role (PM, UX, Research, Cross-functional). Browse it, pick the ones relevant to your work, and start customizing them.

To use a template: open it, copy the prompt text, replace `[brackets]` with your specifics, and paste it into Claude Code.

#### Exercise 3.1: Write Your Three Templates

Think about the three most repetitive tasks **in your specific role** right now. Write a prompt template for each. Test each one with real documents. The test passes when you'd actually use the output in a real work situation without major edits.

Some starting points by role:
- **PM**: stakeholder update, launch readiness check, roadmap prioritization rationale
- **UX Designer**: design review checklist, handoff documentation audit, interaction pattern consistency check
- **UX Researcher**: research synthesis, participant recruitment screener review, findings-to-recommendations bridge
- **Product Analyst**: metric definition audit, experiment results summary, data gap identification

Add your templates to `prompts/templates.md` in the "My Custom Templates" section at the bottom.

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
2. Check: was this in your documents? (ask Claude "Which document is that from?")
3. Is the claim accurate?
4. What would have happened if you had used this without checking?

The goal is not paranoia — it's calibration. After this exercise, you should have a clear sense of what this tool is reliable for and what it isn't.

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
- Documents in `context/` that contain sensitive business data, personal data, or unreleased product plans. Check your company's AI usage policy before adding anything confidential.

#### How to Run a Team Onboarding Session

When introducing this to colleagues, structure it as:

1. **Demo first (10 min)**: Show a real example. Open Claude Code, point it at a real document, ask a real question. Show how it references the source document in the answer.
2. **Explain the why (5 min)**: Why does context matter? What happens when Claude doesn't have it? (Test this live — ask something it can't answer.)
3. **Live setup (15 min)**: Walk through installing Claude Code together. Have them add their own document to `context/`.
4. **First exercise (20 min)**: Everyone asks Claude three questions about their document.
5. **Debrief (10 min)**: What surprised them? What questions came up?

#### Exercise 3.3: Teach One Colleague

Find one person who might benefit. Walk them through setup and their first Claude Code session. Write down the questions they asked that you couldn't answer — those are gaps to fix either in documentation or in this guide.

---

## Appendix A: Terminal Cheat Sheet (For Non-Engineers)

**Open Terminal on Mac**: Press Cmd + Space, type "Terminal", press Enter.

**Navigate to this project:**
```bash
cd ~/Documents/Claude/ProductAgentLab
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
| Token | The unit of text an AI processes — roughly 3/4 of a word. Relevant because very long documents may need to be split into smaller files. |

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

*This guide was self-generated as a structured alternative to a paid course. Share it with your product, UX, and research teammates. Improve it as you learn. The prompts you write in Week 3 are the most valuable artifact — they're specific to how your team works and what your product needs.*
