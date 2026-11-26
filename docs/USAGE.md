# Usage Guide

## 1. Start with Art Director

Use when:
- Creating a new page.
- Reworking a page's overall visual direction.
- A page looks generic and the design intent is unclear.
- You need to translate reference screenshots into implementation guidance.

Prompt:

```text
$frontend-art-director

Inspect this project and create an actionable Art Direction Brief for [page / task].
Preserve the existing product identity and working design-system conventions.
Define composition, hierarchy, typography, color, assets, interaction intent,
responsive behavior, and implementation constraints. Do not modify code yet.
```

## 2. Use Visual Critic after rendering

Use when:
- A page is implemented but looks weak or unfinished.
- You need an independent review before accepting a design.
- You want to know which issues matter most.

Prompt:

```text
$frontend-visual-critic

Review [URL / route] in a real browser if available.
Inspect desktop and mobile, the full page, key interactions, and relevant states.
Identify what works and must be preserved, then report at most three
highest-impact issues with evidence, user impact, exact fixes, and verification.
Do not modify code. Do not score if browser evidence is insufficient.
```

## 3. Use Design Loop for end-to-end work

Use when:
- Building a new page and you want design direction plus iterative improvement.
- Substantially redesigning an existing page.
- You want a bounded generate → critique → refine workflow.

Prompt:

```text
$frontend-design-loop

Improve [page / task] in this project.
Inspect the project and preserve existing business behavior.
Create an Art Direction Brief, implement the approved scope, then use an
independent Visual Critic to inspect the real rendered page.
Fix the highest-impact issues, re-test, and compare before/after at the same
viewports. Default to three refinement rounds; stop on plateau.
Show the diff and report untested cases.
```

## 4. Use with an existing design system

Tell the Art Director and Critic which files or guidelines define the product's:
- Brand.
- Typography.
- Color and spacing tokens.
- Components.
- Accessibility requirements.
- Platform conventions.

The Skills should inspect these automatically where possible. Explicitly mention important rules that are not represented in files.

## 5. Reference screenshots and websites

Provide the screenshot or URL and say what you want to learn:
- Composition.
- Typography.
- Color.
- Density.
- Imagery.
- Interaction.
- Motion.

The Art Director should abstract the design qualities rather than copy the entire page. Source and asset permissions still apply.

## 6. Important distinction

- Art Director produces a brief; it does not implement.
- Visual Critic inspects and reports; it does not fix.
- Design Loop orchestrates implementation and review, but only writes code when the user has authorized changes.
