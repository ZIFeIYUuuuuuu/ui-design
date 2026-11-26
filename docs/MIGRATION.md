# Migration from UI Lab-specific Skills

The original UI Lab Skills remain available in the UI Lab repository for project-specific work. The portable package uses generic names and does not require the UI Lab repository.

| UI Lab-specific Skill | Portable Skill |
|---|---|
| ui-lab-art-direction | frontend-art-director |
| ui-lab-visual-critic | frontend-visual-critic |
| ui-lab-design-loop | frontend-design-loop |

## Compatibility policy

- Existing `ui-lab-*` Skills are retained; they are not silently renamed or deleted.
- Use the portable `frontend-*` Skills in unrelated projects.
- In UI Lab, the optional `profiles/ui-lab/PROFILE.md` adds the project's Design Constitution V2 and source research.
- Do not apply the UI Lab profile to unrelated products by default.

## Moving this package to its own GitHub repository

The package currently lives in the UI Lab repository under `universal-frontend-design-skills/` so it can be reviewed before publication.

To publish it as a separate repository:
1. Create an empty GitHub repository named `universal-frontend-design-skills`.
2. Clone that empty repository.
3. Copy the contents of this directory (not the enclosing UI Lab repository) into the new repository root.
4. Commit and push.

This copy-based export gives the new repository a clean history and avoids publishing UI Lab's unrelated project history.
