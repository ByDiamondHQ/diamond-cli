const chalk = require("chalk");
const logSymbols = require('log-symbols');
const { hideBin } = require("yargs/helpers");

module.exports = {
  success(message) {
    console.log(chalk.green(logSymbols.success), message)
  },
  error(err) {
    console.log(chalk.red(`ERROR - An error has occured`));
    const argv = hideBin(process.argv);
    console.log(err)
    process.exit(1);
  }
}