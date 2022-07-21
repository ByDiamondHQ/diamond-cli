const path = require("path");
const { writeToConfig } = require("../../utils/config");
const { error, success } = require(path.join(__dirname, "../../utils/output"));

module.exports = {
  command: "set",
  desc: "Sets a key/value property in the CLI's config file",
  builder: (yargs) => {
    return yargs
      .options({
        key: { type: "string", desc: "The key to change" },
        value: { type: "string", desc: "The value to set" },
      })
      .example([
        [`
        # DigitalOcean API Token added
        `]
      ])
      .fail((_, err, yargs) => {
        error(err, yargs);
      });
  },
  handler: async function (argv) {
    const { key, value } = argv;

    writeToConfig(key, value)

    success(`${key} updated.`)
  }
} 
