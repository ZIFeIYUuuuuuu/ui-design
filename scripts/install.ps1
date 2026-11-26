param(
  [string]$Destination = (Join-Path $HOME ".agents\skills")
)

$ErrorActionPreference = "Stop"
$PackageRoot = Split-Path -Parent $PSScriptRoot
$Skills = @(
  "frontend-art-director",
  "frontend-visual-critic",
  "frontend-design-loop"
)

New-Item -ItemType Directory -Force -Path $Destination | Out-Null

foreach ($Skill in $Skills) {
  $Source = Join-Path (Join-Path $PackageRoot "skills") $Skill
  $SkillFile = Join-Path $Source "SKILL.md"
  if (-not (Test-Path $SkillFile)) {
    throw "Missing Skill: $SkillFile"
  }

  $Target = Join-Path $Destination $Skill
  New-Item -ItemType Directory -Force -Path $Target | Out-Null
  Copy-Item -Path (Join-Path $Source "*") -Destination $Target -Recurse -Force
  Write-Host "Installed $Skill -> $Target"
}

Write-Host "Done. Refresh or restart your agent host if the Skills are not listed."
