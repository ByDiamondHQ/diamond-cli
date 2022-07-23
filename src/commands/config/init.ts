import { outputJSONSync } from 'fs-extra';
import { Command, Flags } from '@oclif/core'
import color from "@oclif/color";
import { join } from 'path';

export default class InitConfig extends Command {
  static description = 'Create a CLI config file.'

  static examples = [
    '',
  ]

  static flags = {
    profile: Flags.string(),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(InitConfig)

    let profile = flags.profile || "default"

    const configPath = join(this.config.configDir, `${profile}.json`)

    const config = {
      profile: profile
    }

    outputJSONSync(configPath, config)

    if (profile !== "default") return this.log(color.blueBright(`Config created for profile ${profile}`))
    return this.log(color.blueBright('Default config created'))
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
