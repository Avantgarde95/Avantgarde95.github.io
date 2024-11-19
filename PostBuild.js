const fs = require("fs");

console.log("Adding some files...");
fs.writeFileSync("docs/.nojekyll", "This file prevents Jekyll from breaking Next.js");

console.log("Done!");
