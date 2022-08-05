const fs = require("fs");

fs.writeFileSync("docs/.nojekyll", "This file prevents Jekyll from breaking Next.js");
