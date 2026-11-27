# Frontend Design Loop — Mode and Evidence Protocol

## Select the task mode first

| User request | Mode | Art Director | Visual Critic |
|---|---|---|---|
| Create or redesign a page | VISUAL_DESIGN | Yes | VISUAL_ONLY after render |
| "Keep visual style; improve interaction" | INTERACTION_IMPROVEMENT | No | INTERACTION_ONLY / PRODUCT_JOURNEY |
| Audit whole product UX | AUDIT_ONLY | No | FULL_PRODUCT_UX, or PRODUCT_JOURNEY for interaction scope |
| Visual and business workflow redesign | FULL_PRODUCT_UX | If visual direction changes | Separate visual and journey passes |

Explicit user constraints override default routing. Never invoke Art Director for an interaction-only request with a visual lock.

## Product interaction audit sequence

`Scope → Product inventory → Journey map → Scenario plan → Real browser execution → State/data tracing → Findings → Coverage report`

A route inventory is not a journey map. A page visit is not a workflow test. A button click is not proof of business completion.

## Evidence classification

- BROWSER_OBSERVATION: current visible behavior.
- NETWORK_EVIDENCE: current request/response/event.
- SERVER_EVIDENCE: authorised current server/log/database evidence.
- CODE_FACT: direct source evidence.
- TEST_EVIDENCE: named fresh or historical test.
- INFERENCE: reasoned interpretation.
- UNKNOWN: not established.

## Root-cause discipline

Use OBSERVED_SYMPTOM, VERIFIED_ROOT_CAUSE, LIKELY_CAUSE, UNCONFIRMED_HYPOTHESIS, or UNKNOWN. A root cause is VERIFIED only with direct evidence. If only the browser is available, report the symptom and what evidence is missing.

## Safe retries

Do not retry an asynchronous or paid operation until request acceptance, operation identity, pending/running status, persistence, and side effects are understood. If uncertain, reconcile status first. Payments, paid credits, publication, messaging, deletion, and irreversible actions are out of scope unless specifically authorised.

## Finding completeness

A comprehensive audit provides:
- full finding register, not merely three examples;
- severity and confidence;
- reproduction steps and expected/actual behavior;
- evidence and affected journey;
- cause classification;
- smallest safe recommendation;
- regression plan;
- tested / untested / blocked coverage.

The executive summary may highlight the top three, but must not hide the remaining findings.

## Verify the chosen interaction

Replay the same task, starting data, viewport and input method used for the baseline. Compare observed feedback, steps, retained work, recovery and focus. Exercise rapid or reversed input and reduced motion when the change involves motion. Compare alternatives in-browser only if implemented and authorised. Record actual outcomes, regressions and any remaining uncertainty against the original finding ID. Preserve the baseline if an enhancement adds measurable friction without a demonstrated benefit.

Compare the same component, hit region, input sequence, simultaneous states and motion preference before and after. Link its rule ID to the decision, including any case where the baseline wins.

## Stop rules

Do not keep browsing after the declared scope is covered merely to inflate activity. Do not claim full coverage when routes or scenarios remain untested. Apply the Critic’s whole-site completion rule before handoff. Record a concrete reason for every partial or unexecuted path.
