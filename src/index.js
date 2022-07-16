#!/usr/bin/env node
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const version = () => { return require('../package').version; }

yargs(hideBin(process.argv))
  .commandDir('commands')
  .demandCommand()
  .usage("dmd [command]\n")
  .recommendCommands()
  .wrap(yargs.terminalWidth())
  .help("help", "A list of commands and options for each commands")
  .version("version", "Show current version", version())
  .strict()
  .alias({ h: "help", v: "version" })
  .argv;
