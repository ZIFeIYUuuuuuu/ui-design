# Universal Frontend Design Skills

Three framework-agnostic Agent Skills for planning, reviewing, and improving frontend design and product interactions.

- **frontend-art-director** — define product-specific visual direction before implementation.
- **frontend-visual-critic** — review visual quality, page-level interactions, or complete product journeys according to an explicit review mode.
- **frontend-design-loop** — coordinate visual design, interaction improvement, full product UX, or audit-only workflows.

The Visual Critic includes interaction and product-journey audit procedures. You do not need a fourth Skill.

## Core rules

1. Choose the review mode before browsing.
2. Respect a visual lock; do not invoke Art Director for interaction-only work.
3. Audit user journeys, not only isolated screens.
4. Separate observed symptoms from verified root causes and hypotheses.
5. Never recommend blind retries for operations with uncertain acceptance or side effects.
6. Do not execute payments, paid-credit operations, destructive actions, or irreversible changes by default.
7. Report coverage: tested, untested, blocked, and not applicable.
8. Never claim browser or backend verification without current evidence.
9. Preserve a good existing design system and unrelated business behavior.
10. A valid result may be no change.

## Install for Codex

**macOS / Linux**
```bash
./scripts/install.sh "$HOME/.agents/skills"
```

**Windows PowerShell**
```powershell
./scripts/install.ps1 -Destination "$HOME/.agents/skills"
```

## Use

```text
$frontend-art-director
$frontend-visual-critic
$frontend-design-loop
```

For interaction-only review, invoke Visual Critic with `Mode: INTERACTION_ONLY`. For a multi-route product audit, use `Mode: PRODUCT_JOURNEY`. For implementation while preserving the existing visual style, use Design Loop with `Mode: INTERACTION_IMPROVEMENT`.

See [Usage](docs/USAGE.md), [Architecture](docs/ARCHITECTURE.md), [Installation](docs/INSTALLATION.md), and [Testing](docs/TESTING.md).

## Optional UI Lab profile

The optional [UI Lab profile](profiles/ui-lab/PROFILE.md) adds UI Lab's Design Constitution V2 and research. It is not required for generic projects.

## License

MIT. See [LICENSE](LICENSE).
