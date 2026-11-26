# Compatibility

## Design

The Skills are framework-agnostic. They do not assume:
- React, Vue, Svelte, Angular, Next.js, Nuxt, Vite, or plain HTML.
- Tailwind, CSS Modules, Sass, CSS-in-JS, or a specific styling system.
- npm, pnpm, yarn, bun, or a specific package manager.
- Playwright, Cypress, Selenium, WebDriver, or a specific browser MCP.

They inspect the actual project and reuse its conventions.

## Agent Skills hosts

The package uses the portable `SKILL.md` folder convention. The exact discovery path, explicit invocation syntax, and personal/project installation rules vary by agent host and version.

- **Codex:** personal Skills under `~/.agents/skills/`; project Skills under `.agents/skills/`.
- **Claude Code:** supports Skills in its configured personal or project `.claude/skills/` locations. Copy the three Skill folders there if using that host.
- **Other Agent Skills-compatible hosts:** follow that host's documented Skills directory and frontmatter requirements.

Do not assume a slash command or `$skill-name` syntax is identical across hosts.

## Browser and testing tools

The Visual Critic and Design Loop use whatever browser or test tooling the project/environment already provides. They do not install or assume Playwright automatically.

If no browser is available:
- The Critic must downgrade to code-only review.
- It must mark visual appearance as UNKNOWN where screenshots are essential.
- It must not produce a definitive visual score.
- The Design Loop must stop before claiming visual verification.

## Accessibility

WCAG 2.2 can be used as a reference for applicable Web content checks. A limited review or automated scan does not prove full WCAG conformance. Record the criteria and scope actually assessed.

## Independence

A separate Critic agent/session is preferred. If the host cannot launch a separate context, use a fresh review invocation and disclose limited independence. A role label alone does not create independent evaluation.
