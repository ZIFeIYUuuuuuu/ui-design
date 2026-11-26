import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsRoot = join(packageRoot, "skills");
const expected = [
  "frontend-art-director",
  "frontend-visual-critic",
  "frontend-design-loop",
];

let failed = false;

for (const name of expected) {
  const dir = join(skillsRoot, name);
  const file = join(dir, "SKILL.md");
  if (!existsSync(file)) {
    console.error(`FAIL missing ${file}`);
    failed = true;
    continue;
  }

  const content = readFileSync(file, "utf8");
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) {
    console.error(`FAIL ${name}: missing YAML frontmatter`);
    failed = true;
    continue;
  }

  const frontmatter = match[1];
  const declaredName = frontmatter.match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = frontmatter.match(/^description:\s*(.+)$/m)?.[1]?.trim();

  if (declaredName !== name) {
    console.error(`FAIL ${name}: frontmatter name is ${declaredName ?? "missing"}`);
    failed = true;
  }
  if (!description || description.length < 20) {
    console.error(`FAIL ${name}: description missing or too short`);
    failed = true;
  }

  const refs = [...content.matchAll(/(?:references\/|\.\/references\/)([A-Za-z0-9._/-]+\.md)/g)]
    .map((m) => m[1]);
  for (const ref of refs) {
    const candidates = [
      join(dir, ref),
      join(dir, "references", ref),
    ];
    if (!candidates.some(existsSync)) {
      console.error(`FAIL ${name}: unresolved reference ${ref}`);
      failed = true;
    }
  }

  if (/docs\/DESIGN_CONSTITUTION\.md|docs\/design-constitution\//.test(content)) {
    console.error(`FAIL ${name}: hard dependency on UI Lab docs`);
    failed = true;
  }

  console.log(`${failed ? "CHECK" : "PASS"} ${name}`);
}

if (failed) process.exit(1);
console.log("All universal Skill package checks passed.");
