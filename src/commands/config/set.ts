import { readJSONSync, outputJSONSync } from 'fs-extra';
import { Command, Flags } from '@oclif/core'
import color from "@oclif/color";
import { join } from 'path';

export default class SetConfig extends Command {
  static description = 'Sets a property in the CLI config file.'

  static examples = [
    '',
  ]

  static flags = {
    profile: Flags.string(),
    key: Flags.string(),
    value: Flags.string()
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(SetConfig)

    let { key, value } = flags;

    if(key === "profile") return this.log(color.redBright('You cannot change the name of this profile'))

    let profile = flags.profile || "default"

    const configPath = join(this.config.configDir, `${profile}.json`)

    const userConfig = readJSONSync(configPath)

    userConfig[key] = value

    outputJSONSync(configPath, userConfig)

    return this.log(color.blueBright(`${key} updated for profile ${profile}`))
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
