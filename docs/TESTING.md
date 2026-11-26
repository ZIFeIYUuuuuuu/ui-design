# Validation and Testing

## Static package validation

Run:

```bash
node scripts/validate-skills.mjs
```

The validator checks:
- Each Skill directory has a SKILL.md.
- YAML frontmatter has name and description.
- The declared name matches the directory.
- Local reference paths used in Skill instructions exist.
- No Skill requires a UI Lab-specific document path.

## Behavioral smoke test

Run the three Skills against at least four unrelated project types:

| Fixture | Project type | What to verify |
|---|---|---|
| A | React / Next.js SaaS dashboard | Existing design-system discovery and dashboard-specific art direction |
| B | Vue commerce site | Framework-neutral inspection and preservation of purchase behavior |
| C | Static HTML/CSS marketing page | Works without package manager or component library assumptions |
| D | Svelte or Angular application | Existing tooling and component conventions are respected |

For each fixture:
1. Art Director produces a concrete brief without editing code.
2. Generator implements only after authorization.
3. Visual Critic inspects rendered pages where a browser exists.
4. Design Loop fixes no more than three high-impact findings per round.
5. Existing business behavior and unrelated files remain unchanged.
6. Missing tools are reported honestly.

## Acceptance criteria

- No hard dependency on UI Lab.
- No hard-coded React / Next / Tailwind assumptions.
- No guessed dev command or package manager.
- Critic is read-only.
- Design Loop respects user write authorization.
- Browser verification is never claimed without actual browser evidence.
- A valid result may be KEEP / no change.
- Unrelated project conventions and user changes are preserved.
