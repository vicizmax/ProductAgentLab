# Product AI Starter

A learning environment for product teams — PMs, UX designers, researchers — to use Claude Code as a daily work tool. No coding required.

Start by asking questions grounded in your actual product documents, then level up to building prototypes, connecting to tools like Jira and Figma, running parallel AI agents, and generating visualizations — all without writing code.

---

## What You'll Need

- A Mac or Windows computer
- An internet connection
- About 15 minutes for initial setup
- An Anthropic account with a Claude Pro or Team plan (for Claude Code access)

---

## Setup: From Zero to Running

Follow these steps in order. If you get stuck on any step, that's normal — just describe what happened and ask for help.

### Step 1: Get started with Claude Code up and running

Follow these steps here: [https://github.com/SonarSource/augmented-product-craft/blob/master/getting-started/claude-code.md](https://github.com/SonarSource/augmented-product-craft/blob/master/getting-started/claude-code.md)

### Step 2: Download this project

You have two options. Pick whichever feels easier.

**Option A — Download as ZIP (simplest)**

1. On this page, click the green **Code** button near the top
2. Click **Download ZIP**
3. Find the downloaded ZIP file and unzip it (double-click it on Mac, or right-click → Extract on Windows)
4. Move the unzipped folder to somewhere you'll remember, like your Documents folder

**Option B — Clone with the terminal (if someone showed you git)**

```
cd ~/Documents
git clone https://github.com/vicizmax/product-ai-starter.git
```

### Step 3: Open the project in an IDE

We recommend using an IDE (a code editor) because it lets you see your files in a sidebar, drag and drop documents into folders, and run Claude Code in a built-in terminal — all in one window.

**Recommended: [Cursor](https://cursor.com)** or **[VS Code](https://code.visualstudio.com)** — both are free.

1. Download and install [Cursor](https://cursor.com) or [VS Code](https://code.visualstudio.com)
2. Open it, then go to **File → Open Folder**
3. Select the `product-ai-starter` folder you downloaded in Step 2
4. You should see the project files in the left sidebar (`context/`, `prompts/`, `SYLLABUS.md`, etc.)

### Step 4: Open the terminal and start Claude Code

Your IDE has a built-in terminal — no need to open a separate app.

- **Cursor / VS Code**: Press `` Ctrl + ` `` (backtick — the key above Tab) to open the terminal panel at the bottom

In that terminal, type:

```
claude
```

The first time you run this, Claude Code will ask you to log in to your Anthropic account. Follow the prompts — it will open a browser window for you.

### Step 5: Start learning

Once Claude Code is running (you'll see a prompt where you can type), type:

```
/learn
```

This launches a guided, interactive walkthrough of the full learning syllabus. It will:
- Walk you through exercises one at a time, in plain language
- Track your progress so you can stop and pick up later
- Explain every concept without assuming technical knowledge

That's it. You're up and running.

---

## What's in This Project

```
context/          ← Your product documents go here (.md, .txt, .csv files)
prompts/          ← A library of 18 reusable prompt templates
SYLLABUS.md       ← The full 4-week learning guide
CLAUDE.md         ← Instructions that tell Claude how to behave in this project
progress/         ← Your personal learning journal (created automatically)
```

## Five Built-in Commands

Once you're inside Claude Code, these commands are always available:

| Command | What it does |
|---|---|
| `/learn` | **Start here.** Guided walkthrough of the syllabus with progress tracking |
| `/start` | Quick orientation — summarizes your documents and suggests first questions |
| `/analyze` | Structured analysis of all your documents (decisions, risks, gaps) |
| `/template` | Browse and customize prompt templates for PM, UX, and research tasks |
| `/audit` | Detailed review of a single document for completeness |

## Resuming a Session

When you come back to this project later:

1. Open your IDE (Cursor or VS Code)
2. The project should still be open — if not, go to **File → Open Folder** and select it again
3. Open the terminal (`` Ctrl + ` ``)
4. Type `claude` to start a fresh session, or `claude --continue` to pick up where you left off (this is cheaper — Claude doesn't re-read everything from scratch)
5. Type `/learn` to continue the syllabus from where you stopped

> **Prefer the standalone terminal?** That works too. Open Terminal (Mac) or Command Prompt (Windows), run `cd ~/Documents/product-ai-starter`, then `claude`.

---

## Troubleshooting

**"npm not found"** or **"claude: command not found"** — Something went wrong with the Claude Code installation. Go back to Step 1 and follow the setup guide again. If you just installed it, try closing and reopening your terminal.

**Claude asks me to log in every time** — This is normal for the first few sessions. It should remember you after that.

**I don't see any documents when I run /analyze** — You need to add your own product documents to the `context/` folder first. The `/learn` walkthrough covers this in the first exercises.

**I want to start the syllabus over** — Delete the `progress/journal.md` file and run `/learn` again.

---

## Questions or Feedback?

Open an issue on this repository or ask Claude Code directly — it's designed to help you learn.
