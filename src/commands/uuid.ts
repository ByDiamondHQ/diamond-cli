import { Command } from '@oclif/core'
import color from "@oclif/color"

import { v4 as uuidv4 } from 'uuid';

export default class Uuid extends Command {
  static description = 'Generates a UUID to console.'

  static examples = [
    'UUID generated: 70a2b8a3-7f6f-4deb-84d4-26458f29fb4e',
  ]

  public async run(): Promise<void> {

    const uuid = uuidv4()

    this.log(color.blueBright('===== UUID Generated ====='))
    this.log(uuid)
    this.log(color.blueBright('==============================='))
  }

  async catch(error: Error) {
    console.log(error)
    throw error;
  }
}
