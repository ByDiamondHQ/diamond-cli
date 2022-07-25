import { expect, test } from '@oclif/test'

describe('uuid', () => {
  test
    .stdout()
    .command(['uuid'])
    .it('runs dmd uuid', ctx => {
      expect(ctx.stdout).to.contain('UUID Generated')
    })
})
