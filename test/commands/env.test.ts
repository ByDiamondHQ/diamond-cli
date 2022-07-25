import {expect, test} from '@oclif/test'

describe('env', () => {
  test
  .stdout()
  .command(['env'])
  .it('runs dmd env', ctx => {
    expect(ctx.stdout).to.contain('Current Environment')
  })
})
