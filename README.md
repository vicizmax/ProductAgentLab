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

### Step 1: Install Node.js

Claude Code needs Node.js to run. If you're not sure whether you have it, that's fine — just install it.

1. Go to [nodejs.org](https://nodejs.org)
2. Click the big green button that says **LTS** (the "stable" version)
3. Open the downloaded file and follow the installer prompts
4. When it's done, move on to Step 2

### Step 2: Install Claude Code

Open your terminal:
- **Mac**: Press `Cmd + Space`, type **Terminal**, press Enter
- **Windows**: Press the Windows key, type **Command Prompt**, press Enter

Then paste this command and press Enter:

```
npm install -g @anthropic-ai/claude-code
```

You'll see some text scroll by. Wait until it finishes (you'll see your cursor blinking on a new blank line). If you see an error mentioning "npm not found", go back to Step 1.

### Step 3: Download this project

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

### Step 4: Open Claude Code in the project

In your terminal, navigate to the project folder. If you put it in Documents, the command is:

```
cd ~/Documents/product-ai-starter
```

> **Tip**: If you're not sure of the exact folder name or path, type `cd ~/Documents/` and then press **Tab** — your terminal will show you what folders are available.

Then start Claude Code:

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

1. Open your terminal
2. Navigate to the project folder: `cd ~/Documents/product-ai-starter`
3. Type `claude` to start a fresh session, or `claude --continue` to pick up where you left off (this is cheaper — Claude doesn't re-read everything from scratch)
4. Type `/learn` to continue the syllabus from where you stopped

## Using with Cursor Instead of Terminal

If you prefer [Cursor](https://cursor.com) (a code editor with AI built in) over the terminal:

1. Download and install [Cursor](https://cursor.com)
2. Open Cursor, then go to **File → Open Folder** and select this project folder
3. Open the built-in terminal in Cursor: press `` Ctrl + ` `` (backtick — the key above Tab)
4. Type `claude` to start Claude Code, then `/learn` to begin

The project works the same way in Cursor — you're just using its terminal instead of the standalone Terminal app. Cursor also has its own AI chat (`Cmd + L` on Mac, `Ctrl + L` on Windows) that will follow the rules in `.cursor/rules/` automatically.

---

## Troubleshooting

**"npm not found"** — You need Node.js. Go back to Step 1.

**"claude: command not found"** — Close your terminal, open a new one, and try `claude` again. If it still doesn't work, re-run the install command from Step 2.

**Claude asks me to log in every time** — This is normal for the first few sessions. It should remember you after that.

**I don't see any documents when I run /analyze** — You need to add your own product documents to the `context/` folder first. The `/learn` walkthrough covers this in the first exercises.

**I want to start the syllabus over** — Delete the `progress/journal.md` file and run `/learn` again.

---

## Questions or Feedback?

Open an issue on this repository or ask Claude Code directly — it's designed to help you learn.
