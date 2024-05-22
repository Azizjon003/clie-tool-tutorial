#!/usr/bin/env node
// const arg = require("arg");
import arg from "arg";
import chalk from "chalk";

import { getConfig } from "../src/commands/config-mgr.js";
import { start } from "../src/commands/start.js";
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  // console.log(args);

  if (args["--start"]) {
    const config = await getConfig();
    start(config);
    // console.log(chalk.bgCyanBright("starting the app"));
  }
} catch (e) {
  // console.log(e);
  console.log(chalk.yellow(e?.message));

  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
  ${chalk.greenBright("--start")}\tStarts the app
  ${chalk.greenBright("--build")}\tBuilds the app`);
}
