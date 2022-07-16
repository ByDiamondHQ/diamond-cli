const path = require("path");
const { mkfile } = require(path.join(__dirname, "../../utils/files"));
const { success } = require(path.join(__dirname, "../../utils/output"));

module.exports = {
  async makePackage(name) {
    try {
      let pkg = {
        name: name,
        version: "0.0.0",
        private: true,
        scripts: {
          start: "node app/app.js",
          dev: "nodemon app/app.js"
        },
        dependencies: {
          "app-root-path": "^3.0.0",
          "body-parser": "^1.20.0",
          cors: "^2.8.5",
          dotenv: "^16.0.0",
          express: "^4.18.1",
          "html-to-text": "^8.2.0",
          jsonwebtoken: "^8.5.1",
          lodash: "^4.17.21",
          mongoose: "^6.4.2",
          morgan: "^1.10.0",
          nodemailer: "^6.7.5",
          uuid: "^8.3.2"
        }
      }

      await mkfile('package.json', JSON.stringify(pkg, null, 2) + '\n')

      success("Created package.json")
    } catch (e) {
      throw Error(e)
    }
  },
  async makeReadme(name) {
    try {
      await mkfile('readme.md', `# ${name.toLowerCase()}`)

      success("Created readme.md")
    } catch (e) {
      throw Error(e)
    }
  },
  async makeGitignore() {
    try {
      await mkfile('.gitignore', 'node_modules')

      success("Created .gitignore")
    } catch (e) {
      throw Error(e)
    }
  }
}