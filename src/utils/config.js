const path = require('path');
const fs = require('fs-extra');
const { homedir } = require('os');
const configPath = path.join(homedir(), ".config", "diamond", "cli", `default.json`);

const writeToConfig = async (key, value) => {

  const config = await readConfig()

  config[key] = value

  fs.outputJSONSync(configPath, config)
}

const readConfig = async () => {
  fs.ensureFile(configPath)
  return JSON.parse(fs.readFileSync(configPath))
}

module.exports = {
  configPath,
  writeToConfig,
  readConfig
}
