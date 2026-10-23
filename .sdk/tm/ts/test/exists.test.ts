
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RobloxIdsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RobloxIdsSDK.test()
    equal(testsdk instanceof RobloxIdsSDK, true,
      'RobloxIdsSDK.test() must return a client synchronously')
  })

})
