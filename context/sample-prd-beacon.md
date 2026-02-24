# PRD: Beacon — Smart Notification Digest

**Author**: Jamie Chen, Product Manager
**Last updated**: 2025-01-15
**Status**: In Review
**Team**: Windmill Engagement Squad

---

## Problem Statement

Windmill users receive an average of 47 notifications per day. In our Q4 survey, 68% of users said notification volume is their #1 frustration with the product. More critically, 41% reported missing action-required items because they were buried in low-priority updates.

The current notification system treats all events equally — a teammate liking your comment generates the same alert as a blocker being raised on your project. Users have two choices: leave all notifications on (and drown) or turn most off (and miss things that matter).

## Proposed Solution

Beacon is a smart notification digest that groups, prioritizes, and summarizes notifications. Instead of 47 individual pings, users receive a morning digest organized by urgency:

- **Action Required**: items that need the user's response (blockers, review requests, mentions in decisions)
- **Updates**: progress on projects they follow (status changes, completed tasks, new comments)
- **FYI**: low-priority items (likes, minor edits, team joins)

Beacon uses a prioritization model trained on user behavior patterns: what they click on, what they ignore, what they act on within 30 minutes vs. never.

### Key Behaviors

1. Daily digest delivered at user's chosen time (default: 9:00 AM local)
2. Critical items (blockers, escalations) bypass the digest and alert immediately
3. Users can reclassify items with one click ("This isn't urgent" / "I need to see these immediately") — this feedback trains the model
4. Digest is available in-app, email, and Slack integration
5. Users can switch back to individual notifications at any time

## Success Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Notification satisfaction (survey) | 3.1 / 10 | 7.0 / 10 | Quarterly NPS survey |
| Action-required response time | 4.2 hours | Under 1 hour | Time from notification to user action |
| Missed critical items | 41% report missing items | Below 10% | Quarterly survey |
| Daily active usage | — | 60% of users open digest daily | Product analytics |

## Decisions Made

1. **Daily digest, not real-time grouping.** We considered a real-time feed that groups notifications as they arrive, but user interviews (see research notes) indicated that batching reduces anxiety more than sorting. Users want fewer interruptions, not better-organized interruptions.

2. **Opt-out, not opt-in.** New users will receive Beacon by default. They can switch to classic notifications in settings. Rationale: the notification problem affects most users, and opt-in features historically see under 15% adoption at Windmill.

3. **Start with email + in-app.** Slack integration is Phase 2. The Slack API changes quarterly and building a stable integration needs dedicated engineering time we don't have in Q1.

## Open Questions

1. **What qualifies as "critical"?** Current definition: blockers, @-mentions in decision threads, SLA violations. But different teams have different urgency thresholds. Should we let workspace admins configure this? Engineering estimates 2 additional weeks for admin controls.

2. **Mobile behavior**: Should the mobile app show the digest view or keep individual notifications? Mobile users check more frequently but in shorter sessions. We don't have mobile-specific research yet.

3. **Undo window**: If Beacon miscategorizes something as low-priority and the user misses it, what's the recovery path? Legal wants to understand our liability for missed SLA notifications.

4. **Pricing**: Should Beacon be available on the Free plan, or only on Pro and Enterprise? Growth team hasn't weighed in yet.

## Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Prioritization model gets it wrong — buries an important notification | High | Confidence threshold: items below 80% confidence go to "Updates" not "FYI." Weekly model review for first 3 months. |
| Users don't trust AI categorization and switch back to classic | Medium | Transparent labeling ("Beacon thinks this is low-priority because..."). Easy one-click reclassification. |
| Performance at scale — computing priorities for 50K+ daily users | Medium | Not yet assessed. Engineering to provide load test plan by Jan 30. |
| Slack integration delay impacts enterprise deals | Low | Communicated to sales: Slack is Phase 2 (Q2). Three enterprise prospects have asked specifically about Slack. |

## Acceptance Criteria

- [ ] User can set their preferred digest delivery time
- [ ] Digest correctly groups items into Action Required / Updates / FYI
- [ ] Critical items (blockers, SLA violations) bypass digest and alert immediately
- [ ] User can reclassify any item with one click
- [ ] Reclassification feedback is incorporated into the model within 24 hours
- [ ] User can switch back to classic notifications at any time
- [ ] Email digest renders correctly in Gmail, Outlook, and Apple Mail

## Dependencies

- **Notification API v2**: Engineering is rebuilding the notification pipeline (expected complete Feb 15). Beacon requires the new event metadata fields. If v2 slips, Beacon slips.
- **ML Platform**: The prioritization model runs on the ML team's inference platform. We have a slot reserved for Q1, but it's shared with the Search team's relevance project.

## Timeline

| Milestone | Target Date |
|-----------|-------------|
| Design complete | Jan 31 |
| API v2 ready | Feb 15 |
| Alpha (internal team) | Mar 1 |
| Beta (10% of Pro users) | Mar 15 |
| GA | Apr 1 |

---

*This is a sample document included with product-ai-starter for learning purposes. Replace it with your own product documents when you're ready.*
