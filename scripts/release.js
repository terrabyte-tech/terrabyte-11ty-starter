// increments/bumps version

// > pnpm run release patch|minor|major

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const type = process.argv[2];

if (!["patch", "minor", "major"].includes(type)) {
  console.error("Usage: pnpm run release <patch|minor|major>");
  process.exit(1);
}

execSync(`pnpm version ${type}`, { stdio: "inherit" });

const version = require("../package.json").version;
const date = new Date().toISOString().split("T")[0];

// Collect commits since the last tag
let commits = "";
try {
  const lastTag = execSync("git describe --tags --abbrev=0 HEAD~1", { encoding: "utf8" }).trim();
  commits = execSync(`git log ${lastTag}..HEAD --pretty=format:"- %s"`, { encoding: "utf8" }).trim();
} catch {
  commits = "- Initial release";
}

// Sync terrabyteStarterVersion in _data/site.json
const siteJsonPath = path.join(__dirname, "../_data/site.json");
const siteJson = JSON.parse(fs.readFileSync(siteJsonPath, "utf8"));
siteJson.terrabyteStarterVersion = version;
fs.writeFileSync(siteJsonPath, JSON.stringify(siteJson, null, 2) + "\n");
execSync("git add _data/site.json", { stdio: "inherit" });
console.log(`site.json terrabyteStarterVersion updated to v${version}`);

const entry = `## [${version}] - ${date}\n${commits}\n\n`;

const changelogPath = path.join(__dirname, "../CHANGELOG.md");
const existing = fs.readFileSync(changelogPath, "utf8");
const insertAt = existing.indexOf("\n## ");
const updated =
  insertAt === -1
    ? existing + entry
    : existing.slice(0, insertAt + 1) + entry + existing.slice(insertAt + 1);

fs.writeFileSync(changelogPath, updated);
console.log(`\nCHANGELOG.md updated for v${version}`);

execSync("git add CHANGELOG.md", { stdio: "inherit" });
execSync(`git commit --amend --no-edit`, { stdio: "inherit" });

execSync("git push && git push --tags", { stdio: "inherit" });
