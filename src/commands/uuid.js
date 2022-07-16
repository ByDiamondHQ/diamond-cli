const path = require("path");
const { v4 } = require("uuid");
const clipboard = require('clipboardy');
const { error, success } = require(path.join(__dirname, "../utils/output"));

module.exports = {
  command: "uuid",
  desc: "Generates a v4 uuid and copies to clipboard",
  builder: (yargs) => {
    return yargs
      .example([
        [`
        # Copied UUID to clipboard - xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        `]
      ])
      .fail((_, err, yargs) => {
        error(err, yargs);
      });
  },
  handler: async function () {
    const uuid = v4()

    clipboard.write(uuid)

    success(`Copied UUID to clipboard - ${uuid}`)
  }
} 
