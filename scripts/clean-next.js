const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
for (const name of [".next", ".turbo", path.join("node_modules", ".cache")]) {
  const p = path.join(root, name);
  try {
    fs.rmSync(p, { recursive: true, force: true });
    console.log("removed:", name);
  } catch (e) {
    /* ignore */
  }
}
