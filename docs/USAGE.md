# Usage Guide

## 1. Art direction before implementation

Use only when creating a page or changing its visual direction.

```text
$frontend-art-director

Inspect this project and create an actionable Art Direction Brief for [page / task].
Preserve the existing product identity and design-system conventions.
Do not modify code yet.
```

## 2. Visual-only review

```text
$frontend-visual-critic

Mode: VISUAL_ONLY.
Review [URL / route] in a real browser.
Inspect composition, hierarchy, typography, color, imagery, responsive presentation, and craft.
Do not audit unrelated product workflows. Do not modify code.
```

## 3. Interaction-only review — preserve the current visual style

```text
$frontend-visual-critic

Mode: INTERACTION_ONLY (or PRODUCT_JOURNEY if multiple routes are involved).
Visual style is LOCKED. Do not invoke Art Director or suggest aesthetic redesign.

Audit [specific workflow]. Map the user's actions, expected/actual responses, state transitions,
failure/recovery paths, persistence, and duplicate-action risks. Use real browser evidence.
Inspect source/network/server evidence where available. Separate symptoms from verified causes.
Do not perform paid, credit-consuming, destructive, or irreversible actions. Read-only.
```

## 4. Full product interaction audit

```text
$frontend-visual-critic

Mode: PRODUCT_JOURNEY.
Audit the complete relevant product workflows, not just the homepage.
Inventory routes/features and user roles, map the core journeys, and execute safe scenarios.
Cover first-time use, returning use, create/edit/save/resume, navigation, async state,
refresh/re-entry, failures, recovery, and permissions as applicable.

Provide a coverage matrix and complete prioritised findings register.
Do not infer backend root causes without direct evidence.
Do not blindly retry operations or perform paid/destructive actions.
Read-only.
```

## 5. Interaction improvements with authorised code changes

```text
$frontend-design-loop

Mode: INTERACTION_IMPROVEMENT.
Preserve the current visual style and unrelated business behavior.
First audit [journey] with frontend-visual-critic in PRODUCT_JOURNEY mode.
Then implement only approved, evidence-backed fixes.
Do not add retry behavior until acceptance, idempotency, and side effects are verified.
Replay the same journey and recovery cases. Show the diff and evidence.
```

## 6. Full visual and interaction redesign

```text
$frontend-design-loop

Mode: FULL_PRODUCT_UX.
Inspect [product/page], create an Art Direction Brief if visual changes are requested,
audit the important user journeys, implement the approved scope, and run separate
visual and interaction verification.
```

## 7. Role boundaries

- Art Director defines visual direction; it does not implement.
- Visual Critic selects the requested review mode and performs visual or interaction/product audit; it does not fix.
- Design Loop orchestrates the chosen mode and writes only with user authorisation.
- "Audit" or "review" does not imply permission to modify code.
