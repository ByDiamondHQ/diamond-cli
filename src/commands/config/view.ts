import { readJSONSync, existsSync } from 'fs-extra';
import { Command, CliUx, Flags } from '@oclif/core';
import color from "@oclif/color";
import { join } from 'path';

export default class ViewConfig extends Command {
  static description = 'View the CLI\'s current config.'

  static examples = [
    '',
  ]

  static flags = {
    profile: Flags.string(),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(ViewConfig)

    let profile = flags.profile || "default"

    const configPath = join(this.config.configDir, `${profile}.json`)

    if (!existsSync(configPath)) return this.log(color.redBright('Please run \'dmd config init\' to create a config file'))

    const userConfig = await readJSONSync(configPath)
    const userData: Record<string, unknown>[] = []

    Object.entries(userConfig).map(i => userData.push({ name: i[0], value: i[1] }))

    this.log(color.blueBright(``))
    this.log(color.blueBright(`========= ${profile} config =========`))
    CliUx.ux.table(userData, {
      name: {
        minWidth: 16,
      },
      value: {
        get: row => "|  " + row.value
      },
    }, {
      printLine: this.log.bind(this),
      "no-header": true
    })
    this.log(color.blueBright('=============================='))
    this.log(color.blueBright(``))
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
