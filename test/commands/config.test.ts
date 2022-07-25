import { expect, test } from '@oclif/test'

describe('config', () => {
  test
    .stdout()
    .command(['config', 'init', '--profile=test'])
    .it('runs dmd config init --profile=test', ctx => {
      expect(ctx.stdout).to.contain('Config created for profile')
    })

  test
    .stdout()
    .command(['config', 'set', '--profile=test', '--key=foo', '--value=bar'])
    .it('runs dmd config set --profile=test --key=foo --value=bar', ctx => {
      expect(ctx.stdout).to.contain('foo updated for profile test')
    })

  test
    .stdout()
    .command(['config', 'view', '--profile=test'])
    .it('runs dmd config view --profile=test', ctx => {
      expect(ctx.stdout).to.contain('test config')
    })
})

