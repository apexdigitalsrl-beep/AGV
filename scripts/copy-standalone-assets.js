// `output: "standalone"` only bundles the server + traced node_modules.
// Static assets and public/ are not included by design (Next docs) and
// must be copied in manually after every build — this runs automatically
// via the `postbuild` script so `npm run build` alone is deploy-ready.
const { cpSync, existsSync } = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const standaloneDir = path.join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.error("[copy-standalone-assets] .next/standalone not found — did the build run with output: 'standalone'?");
  process.exit(1);
}

cpSync(path.join(root, "public"), path.join(standaloneDir, "public"), { recursive: true });
cpSync(path.join(root, ".next", "static"), path.join(standaloneDir, ".next", "static"), { recursive: true });

console.log("[copy-standalone-assets] copied public/ and .next/static into .next/standalone/");
