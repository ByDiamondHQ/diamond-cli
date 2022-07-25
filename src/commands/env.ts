import { existsSync, readFileSync, readJSONSync } from 'fs-extra';
import { Command, CliUx } from '@oclif/core';
import { exec } from "child_process";
import { promisify } from 'util';
import color from "@oclif/color";
import { join } from 'path';

const execute = promisify(exec);

export default class Env extends Command {
  static description = 'Prints the current environment properties to the CLI'

  static examples = [
    `
    # ------------ Project Name ------------
    # App: /app/index.js
    # Env: Testing
    # Node: v16.15.0
    `,
  ]

  public async run(): Promise<void> {

    const envDir = join(process.cwd(), '.env')

    let env: string = "undefined"

    if (existsSync(envDir)) {
      const dotenv: any = await readFileSync(join(process.cwd(), '.env'))
      env = dotenv.split('\n').find((line: string | string[]) => line.includes('ENV=')).replace('ENV=', '') || undefined
    }


    let { stdout: repo } = await execute('git config --get remote.origin.url')

    const data = [
      {
        name: "Environment",
        value: env === 'production' ? color.green.bold(env) : color.red(env)
      },
      {
        name: "Repository",
        value: repo.replace('\n', '')
      },
      {
        name: "Node Version",
        value: color.green(process.version)
      }
    ]

    this.log(``)
    this.log(color.blueBright('===== Current Environment ====='))
    CliUx.ux.table(data, {
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
    this.log(color.blueBright('==============================='))
    this.log(``)
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
