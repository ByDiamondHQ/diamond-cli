const path = require("path");
const { exec } = require("child_process");
const { error, success } = require(path.join(__dirname, "../../utils/output"));
const { makePackage, makeGitignore, makeReadme } = require(path.join(__dirname, "../../services/create/general"));

const diamondrepo = 'https://github.com/ByDiamondHQ/diamond-express.git'

module.exports = {
  command: "app",
  desc: "Generates an Express app boilerplate",
  builder: (yargs) => {
    return yargs
      .options({
        name: { type: "string", desc: "Your Express API's name" },
      })
      .example([
        [`
        # Generated Application
        `]
      ])
      .fail((_, err, yargs) => {
        error(err, yargs);
      });
  },
  handler: async function (argv) {
    const { name } = argv;

    // Make smaller config files
    await makePackage(name)
    await makeReadme(name)
    await makeGitignore()

    await exec(`git clone ${diamondrepo} ${name}`)

    success('Generated Application')
  }
} 
