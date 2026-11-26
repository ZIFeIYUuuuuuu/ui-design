# Installation

## Codex — personal installation

Personal Skills are available across projects.

### macOS / Linux

From the repository root:

```bash
./scripts/install.sh "$HOME/.agents/skills"
```

### Windows PowerShell

```powershell
.\scripts\install.ps1 -Destination "$HOME/.agents/skills"
```

Restart or refresh Codex's Skills discovery if the Skills do not appear.

## Codex — project-only installation

Run the installer from the target project root and pass its local Skills directory.

macOS / Linux:
```bash
/path/to/universal-frontend-design-skills/scripts/install.sh .agents/skills
```

PowerShell:
```powershell
& "C:\path\to\universal-frontend-design-skills\scripts\install.ps1" -Destination ".agents\skills"
```

Commit the resulting `.agents/skills/` directories if the whole team should share them.

## Manual installation

Copy these folders:
- `skills/frontend-art-director`
- `skills/frontend-visual-critic`
- `skills/frontend-design-loop`

into the Skills discovery directory used by your agent host.

Codex supports personal Skills under `~/.agents/skills/` and project Skills under `.agents/skills/`. Other hosts may use a different discovery directory; see [Compatibility](./COMPATIBILITY.md).

## Updating

Pull the latest package version, then run the installer again with the same destination. Review local edits before overwriting customised Skill files.

## Optional UI Lab profile

The Skills work without UI Lab. If you want UI Lab's design research and Constitution V2, read `profiles/ui-lab/PROFILE.md` and make the profile available to the project. Do not install or apply it to unrelated projects by default.
