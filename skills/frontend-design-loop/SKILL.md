---
name: frontend-design-loop
description: "Coordinate frontend art direction, visual review, interaction/product audit, authorized implementation, and verification. Select only the workflow mode the user requested; respect visual locks and high-risk operation boundaries."
---

# Frontend Design Loop

## Mission

Coordinate a disciplined frontend improvement workflow. Select the correct mode before acting; do not force every task through visual redesign.

Supported modes:
- **VISUAL_DESIGN** — establish visual direction, implement, critique, refine, verify.
- **INTERACTION_IMPROVEMENT** — preserve current visual direction, audit interactions and journeys, implement approved behavior fixes, re-audit.
- **FULL_PRODUCT_UX** — combine visual and interaction review when the user asks for both.
- **AUDIT_ONLY** — inspect and report without modifying code.

## Required Skills and routing

- `frontend-art-director`: only for VISUAL_DESIGN or when the user explicitly asks for a new visual direction.
- `frontend-visual-critic`: visual review, page-level interaction review, or product journey review using the mode specified in its instructions.

Do not invent or require a fourth Skill. The existing Visual Critic contains the interaction/product audit procedure.

If the companion Skill is unavailable, disclose the limitation and follow only the relevant method. Do not claim independent agents or tool capabilities that were not actually used.

## Phase 0 — Scope, safety, and baseline

1. Confirm product, environment, user goal, roles, target routes, and requested mode.
2. Read repository instructions and inspect Git branch/status when available.
3. Identify framework, scripts, architecture, design system, API boundaries, data stores, browser tools, and tests.
4. Record explicit constraints: visual lock, read-only, no payment, no credit use, no deletion, no production writes, etc.
5. Capture relevant baseline screenshots and behavior when available.
6. Preserve unrelated user changes and establish rollback.
7. If the user asked only for an audit, remain read-only.

Do not ask the user to repeat constraints they have already stated.

## Phase 1 — Choose the correct planning path

### VISUAL_DESIGN
Use Art Director to inspect the project and create an actionable visual brief. Preserve existing business semantics and established design-system conventions unless explicitly targeted.

### INTERACTION_IMPROVEMENT
Do not invoke Art Director. Use Visual Critic in INTERACTION_ONLY or PRODUCT_JOURNEY mode. Map the relevant user journeys, state transitions, errors, persistence, recovery, and side effects. Explicitly list visual elements and business behavior that must remain unchanged.

### FULL_PRODUCT_UX
Use Art Director only if a new or changed visual direction is actually requested. Run visual and interaction reviews as separate workstreams and keep their findings distinct.

### AUDIT_ONLY
Route a whole-site audit to Visual Critic in PRODUCT_JOURNEY or FULL_PRODUCT_UX according to the requested scope. Carry over the original roles, constraints and full site scope. Apply the Critic’s whole-site completion rule and return its complete findings and coverage together in this request. Implementation budgets apply only to fixes. Finish after the report.

## Phase 2 — Audit before fixing

For interaction/product tasks:
1. Inventory relevant routes, features, roles, and business objects.
2. Map user journeys from entry to successful completion.
3. Execute scenarios and record expected versus actual results.
4. Inspect state sources and async lifecycle.
5. Trace cross-layer inconsistencies through request IDs, events, persistence, and UI state where evidence is available.
6. Separate observed symptoms, verified root causes, likely causes, and hypotheses.
7. Build a coverage matrix; untested scenarios are not passed.
8. Identify side effects and explicitly prohibited tests.

Do not jump from symptom to code change. Do not propose a backend fix without evidence.

## Phase 3 — Generate or fix

Only when implementation is authorised:
1. Use the project's existing coding agent and tools.
2. Implement the smallest coherent changes tied to verified findings.
3. Preserve business logic, data flow, permissions, routes, visual style locks, and unrelated behavior.
4. For state inconsistencies, trace the source of truth, operation/task IDs, event ordering, persistence, and refresh behavior before changing state logic.
5. Do not add retry behavior until original acceptance, idempotency, and side effects are verified.
6. Do not run payments, purchases, subscriptions, credit-consuming operations, publishing, messaging, deletion, or irreversible actions without explicit approval for that exact test.

### Carry the design decision through implementation

For each authorised change, trace finding ID → intended user outcome → chosen behavior → existing component/events/state → replay path. Preserve unrelated business events and distinct state owners. Check component conflicts, dependency and license implications before using an external recipe. Implement motion only for the documented purpose, including interruption, reversal, keyboard/touch and reduced motion. An audit-only handoff carries the same decisions and alternatives as proposals and ends with the full report.

Trace component-level changes to the matching rule and its applicability in references/component-rule-index.md. Inspect the real hit region, handler, state owner and visual tokens before changing implementation. Replay nested/group transitions, pressed versus committed feedback, keyboard focus, pointer exit and reduced motion where applicable. Include before/after evidence of the same state combination and preserve successful neighboring controls.

## Phase 4 — Independent verification

- Visual changes: use Visual Critic in VISUAL_ONLY or FULL_PRODUCT_UX mode with current browser evidence.
- Interaction changes: use Visual Critic in INTERACTION_ONLY or PRODUCT_JOURNEY mode and replay the exact journey and recovery scenarios.
- Full product UX: keep visual and interaction verification separate.
- Inspect actual behavior before reading the generator's self-review.
- Record browser, network, server, code, and test evidence separately.
- Mark each finding FIXED / PARTIALLY_FIXED / UNRESOLVED / REGRESSED.

Follow the comparison and replay procedure in references/iteration-protocol.md for each implemented interaction. Record observed outcomes alongside the original decision and acceptance condition.

## Phase 5 — Focused refinement

1. Fix the highest-impact verified issues first.
2. Preserve explicit visual locks and listed strengths.
3. Address root causes only when verified; otherwise request missing diagnostic evidence or make only a safe, clearly scoped UX improvement.
4. Re-run relevant regression tests.
5. Repeat the same task with comparable starting conditions.
6. Stop if fixes cause regressions or evidence is insufficient.

## Iteration budget

- Default: at most 3 refinement rounds.
- Maximum: 5 only when each round makes meaningful progress.
- Fix at most 3 high-impact issues per implementation round.
- Do not limit a comprehensive audit's finding register to three; summarise the top three separately.
- Stop after two rounds without meaningful improvement.
- Do not chase subjective perfection.

## Safety and ownership

- Code changes require explicit user authorisation.
- Work only in the authorised repository and branch.
- Do not push, merge, deploy, or perform irreversible actions unless explicitly requested.
- Preserve unrelated changes.
- Show the diff, tests, and rollback path.
- Never expose credentials, tokens, or private user content in reports.
- Visual Critic remains read-only.

## Final deliverables

For visual work: Art Direction Brief, before/after screenshots, visual critique, and regression results.

For interaction/product work: route and feature inventory, journey maps, coverage matrix, complete prioritised findings, verified causes versus hypotheses, side-effect exclusions, and regression results.

For implementation: files changed, diff, tests, remaining unknowns, and PASS / PARTIAL / FAIL verdict.

## Failure modes

- No browser: do not claim visual or interaction verification.
- No network/server access: do not claim backend root cause.
- No independent agent: disclose limited independence.
- No write authorisation: remain read-only.
- Unknown operation acceptance or cost: do not retry.
- User locks visual style: do not invoke Art Director or redesign visuals.
