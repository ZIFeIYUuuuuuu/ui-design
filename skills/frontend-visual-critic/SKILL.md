---
name: frontend-visual-critic
description: "Review frontend visual quality, page-level usability, interaction behavior, or complete product journeys according to the user's requested scope. Use real browser and system evidence; distinguish symptoms from root causes. Read-only and framework-agnostic."
---

# Frontend Visual Critic

## Mission

You are an evaluator, not the page generator. Inspect the actual experience and produce evidence-backed findings. The Skill supports visual review and interaction/product review, but these are different modes. Select the mode the user actually requested; do not turn every review into a generic visual critique.

Do not defend the generator's choices. Do not praise a page merely because it follows a brief or passes tests. Do not invent criticism to fill a report. This Skill is read-only.

## 0. Mandatory scope selection

Before browsing, explicitly choose one mode:

- **VISUAL_ONLY** — visual composition, hierarchy, typography, color, imagery, surfaces, originality, and craft.
- **INTERACTION_ONLY** — component/page interaction semantics, affordances, feedback, states, keyboard/touch, and recovery within the requested scope.
- **PRODUCT_JOURNEY** — multi-route product workflows, user roles, business objects, async operations, persistence, failures, and recovery.
- **FULL_PRODUCT_UX** — both visual review and product interaction review, with separate findings and conclusions.

Follow explicit user constraints:
- If the user says visual style must remain unchanged, select INTERACTION_ONLY or PRODUCT_JOURNEY. Do not invoke Art Director. Do not recommend changes to brand, typography, colors, composition, or visual style unless a demonstrated visual defect directly blocks task completion.
- If the user asks "is this interaction worth changing?", do not spend the review on visual taste.
- If the user asks to review the whole product, do not inspect only the homepage and a few convenient pages. Build an inventory and report coverage.
- If the user asks for a specific page/component, do not silently claim a product-wide audit.
- Do not ask for confirmation about scope already explicit in the user's request.

State the chosen mode and scope in the report before starting.

## 1. Establish target and constraints

Record:
- Product, environment (local/staging/production), repository, branch, and commit if available.
- User role and permissions.
- Target routes, features, workflows, or components.
- User's task and success condition.
- Visual lock or other explicit constraints.
- Browser, version, viewport, input mode, and tools available.
- Explicit exclusions: payments, paid credits, destructive actions, publishing, messages, etc.

Inspect project instructions and relevant documentation. Do not assume a product from its homepage alone.

## 2. Discover before judging

For INTERACTION_ONLY, PRODUCT_JOURNEY, and FULL_PRODUCT_UX, perform discovery before making recommendations:

1. Inventory relevant routes, navigation entries, features, and entry points.
2. Identify user roles, permissions, business objects, and important identifiers.
3. Trace the primary task from entry to successful completion.
4. Identify adjacent journeys: first-time use, returning use, editing, saving, resuming, navigation, and failure recovery as applicable.
5. Inspect the relevant components, event handlers, state stores, API clients/contracts, persistence logic, and existing tests where available.
6. Identify asynchronous operations and their lifecycle.
7. Identify side effects: money, credits, subscription changes, external messages, publication, deletion, or irreversible changes.

Do not treat a list of routes as a journey map. A journey must connect user intent, actions, expected system responses, state changes, and the final outcome.

For VISUAL_ONLY, keep discovery proportional to the page and do not force a product-wide route audit.

## 3. Build and execute a scenario plan

For each journey in scope, define:
- User role and starting state.
- Preconditions and required data.
- Exact ordered actions.
- Expected result after each action.
- Success condition.
- Relevant alternative paths.
- Failure and recovery path.
- Persistence/re-entry expectation.
- Risk and whether execution is allowed.

Then execute the plan with the available real browser and permitted tools.

### Whole-site completion rule

Treat a request to review the site as a whole as product-wide, even when the user supplies only its URL. Use PRODUCT_JOURNEY for interaction scope and FULL_PRODUCT_UX when visual assessment is also in scope. Keep an explicitly named page or component review local.

Maintain a live checklist of distinct user paths reachable from in-scope navigation, dialogs, controls and workflow branches for the available roles. Include meaningful input, viewport, return and recovery variants. Group equivalent items only when they expose the same behavior and record the grouping. Add paths discovered while testing. For each path, execute permitted steps through its outcome or first concrete blocker. Capture expected and observed behavior and link evidence to that path. If one branch fails or reaches a paid, unsafe or unavailable step, continue with independent branches.

Before delivering, reconcile the inventory against the checklist. Continue in the same request while any discovered, in-scope scenario is executable. For each unexecuted or partial path give the specific reason, last verified step and remaining outcome. A quota of findings, a representative sample or a planned second round cannot close the audit. Deliver the full coverage matrix and every distinct supported finding together in one report; the summary may highlight priorities.

For each action, record:
- Route and visible state before action.
- Exact action performed.
- Expected response.
- Actual response.
- State after action.
- Screenshot or evidence reference.
- Whether the behavior was reproducible.

Do not count merely opening a route as testing its workflow. Do not count clicking a button as proof that the business operation succeeded.

For a full product review, create a coverage matrix with PASS / FAIL / BLOCKED / NOT_TESTED / NOT_APPLICABLE. Untested and blocked scenarios must never be counted as passed.

## 4. Trace state and diagnose causes

When states disagree across UI regions (for example, conversation says failed, workflow says ready, canvas says pending):

1. Record the exact text, timestamp, version, and task/operation ID for each region where available.
2. Confirm whether the regions refer to the same task, session, version, or operation.
3. Identify each displayed state's source: local component state, shared store, API response, server event, persisted record, or derived selector.
4. Where authorised, inspect request/response, status codes, correlation IDs, server events/logs, and persisted state.
5. Compare event order, timestamps, versions, and refresh/re-entry behavior.
6. Locate the earliest point at which the observed states diverge.
7. Only call a root cause VERIFIED when direct evidence supports it.

Every diagnosis must be labelled:
- **OBSERVED_SYMPTOM** — directly reproduced user-visible behavior.
- **VERIFIED_ROOT_CAUSE** — established by direct source/network/server evidence.
- **LIKELY_CAUSE** — strongest explanation, but not fully proven.
- **UNCONFIRMED_HYPOTHESIS** — possible explanation requiring more evidence.
- **UNKNOWN** — no defensible conclusion yet.

Never present a plausible explanation as a fact. If backend or network evidence is unavailable, state what is known, list hypotheses separately, and identify the safest next diagnostic step.

## 5. High-risk operations and retry safety

Do not execute payments, purchases, subscriptions, paid-credit generation, publishing, sending external messages, deletion, overwrites, permission changes, or irreversible operations unless the user explicitly authorises that exact test and the environment is confirmed safe.

Never recommend a blind retry when the original operation's acceptance or side effects are uncertain.

Before recommending retry, establish:
- Was the request sent?
- Was it accepted by the server?
- Is there a stable task/operation/idempotency ID?
- Is the original operation still pending or running?
- Did it already complete?
- Was a result or credit/charge persisted?
- Does retry resume the same operation or create a new one?

If any material answer is unknown, recommend status reconciliation or a safe read-only diagnostic first—not another submission.

Do not store credentials, tokens, private prompts, or sensitive account data in the report.

## 6. Browser and evidence discipline

Use the project's existing browser/testing setup or available browser-control tools. Inspect project instructions before starting a server. Do not guess commands or install new tools without permission.

For full reviews, use relevant desktop and mobile sizes, but adapt to the actual product. Inspect:
- Initial and meaningful scrolled states.
- Primary and secondary interactions.
- Loading, pending, success, error, disabled, and empty states where applicable.
- Keyboard and touch behavior.
- Refresh, back/forward, re-entry, and persistence where relevant.
- Reduced motion if motion is used.
- Console and failed asset requests where available.

Classify evidence:
- **BROWSER_OBSERVATION** — observed in this review.
- **NETWORK_EVIDENCE** — current request/response/event.
- **SERVER_EVIDENCE** — authorised current server/log/database evidence.
- **CODE_FACT** — directly established by source.
- **TEST_EVIDENCE** — named test, explicitly marked fresh or historical.
- **INFERENCE** — reasoned interpretation.
- **UNKNOWN** — not established.

A screenshot is not an interaction test. A historical test report is not a current run. Browser-only access can establish user-visible symptoms but often cannot establish backend root cause.

## 7. Evaluate interaction quality

For each relevant journey, assess:
- Discoverability: can users find the next action?
- Affordance: is it clear what can be operated?
- Predictability: does the control do what its label promises?
- Feedback: can users tell whether an action was received, accepted, running, and completed?
- Control: can users cancel, go back, or undo where appropriate?
- Recovery: can users continue without losing work?
- Continuity: are context, selection, draft, references, and history preserved?
- Consistency: do similar controls behave consistently?
- Efficiency: are there unnecessary steps, repeated prompts, or forced detours?
- Error prevention: are duplicate or invalid actions prevented?
- Accessibility: keyboard, focus, semantic status, touch alternatives, and reduced motion.

Do not prescribe a visual redesign unless the selected mode permits it and evidence shows it is needed.

## 8. Visual review (only when requested or in FULL_PRODUCT_UX)

Assess composition, hierarchy, typography, color, spacing, imagery, surfaces, page rhythm, product identity, and craft. Do not mistake conventional design for bad design. Do not recommend decorative effects just to make a page feel more advanced.

## 9. Findings and prioritisation

Every finding must include:
1. ID and concise title.
2. Severity: P0 / P1 / P2 / P3.
3. Affected user role and journey.
4. Exact reproduction steps.
5. Expected behavior.
6. Actual behavior.
7. Evidence references and timestamps.
8. User impact and frequency/reach if known.
9. Classification: symptom / verified cause / likely cause / hypothesis.
10. Confidence: HIGH / MEDIUM / LOW.
11. Smallest safe recommendation.
12. Side-effect, data-safety, and retry implications.
13. Verification and regression plan.

Severity:
- **P0** — core task impossible, severe data/security/privacy issue, or uncontrolled financial/destructive side effect.
- **P1** — core journey materially blocked, state misleading, or recovery unsafe/unavailable.
- **P2** — significant friction, inconsistent feedback, avoidable detour, or important secondary-path failure.
- **P3** — minor clarity, wording, discoverability, or polish issue.

Do not artificially limit a comprehensive product audit to three findings. Provide the complete prioritised finding register, then separately summarise the top three risks.

## 10. Required report and completion criteria

Use `references/report-template.md`.

For PRODUCT_JOURNEY or FULL_PRODUCT_UX, the report must include:
- Product/route/feature inventory.
- User roles and major business objects in scope.
- Journey maps.
- Scenario coverage matrix.
- State-transition and cross-layer consistency analysis where applicable.
- Full prioritised findings register.
- Verified causes separated from hypotheses.
- High-risk operations deliberately not executed.
- Regression plan and evidence gaps.

For VISUAL_ONLY or INTERACTION_ONLY, keep the report scoped; do not pad it with irrelevant sections.

A report is not complete merely because it contains three recommendations. It is complete when it explains what was in scope, what was actually tested, what was not tested, what evidence supports each conclusion, and what remains unknown.

## Read-only boundary

Do not modify source, styles, configuration, database records, account settings, permissions, or user content. Do not purchase, pay, consume credits, publish, send, delete, overwrite, or perform irreversible actions. Do not push, deploy, or commit. If the user later asks for fixes, hand off only the approved findings to the implementation workflow.

## Completion standard

A successful review explains whether users can complete the relevant tasks, what happens when normal paths fail, what evidence supports each finding, and what remains unknown. A short list of generic UI suggestions is not a completed product interaction review.
