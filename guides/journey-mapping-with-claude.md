# User Journey Mapping with Claude Code

## What Claude Code Can Do for Journey Maps

### Text-based journey maps from your documents

If you put product docs in `context/`, Claude Code can analyze them and generate structured journey maps as tables or step-by-step flows.

**Example prompt:**

```
Based on the documents in context/, map the user journey for [feature].
For each stage, identify: touchpoint, user action, emotion, pain points, opportunities.
Output as a markdown table.
```

### Visual outputs Claude Code can generate directly

- **Mermaid diagrams** — flowcharts and sequence diagrams that render in many markdown viewers
- **SVG files** — scalable vector graphics, written as code
- **HTML files** — a self-contained `.html` file with CSS-styled journey maps you open in a browser
- **PlantUML** — another diagram-as-code format

## Simulating Users

Claude Code can role-play as user personas and walk through your product flows — narrating decisions, confusion points, and drop-off risks. There are several approaches:

### 1. Document-based simulation

Place your product specs, wireframes-as-text, or flow descriptions in `context/`, then ask Claude to role-play personas walking through them.

**Example prompt:**

```
Role-play as a non-technical first-time user walking through the onboarding flow
in context/onboarding-spec.md. At each step, describe what you see, what you
expect, what confuses you, and rate your confidence (1-5) that you'd continue.
```

### 2. Codebase-based simulation

If you point Claude Code at a frontend codebase, it can read component trees, routing logic, and UI text to infer the user experience — then "walk through" it as a persona. It can't see the rendered UI, but it can trace the logic.

### 3. Multi-persona comparison

Ask Claude to walk through a flow as 3-4 different personas (power user, first-timer, accessibility needs) and report where each would struggle. This is a lightweight form of heuristic evaluation.

## Practical Example

1. Add a product spec or flow description to `context/`
2. Ask: *"Role-play as a non-technical first-time user walking through the onboarding flow in context/onboarding-spec.md. At each step, describe what you see, what you expect, what confuses you, and rate your confidence (1-5) that you'd continue."*
3. Then ask Claude to output the journey as a Mermaid diagram or HTML file

## Limitations

- Claude Code **cannot open a browser**, interact with a running application, or take screenshots. Simulations are based on documents, descriptions, or source code — not a live product.
- A recent paper, [Lost in Simulation](https://arxiv.org/html/2601.17087), found that LLM-simulated users are **unreliable proxies** for real humans. Use simulations for brainstorming and hypothesis generation, not as a replacement for real user research.

## Resources

- [Claude for Code: Streamlining Product Design](https://uxplanet.org/claude-for-code-how-to-use-claude-to-streamline-product-design-process-97d4e4c43ca4) — practical walkthrough of Claude in design workflows
- [Building AI-Driven Workflows with Claude Code](https://uxdesign.cc/designing-with-claude-code-and-codex-cli-building-ai-driven-workflows-powered-by-code-connect-ui-f10c136ec11f) — combining Claude Code with Figma for prototypes
- [Using AI to Streamline Persona and Journey Map Creation](https://uxdesign.cc/using-ai-to-streamline-persona-and-journey-map-creation-37fa859dafb0) — UX practitioner perspective on AI-generated journey maps
- [How to Use Claude for UX Analysis](https://beginswithai.com/how-to-use-claude-for-user-experience-analysis/) — step-by-step guide
- [AI Meets Customer Experience: Mapping Journeys with ML](https://blog.hubspot.com/service/ai-customer-journey-map) — HubSpot guide on AI journey mapping
- [Using AI to Map Business Systems Visually with Claude](https://www.mejba.me/blog/ai-visual-business-mapping-claude) — generating Excalidraw/Mermaid diagrams from descriptions
- [How to Use Claude to Plan MVP Features & User Flows](https://appkodes.com/blog/how-to-use-claude-to-plan-mvp-features/) — MVP planning with Claude
- [An AI for UX: Speeding Up User Research](https://medium.com/lexisnexis-design/an-ai-for-ux-how-i-used-generative-ai-to-speed-up-user-research-cdc097b5a5a4) — using LLMs for qualitative analysis
- [Lost in Simulation: LLM-Simulated Users as Unreliable Proxies](https://arxiv.org/html/2601.17087) — important research on limitations of simulated users
