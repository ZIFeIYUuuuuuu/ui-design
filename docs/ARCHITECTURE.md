# Architecture

## 1. Package goal

Provide three reusable Agent Skills for frontend visual design and product interaction quality. The package remains framework-agnostic and does not require UI Lab.

## 2. Responsibility boundaries

| Skill | Responsibility | Writes product code? |
|---|---|---|
| frontend-art-director | Visual direction and actionable brief | No |
| frontend-visual-critic | Visual review, page interaction review, or product-journey audit selected by explicit mode | No |
| frontend-design-loop | Route the requested workflow, coordinate implementation and verification | Yes, only with user authorisation |

The Visual Critic contains the product-journey audit procedure. Do not create a separate fourth Skill for this capability.

### Interaction design method

Adapted from UI Lab's interaction design workflow, Design Decision Record and Interaction Recipe Engine. The Director specifies task, state and design trade-offs before implementation. The Critic evaluates real behavior and compares improvements. The Loop carries chosen decisions through implementation and comparable replay. Each installed Skill contains its role's instructions. Project-specific research and recipe registries are optional.

Each standalone Skill ships the same behavior router, short menus and individual case files. Start from the action and decision, open one menu, then read the matching case. Read a second case only for a material competing interpretation. The flat index remains available for keyword lookup. Carry the case ID and observation through handoff; a different task on the same component may require a different case.

## 3. Review modes

- VISUAL_ONLY
- INTERACTION_ONLY
- PRODUCT_JOURNEY
- FULL_PRODUCT_UX

The user's scope and constraints determine the mode. A visual lock suppresses Art Director. A whole-product request requires route/feature inventory, journey maps, scenario coverage, and a complete findings register.

## 4. Project adaptation

Inspect repository instructions, framework/build system, package manager/scripts, design system/tokens, components/assets, browser/test tools, API boundaries, and product constraints. Do not hard-code framework or backend assumptions.

## 5. Evidence and safety

Distinguish browser, network, server, code, test, inference, and unknown evidence. Do not claim backend root cause without direct evidence. High-risk actions are not executed by default. Unknown async operation acceptance means no blind retry.

## 6. Ownership

- Art Director produces a brief, not code.
- Visual Critic is read-only.
- Design Loop writes only after user authorisation.
- Preserve unrelated user changes.
- Push, merge, deploy, and irreversible actions require explicit permission.
