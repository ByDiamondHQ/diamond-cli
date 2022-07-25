import { existsSync, mkdirSync, readFileSync } from 'fs-extra';
import { Command, Flags } from '@oclif/core';
import { exec } from "child_process";
import { promisify } from 'util';
import color from "@oclif/color";
import { join } from 'path';

const diamondrepo = 'https://github.com/ByDiamondHQ/diamond-express.git'

const execute = promisify(exec);

export default class AppMake extends Command {
  static description = 'Creates a new Express app from the Diamond Express boilerplate'

  static examples = []

  static flags = {
    name: Flags.string(),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(AppMake)
    const { name } = flags;

    if (!name) return this.log(color.redBright('Application name must be provided.'))

    const appDir = join(process.cwd(), '.env')

    mkdirSync(appDir)

    await execute(`git clone ${diamondrepo} ${name}`)

    this.log(``)
    this.log(color.blueBright('===== Application Created ====='))
    this.log(``)
    this.log(`To get started:`)
    this.log(`cd ${name} && npm install`)
    this.log(``)
    this.log(color.blueBright('==============================='))
    this.log(``)
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
