
module.exports = {
  command: "config",
  desc: "Configures the local configuration file",
  builder(yargs) {
    return yargs
      .example([
        [`
        config set [key] [value]
      `]
      ])
      .commandDir("config")
      .demandCommand()
      .strict()
  }
}