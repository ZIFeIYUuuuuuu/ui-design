# Universal Frontend Design Loop

## Purpose

A framework-agnostic workflow connecting visual direction, implementation, independent critique, focused refinement, and re-verification.

## Roles

| Role | Responsibility | May edit product code? |
|---|---|---|
| Art Director | Define visual intent and implementation constraints | No |
| Generator | Implement the brief in the existing project | Yes, only with user authorization |
| Visual Critic | Inspect rendered pages and report evidence-backed issues | No |
| Project owner | Define product intent and accept the result | Approval authority |

Use a separate agent context for the Critic when supported. Otherwise disclose that independence is limited.

## Pipeline

`Baseline → Art Direction Brief → Generate → Browser Render → Independent Critique → Focused Fixes → Re-render → Re-critique → Final Gate`

## Baseline and comparability

For existing pages, capture the original state before changes. Keep viewport, content, data, browser settings, and interaction state comparable across rounds.

For a full browser review, aim for:
- Desktop: 1440 × 1000 CSS px or nearest practical size.
- Mobile: 390 × 844 CSS px or nearest practical size.
- Initial viewport and full page.
- A meaningful scrolled region.
- Primary and secondary interactions.
- Keyboard path for an important task.
- Reduced-motion state when motion is used.

These are sampling targets, not universal breakpoints. Adapt them to the product and available devices.

## Critique contract

Each round returns:
- Verdict and hard-gate status.
- What works and must be preserved.
- Up to three high-impact findings.
- Exact screenshot region or source evidence.
- User impact and concrete correction.
- Required regression checks.
- Evidence gaps.

The Critic is read-only.

## Iteration budget

- Default maximum: 3 refinement rounds.
- Absolute maximum: 5, only with meaningful progress.
- Fix at most 3 high-impact issues per round.
- Stop after two rounds without meaningful improvement.
- Stop when agreed hard gates pass and no material finding remains.
- Revert regressions rather than accumulating patches.
- Scores are optional and only valid with adequate browser evidence.

## Final gates

- Visual direction and composition.
- Typography and hierarchy.
- Interaction and motion.
- Keyboard and focus.
- Touch alternatives.
- Responsive behavior.
- Reduced motion.
- Runtime and asset loading.
- Performance.
- License and source.
- Functional regression.

## Reporting

Keep separate:
- Art Direction Brief.
- Generator implementation notes.
- Visual Critic reports.
- Automated test results.
- Browser observations.
- Performance measurements.
- Human owner approval.

A screenshot is not an interaction test. A passing E2E test is not a design-quality verdict. An AI score is not owner approval.
