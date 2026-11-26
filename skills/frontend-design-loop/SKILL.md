---
name: frontend-design-loop
description: "Coordinate art direction, authorized frontend implementation, independent visual critique, focused refinement, and browser re-verification across any framework."
---

# Frontend Design Loop

## Mission

Coordinate a disciplined design workflow with distinct responsibilities:

1. Art Director defines the visual intent.
2. Generator implements the page.
3. Visual Critic independently evaluates the rendered result.
4. Generator fixes the most consequential issues.
5. The Critic re-checks the result and the workflow stops when improvement plateaus or acceptance criteria are met.

The loop is framework-agnostic. It must adapt to the target project's existing tools, scripts, architecture, and design system. It does not assume UI Lab, React, Next.js, Tailwind, pnpm, Playwright, or a specific agent runtime.

## Required Skills and fallback

Prefer these companion Skills when installed:
- `frontend-art-director`
- `frontend-visual-critic`

If either is unavailable, follow its relevant workflow in this Skill and disclose the limitation. Do not claim a separate agent was used unless the environment actually supports and starts one.

## Phase 0 — Scope, safety, and baseline

1. Confirm the target project, page, task, user constraints, and expected outcome.
2. Inspect repository instructions and the current Git branch/status if available.
3. Identify the framework, package manager, scripts, existing design system, components, assets, and test tools.
4. Do not overwrite unrelated user changes or discard uncommitted work.
5. For an existing page, capture its baseline screenshots and behavior before changing it.
6. Record how this workflow's changes can be reverted.
7. Establish the exact files and behaviors that must remain unchanged.

If the user has not authorized code changes, stop after the brief and review plan. Do not infer permission to write from a request to analyze or critique.

## Phase 1 — Art Direction

1. Inspect the product, audience, content, task, brand, design tokens, existing pages, and references.
2. Create an Art Direction Brief using the companion Skill or its template.
3. Define composition, visual anchor, hierarchy, typography, color roles, surfaces, assets, signature detail, interaction intent, responsive behavior, accessibility considerations, and implementation constraints.
4. Preserve established design conventions unless they are explicitly the target of the redesign.
5. Avoid generic AI defaults unless justified by the product.
6. Ask only when a material product, brand, or behavior decision cannot be reasonably inferred.

## Phase 2 — Generate

1. Use the project's existing coding agent and established framework.
2. Reuse suitable components, tokens, dependencies, and conventions.
3. Use advanced effects only when they serve the user task and pass compatibility checks.
4. Preserve business logic, data flow, routes, permissions, and existing behavior.
5. Implement the smallest coherent solution that fulfills the brief.
6. Start the application using the actual project instructions and scripts; never guess the command.
7. Capture the first rendered state.

## Phase 3 — Independent critique

1. Run the Visual Critic in a separate agent/session if supported.
2. Inspect the rendered result before reading the generator's self-review.
3. Review desktop and mobile, full-page composition, key scroll areas, primary interactions, and relevant states.
4. Return a verdict, hard-gate status, preserved strengths, up to three high-impact findings, exact evidence, user impact, concrete corrections, regression checks, and evidence gaps.
5. The critic is read-only and must not edit source files.

If independent context is unavailable, use a fresh review invocation and mark independence as limited. Never simulate independence by merely renaming the same generator role.

## Phase 4 — Focused refinement

1. Fix the highest-impact findings first.
2. Address causes, not symptoms.
3. Preserve strengths identified by the Critic.
4. Do not add decorative effects unless the review establishes a real benefit.
5. Keep the diff focused and avoid unrelated refactoring.
6. Re-run relevant functional and interaction tests.
7. Capture the same viewports and states again.

## Phase 5 — Re-evaluate

1. Compare the new result with the baseline and previous round using the same content, data, viewport, and state.
2. Ask the Critic to mark each finding FIXED / PARTIALLY_FIXED / UNRESOLVED / REGRESSED.
3. Check whether new regressions were introduced.
4. Record performance and accessibility evidence separately from visual judgement.
5. Continue only when a material improvement is expected.

## Iteration budget and stop rules

- Default: at most 3 critique/refinement rounds after the first implementation.
- Absolute maximum: 5 rounds, only when each round makes measurable or clearly observable progress.
- Fix at most 3 high-impact findings per round.
- Stop when no unresolved critical/high issue remains and no material issue remains within the agreed scope.
- Stop after two consecutive rounds without meaningful improvement.
- Stop and report if a fix causes regressions or the evaluator lacks evidence.
- Do not chase a subjective perfect score indefinitely.

## Quality gates

Assess visual quality, interaction and business correctness, keyboard and focus, touch alternatives, reduced motion, responsive behavior, runtime and asset loading, performance, and licensing separately. A high visual score cannot compensate for a failed hard gate.

## Approval and write boundaries

- Only implement when the user has requested or approved code changes.
- Work only in the authorized repository and branch.
- Do not push, merge, deploy, or perform irreversible actions unless explicitly requested.
- Preserve unrelated user changes.
- Show the diff and test results.
- Provide a rollback path for significant changes.

## Final deliverables

1. Art Direction Brief.
2. Summary of implementation and files changed.
3. Critique report for each round.
4. Before/after screenshots at identical viewports and states, when browser tools allow.
5. Functional, responsive, accessibility, and performance results with untested scope.
6. Final verdict: PASS / PARTIAL / FAIL.
7. Remaining trade-offs and known issues.
8. Diff, commit, and rollback information when applicable.

## Failure modes

- No browser: do not claim visual verification; report INSUFFICIENT_EVIDENCE or code-only findings.
- No independent agent: disclose limited independence.
- No user write authorization: remain read-only.
- Project brief conflicts with established brand or business constraints: preserve higher-priority requirements and document the conflict.
- Critique is vague: request observable evidence and a concrete change.
- Score improves but usability regresses: reject or revert the iteration.
