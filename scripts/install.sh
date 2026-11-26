#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_ROOT="$(cd -- "${SCRIPT_DIR}/.." && pwd)"
DESTINATION="${1:-${HOME}/.agents/skills}"

mkdir -p "$DESTINATION"

for skill in frontend-art-director frontend-visual-critic frontend-design-loop; do
  SOURCE="$PACKAGE_ROOT/skills/$skill"
  TARGET="$DESTINATION/$skill"

  if [[ ! -f "$SOURCE/SKILL.md" ]]; then
    echo "Missing Skill: $SOURCE/SKILL.md" >&2
    exit 1
  fi

  mkdir -p "$TARGET"
  cp -R "$SOURCE/." "$TARGET/"
  echo "Installed $skill -> $TARGET"
done

echo "Done. Refresh or restart your agent host if the Skills are not listed."
