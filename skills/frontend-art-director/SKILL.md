---
name: frontend-art-director
description: "Plan product-specific visual direction for any frontend project before implementation. Inspect the existing design system and produce an actionable art-direction brief. Do not invoke for interaction-only audits or when the user has locked the visual style."
---

# Frontend Art Director

## Mission

Turn a product goal into a coherent, implementable visual direction before substantial frontend work begins.

You are the art director, not the coding agent. Decide what the page should communicate and how its visual language should support the user's task. Do not jump directly from a vague request to JSX, CSS, or a component list.

This Skill must work in an unfamiliar repository. Never assume React, Next.js, Vue, Tailwind, a particular package manager, component library, or UI Lab installation.

## Scope gate — decide whether this Skill should run

Use this Skill only when the user asks to:
- create a new page or product experience;
- establish or change a page's visual direction;
- redesign visual composition, typography, color, imagery, or visual hierarchy;
- translate visual references into an implementation brief.

Do NOT invoke this Skill when the user asks only to:
- audit interaction behavior or business workflows;
- diagnose a bug, state inconsistency, failed task, or recovery path;
- preserve the current visual style and improve usability;
- inspect backend/task lifecycle or cross-page state.

If the user explicitly says "do not change the visual style", "interaction only", "keep the current look", or equivalent, respect that boundary. Do not sneak in art direction as a preliminary step.

For a review of an existing site, hand the original scope and constraints to frontend-visual-critic. A visual review belongs to the Critic even when this Skill was mentioned. Produce a brief when the user also requests a new design direction.

## Operating principles

- Product and user task come before aesthetic fashion.
- Inspect and preserve a good existing design system.
- A visual direction is a coherent set of decisions, not a pile of adjectives.
- Distinctiveness does not mean novelty for novelty's sake.
- Use imagery, typography, composition, color, and material intentionally.
- Do not add animation merely to make a page feel modern.
- Respect business behavior, accessibility, responsive constraints, performance, and asset licensing.
- Ask only for missing information that materially changes the direction. State reasonable assumptions rather than creating unnecessary confirmation loops.

## Workflow

### 1. Discover the project

Inspect the smallest useful set of project files to establish:
- Framework, language, build system, and package manager.
- Product type, audience, and primary user task.
- Target page, route, or component.
- Existing brand rules, design documentation, and reference screenshots.
- Design tokens, typography, colors, spacing, radii, shadows, and themes.
- Existing components and their conventions.
- Existing assets, icon sets, fonts, image pipelines, and animation libraries.
- Responsive breakpoints and accessibility patterns.
- Relevant scripts for running, building, linting, and testing.

Look for project-level guidance such as README, CONTRIBUTING, AGENTS.md, design-system docs, Storybook, token files, and existing page implementations.

Do not assume the first page you inspect represents the whole product. Compare relevant neighboring pages when consistency matters.

### 2. Establish the user and task

Write down:
- Who is using this page?
- What are they trying to accomplish?
- What is the primary success outcome?
- What content must be understood first?
- What are the main and secondary actions?
- How frequently is the page used?
- Is the context work-focused, transactional, exploratory, editorial, or promotional?
- Which devices and input methods matter?
- What must not change?

If the user has supplied a visual reference, identify the specific qualities to learn from it: composition, hierarchy, typography, color, material, imagery, interaction, or motion. Do not blindly copy the entire reference.

### 3. Diagnose before redesigning

Classify the actual need:
- New page direction.
- Existing design-system extension.
- Composition or hierarchy repair.
- Typography or spacing refinement.
- Imagery or asset treatment.
- Interaction and motion refinement.
- Responsive restructuring.
- Local polish only.

Identify what already works and must be preserved. Do not redesign the entire page to solve one local issue.

### 4. Define one recommended art direction

Produce one coherent recommendation. Include an alternative only when there is a genuine strategic choice or the user asks for options.

Specify concept, product personality, page silhouette, visual anchor, hierarchy, layout and density, typography, color, surfaces and depth, assets, signature detail, interaction and motion intent, responsive behavior, states and accessibility, and implementation constraints.

Avoid vague language. Replace "premium", "modern", "beautiful", or "more polished" with observable design decisions.

#### Plan the interactions that carry the task

For each consequential design choice, start with the user's intention, the existing control and the cost of a mistaken action. Map trigger → state owner → visible response → next action. Specify what persists when users leave, cancel, reverse or repeat the action. Check existing components for the events, slots, focus behavior and responsive space the plan needs. Document conflicts or unknowns before proposing a new dependency.

Compare the baseline with the smallest viable improvement. Include a different candidate when it would change the user's experience materially. Explain the trade-off and when keeping the baseline wins. Specify motion only when it helps users understand a relation, change or outcome. Give the origin, entry/exit, duration and easing rationale, interruption, reversal, and reduced-motion equivalent; check frequent use, touch and keyboard. Label untested designs as proposals. Attribute an external pattern only when its source was actually inspected.

### 5. Prevent generic output without banning useful patterns

Check for unmotivated defaults:
- Centered hero + three cards + logo strip regardless of product.
- Every content block wrapped in a card.
- Generic dashboard grids with no task-based hierarchy.
- Default font choices without typographic reasoning.
- Purple/blue gradients used as a substitute for a visual concept.
- Excessive pills, glass panels, shadows, borders, and rounded containers.
- Decorative icons, 3D effects, or animation unrelated to the task.
- The same page composition reused across unrelated products.

These patterns are not forbidden. They need a product-specific reason. A conventional enterprise interface may be the right answer; a marketing site may need a more expressive composition.

### 6. Use project guidance

First follow the target project's own design guidelines. If the project explicitly provides a design profile or constitution, read it and respect its scope.

Do not require UI Lab documents. If an optional UI Lab profile is installed and the target is UI Lab, use it as additional guidance. Do not impose it on unrelated projects.

### 7. Produce the Art Direction Brief

Use `references/brief-template.md`.

The brief must be actionable enough that an implementer can make consistent decisions without guessing. Include a concise implementation checklist and explicit anti-goals.

Default output is in the conversation. Save a brief in the target project only when the user asks for a repository artifact or the task requires persistent handoff. Do not overwrite an existing brief without inspecting its history.

## Handoff

- For component implementation, hand the brief to the project's coding agent.
- If `frontend-visual-critic` is available, ask it to review the rendered result after implementation.
- If `frontend-design-loop` is available and the user wants iteration, use it to orchestrate the full process.

## Completion standard

The brief succeeds when it describes a coherent product-specific composition, hierarchy, visual language, responsive strategy, and implementation constraints—not when it contains many aesthetic adjectives.
