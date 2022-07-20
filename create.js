const readline = require("readline");
const childProcess = require("child_process");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(question = "") {
  return new Promise((resolve, reject) => {
    rl.question(question, input => {
      resolve(input);
    });
  });
}

function runCommand(command, ...args) {
  return new Promise((resolve, reject) => {
    console.log(`-- ${[command, ...args].join(" ")}`);

    const commandProcess = childProcess.spawn(command, args, {
      shell: true,
    });

    commandProcess.stdout.on("data", output => {
      console.log(`${output}`);
    });

    commandProcess.stderr.on("data", output => {
      console.log(`${output}`);
    });

    commandProcess.on("close", () => {
      resolve();
    });
  });
}

function printMessage(message) {
  console.log(`> ${message}`);
}

(async () => {
  printMessage("Copying the template...");

  const gitURL = await getInput("Git URL: ");
  const gitName = await getInput("Git account name: ");
  const gitEmail = await getInput("Git account email: ");

  printMessage("Setting git...");
  await runCommand("git", "remote", "set-url", "origin", gitURL);
  await runCommand("git", "config", "--local", "user.name", gitName);
  await runCommand("git", "config", "--local", "user.email", gitEmail);

  const name = await getInput("App name: ");
  const author = await getInput("Author: ");
  const description = await getInput("Description: ");

  const packageJSON = {
    name,
    author,
    description,
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
      export: "next export",
      lint: "next lint --dir src",
      "lint:fix": "next lint --dir src --fix",
    },
  };

  printMessage("Saving package.json...");
  fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 2));

  const yarnVersion = Number(await getInput("Yarn version (Type 1 or 2): "));

  if (![1, 2].includes(yarnVersion)) {
    throw new Error("Wrong input!");
  }

  if (yarnVersion === 2) {
    printMessage("Setting yarn berry...");
    await runCommand("yarn", "set", "version", "berry");

    // Currently it does not work...
    //printMessage("Setting SDKs for VSCode...");
    //await runCommand("yarn", "dlx", "@yarnpkg/sdks", "vscode");
  }

  const dependencies = ["react", "react-dom", "recoil", "next", "@emotion/styled", "@emotion/react"];

  printMessage(`Installing dependencies...`);
  await runCommand("yarn", "add", ...dependencies);

  const devDependencies = [
    "@types/node",
    "@types/react",
    "@types/react-dom",
    "typescript",
    "eslint",
    "prettier",
    "eslint-config-next",
    "eslint-config-prettier",
    "eslint-plugin-prettier",
  ];

  printMessage(`Installing devDependencies...`);
  await runCommand("yarn", "add", "--dev", ...devDependencies);

  printMessage("Done!");

  if (yarnVersion === 2) {
    printMessage('If you use VSCode, run "yarn dlx @yarnpkg/sdks vscode"');
    printMessage("If you're done, you can delete create.js.");
  }

  rl.close();
})();
