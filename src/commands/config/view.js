const path = require("path");
const { readConfig } = require("../../utils/config");
const { error } = require(path.join(__dirname, "../../utils/output"));

module.exports = {
  command: "view",
  desc: "Shows the CLI's current configuration",
  builder: (yargs) => {
    return yargs
      .options({
      })
      .example([
        [`
        # [Key] : [value]
        `]
      ])
      .fail((_, err, yargs) => {
        error(err, yargs);
      });
  },
  handler: async function (argv) {
    const config = await readConfig()

    console.log(config)
  }
} 
