const path = require("path");
const chalk = require('chalk');
const { promisify } = require('util');
const { exec } = require("child_process");
const { error } = require(path.join(__dirname, "../utils/output"));
const { readFile } = require(path.join(__dirname, "../utils/files"));

const execute = promisify(exec);

module.exports = {
  command: "env",
  desc: "Prints your current environment properties to the CLI",
  builder: (yargs) => {
    return yargs
      .example([
        [`
        # ------------ Project Name ------------
        # App: /app/index.js
        # Env: Testing
        # Node: v16.15.0
        `]
      ])
      .fail((_, err, yargs) => {
        error(err, yargs);
      });
  },
  handler: async function () {
    // Open package.json and print name
    const package = JSON.parse(await readFile('package.json'))

    const dotenv = await readFile('.env')
    const env = dotenv.split('\n').find(line => line.includes('ENV=')).replace('ENV=', '')

    let { stdout: repo } = await execute('git config --get remote.origin.url')

    console.log('------------', chalk.bold.green(package.name), `------------`)
    console.log(`Env:`, env === 'production' ? chalk.green.bold(env) : chalk.red(env))
    console.log(`Repo: ${repo.replace('\n', '')}`)
    console.log(`Node:`, chalk.green(process.version))
  }
}