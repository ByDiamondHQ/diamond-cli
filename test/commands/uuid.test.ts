import { expect, test } from '@oclif/test'

describe('uuid', () => {
  test
    .stdout()
    .command(['uuid'])
    .it('runs uuid', ctx => {
      expect(ctx.stdout).to.contain('UUID generated:')
    })
})
