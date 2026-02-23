Enable executives to build, customize, and save high-level dashboards that aggregate health and compliance data across multiple projects, providing a comprehensive "birds-eye" view of their software portfolio.
➤ WHY
💰 Value Proposition
Target users: VPs of Engineering, Directors, CISOs, Head of Application Security, and Portfolio/Program Managers in Enterprise environments.
Job to be done: As a leader overseeing multiple teams and hundreds of projects, I need to visualize the aggregate health, security posture, and trends of my entire portfolio in a single view so that I can report to stakeholders, allocate resources effectively, and ensure alignment with organizational standards without clicking through individual projects.
Pain: Currently, Portfolio views are rigid and lack meat and historical trends. Users often have to export data or click through projects to create the specific views they need. There is no way to mix high-level KPIs (e.g., "Overall Reliability Rating") with granular "Watch Lists" of critical projects in the same view.
Gain: A flexible, customizable canvas at the Portfolio level. This allows leaders to tell specific stories with their data (e.g., "Show me a dashboard just for the Tech Debt Initiative" or "Show me a Security Compliance view for Auditors"). It saves time on manual reporting and creates a shared language for quality discussions at the executive level.

💥 Impact
Reach: High. This is a primary feature for Enterprise and Data Center customers (where Portfolios are a key selling point).
Importance: High. This bridges the gap between "Developer tools" and "Management tools", helping to prove the ROI of SonarQube to the stakeholders paying the bill. It increases "stickiness" by making SonarQube the primary reporting engine for software quality.

🔦 Context (optionally)
We recently released Project-level Custom Dashboards in SQC, establishing the technical framework and widget library (grids, drag-and-drop, core widgets).
This MMF lifts that capability up to the Portfolio level.
Historically, SonarQube Portfolios have been powerful but static. Customers frequently request the ability to see specific aggregated KPIs and to see trends over time. This aligns with a broader strategy of "executive visibility".

➤ WHAT
✍️ Use Cases
As a VP of Engineering, I want a single dashboard showing the Reliability and Security Ratings of my portfolio, and projects side-by-side to check status immediately upon login.
As a CISO, I want to build a temporary dashboard focusing purely on "Security Hotspots Reviewed %" across the entire organization to track progress during a security sprint.

✅ Acceptance Criteria
Functional requirements
TBD.

Non-functional requirements (NFRs)
TBD.

LaunchDarkly
Rollout strategy: Internal Dogfooding -> Private Beta Customers -> General Availability.

Telemetry
Track creation count.
Track which widgets are most used at the portfolio level (to validate which metrics executives care about most).
Track engagement/stickiness (are they returning to the view?).

Out of scope
PDF reporting/scheduling (sending the dashboard via email).
Drill-downs.

KRs
TBD.

➤ HOW
Technical spec: [Link]
UX involvement: [Link]
Documentation: Update "Managing Portfolios" section.
Dependencies: None.
Risks & mitigation:
Risk: Performance on massive portfolios causing timeouts.
Mitigation: Ideas could be caching strategies for aggregated metrics, lazy loading for widgets below the fold.
Risk: User confusion on metric definitions (e.g., "Why is my portfolio reliability 'A' if one project is 'E'?").
Mitigation: Tooltips explaining aggregation logic (e.g., "Weighted average based on LOC").
