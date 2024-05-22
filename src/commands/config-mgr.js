import chalk from "chalk";
import { pkgUp } from "pkg-up";
import fs from "fs/promises";
export async function getConfig() {
  const pkgPath = await pkgUp({ cwd: process.cwd() });
  // const pkg = JSON.parse(await import(pkgPath));

  const pkgRaw = await fs.readFile(pkgPath, "utf-8");
  const pkg = JSON.parse(pkgRaw);

  if (pkg.tool) {
    // console.log("Found configuration", pkg.tool);
    // TODO: do something with configuration
    return pkg.tool;
  } else {
    // console.log(chalk.yellow("Could not find configuration, using default"));
    // TODO: get default configuration
    return { port: 1234 };
  }
}
