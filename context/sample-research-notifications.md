# User Research: Notification Overload

**Researcher**: Alex Rivera
**Date**: 2024-12-10
**Method**: Semi-structured interviews, 45 minutes each
**Participants**: 8 Windmill users (mix of project managers, designers, and engineers)
**Recruitment**: Users who rated notification satisfaction below 4/10 in Q4 survey

---

## Key Findings

### Theme 1: Volume Isn't the Core Problem — Missed Items Are

All 8 participants complained about notification volume, but when probed, 6 of 8 said their real fear was missing something important. Volume is the symptom; anxiety about missed items is the disease.

> "I don't care about getting 50 notifications. I care that the one notification that actually matters is buried in 49 that don't." — P3, Project Manager

> "I've started checking notifications every 30 minutes just in case. It's like a nervous habit now." — P7, Designer

### Theme 2: Users Have Built Elaborate Workarounds

5 of 8 participants described personal systems for managing notifications:
- P1 uses a separate Slack channel where they manually forward important Windmill notifications
- P2 and P5 both set calendar reminders to "check Windmill notifications" twice a day
- P4 created a browser bookmark folder of "things I need to respond to" by copying Windmill URLs
- P6 asked a teammate to text them if something urgent comes up in Windmill

> "I know it's ridiculous. I'm using three tools to manage notifications from one tool." — P1, Engineer

### Theme 3: "Critical" Means Different Things to Different Roles

When asked "what notification should always interrupt you?", answers diverged sharply by role:

| Role | "Always interrupt me for..." |
|------|------------------------------|
| Project Managers (P1, P3, P5) | Blockers, missed deadlines, scope changes |
| Designers (P4, P7) | Review requests, feedback on their work, design system changes |
| Engineers (P2, P6, P8) | Build failures, security alerts, PR reviews assigned to them |

No single definition of "critical" covers all roles. A blocker is urgent for a PM but background noise for a designer on a different project.

### Theme 4: Users Want Control, Not Just AI

When we described the Beacon concept (AI-prioritized digest), reactions were mixed:

- 3 participants were enthusiastic ("Finally, yes, just tell me what matters")
- 3 were cautious ("How would it know what I care about? I'd need to train it")
- 2 were skeptical ("I've seen AI categorization in email. It's wrong half the time")

The cautious group specifically asked for transparency: they want to see *why* something was categorized a certain way and have easy overrides.

> "If I can't understand why it thinks something is low-priority, I'll just turn it off and go back to the firehose." — P6, Engineer

### Theme 5: Real-Time Critical Alerts Are Non-Negotiable

All 8 participants agreed on one thing: truly urgent items should never wait for a digest.

> "A daily digest is great for the noise. But if there's a production incident at 3 PM, I need to know at 3 PM, not tomorrow morning." — P2, Engineer

3 participants specifically said they would not use Beacon at all if it delayed critical alerts, even by an hour.

---

## Contradictions With Current PRD Direction

1. **Opt-out may backfire.** The PRD proposes Beacon as opt-out (on by default). But 2 of our 8 skeptical participants said they would feel "manipulated" if an AI feature was turned on without their consent. This is a small sample, but worth monitoring — forced AI features have generated backlash at other companies.

2. **Daily digest timing may not be enough.** The PRD defaults to a morning digest. But 4 participants said they'd want at least 2-3 digests per day. P3 specifically said: "By 3 PM, my morning digest is useless. Half the stuff has changed."

3. **The PRD underestimates the "critical" definition problem.** The PRD defines critical as "blockers, @-mentions in decision threads, SLA violations." But our research shows this definition only matches PM expectations. Designers and engineers have completely different urgency triggers. A one-size-fits-all definition will frustrate at least some roles.

---

## Recommendations

1. **Allow multiple daily digests** — at minimum morning and afternoon, ideally user-configurable.
2. **Make the prioritization model transparent** — show users why items were categorized the way they were.
3. **Let users define their own "critical" triggers by role or preference**, rather than a single workspace-wide definition.
4. **Consider opt-in for the first launch** to build trust, switching to opt-out once the model has proven accurate (after 2-3 months of data).
5. **Run a follow-up study on mobile notification behavior** — we have no data on how mobile usage patterns affect digest preferences.

---

## Limitations

- Small sample size (n=8), all from users who already expressed dissatisfaction. Satisfied users may have different needs.
- No quantitative validation of themes. These are qualitative patterns only.
- All participants were from North American time zones. Notification patterns may differ for global teams.

---

*This is a sample document included with product-ai-starter for learning purposes. Replace it with your own product documents when you're ready.*
