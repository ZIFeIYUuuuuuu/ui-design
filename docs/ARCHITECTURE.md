# Architecture

## 1. Package goal

Provide three reusable Agent Skills that can be installed into unrelated frontend repositories without importing UI Lab's project structure or design preferences.

The package is intentionally small: three Skills, their references, installation helpers, and one optional design profile.

## 2. Responsibility boundaries

| Skill | Input | Output | Writes product code? |
|---|---|---|---|
| frontend-art-director | Product goal, project context, references | Art Direction Brief | No |
| frontend-visual-critic | Rendered page, user task, optional brief | Evidence-backed critique | No |
| frontend-design-loop | User-authorized task, project, available tools | Brief, implementation, bounded critique/refinement, final report | Yes, only after authorization |

The three Skills are independent folders. Installing one does not require installing the others. The Design Loop can fall back to the relevant workflow if a companion Skill is unavailable, but must disclose that limitation.

## 3. Project adaptation

At runtime, Skills inspect:
- Repository instructions.
- Framework and build system.
- Package manager and actual scripts.
- Existing design system and tokens.
- Components, assets, and fonts.
- Browser and test tools.
- Brand and accessibility requirements.

They must not hard-code framework, command, route, browser, or component-library assumptions.

## 4. Optional profiles

A profile adds domain-specific principles and source knowledge without changing the generic Skill contract.

The included UI Lab profile is opt-in. Other projects can add their own profile document and reference it from project instructions. The generic Skills should continue to work if no profile exists.

## 5. Tool adaptation

Browser inspection uses the target environment's available browser or test tools. If no browser is available, the Critic downgrades to code-only review and cannot claim visual verification.

The package does not install dependencies or start servers blindly. It inspects project scripts and asks for permission before adding tools or changing project configuration.

## 6. Safety and ownership

- The Critic is read-only.
- The Art Director produces a brief, not code.
- The Design Loop writes only when the user has requested or approved implementation.
- Existing user changes must be preserved.
- Push, merge, deploy, and irreversible actions require explicit permission.
- Scores are advisory and cannot override hard-gate failures or human approval.
