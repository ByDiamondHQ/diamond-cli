module.exports = {
  command: "make",
  desc: "Makes things",
  builder(yargs) {
    return yargs
      .example([
        [`
        make app
      `]
      ])
      .commandDir("make")
      .demandCommand()
      .strict()
  }
}