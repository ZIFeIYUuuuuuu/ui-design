# Universal Frontend Design Skills

Three framework-agnostic Agent Skills for planning, reviewing, and improving frontend design in real projects.

- **frontend-art-director** — define a product-specific visual direction before implementation.
- **frontend-visual-critic** — independently inspect rendered pages and report the highest-impact quality issues.
- **frontend-design-loop** — coordinate direction, implementation, critique, focused refinement, and re-verification.

These Skills do not require UI Lab, React, Next.js, Tailwind, Playwright, or any specific component library. They adapt to the tools and conventions already present in the target project.

## Design principles

1. Inspect the project before prescribing a style.
2. Preserve a good existing design system; do not redesign for novelty.
3. Separate visual direction, implementation, and critique.
4. Prefer evidence from the rendered page over assumptions from source code.
5. Distinguish browser observations, code facts, test evidence, inference, and unknowns.
6. Treat accessibility, responsive behavior, performance, licensing, and business correctness as hard constraints—not optional polish.
7. A restrained or unchanged design can be the correct result.
8. Never claim browser verification when no browser was actually used.

## Repository layout

```text
skills/
  frontend-art-director/
  frontend-visual-critic/
  frontend-design-loop/
profiles/
  ui-lab/
docs/
scripts/
.github/workflows/
```

## Install for Codex

Personal installation (available across projects):

**macOS / Linux**
```bash
./scripts/install.sh "$HOME/.agents/skills"
```

**Windows PowerShell**
```powershell
./scripts/install.ps1 -Destination "$HOME/.agents/skills"
```

Project-only installation (run from the target project's root):

```bash
/path/to/ui-design/scripts/install.sh .agents/skills
```

After installation, restart or refresh Codex's Skills list if the new Skills do not appear.

## Install manually

Copy the three directories under `skills/` into the Agent Skills directory supported by your host. Codex supports project Skills under `.agents/skills/` and personal Skills under `~/.agents/skills/`. Other hosts may use different discovery paths; see [Compatibility](docs/COMPATIBILITY.md).

## Use

```text
$frontend-art-director
```
Use before creating a new page or making a substantial redesign.

```text
$frontend-visual-critic
```
Use after a page has rendered, when you want an independent design review. It is read-only.

```text
$frontend-design-loop
```
Use when you want the complete generation → critique → refinement → verification process.

See [Usage Guide](docs/USAGE.md), [Installation](docs/INSTALLATION.md), and [Compatibility](docs/COMPATIBILITY.md).

## Optional UI Lab profile

The optional [UI Lab profile](profiles/ui-lab/PROFILE.md) connects these generic Skills to UI Lab's Design Constitution V2 and its research on Refactoring UI, design-dot, Emil Kowalski, Apple HIG, NN/g, WCAG, GOV.UK, and web.dev.

The profile is not required. Generic Skills work without it and should use the target project's own design guidelines when available.

## License

MIT. See [LICENSE](LICENSE).
