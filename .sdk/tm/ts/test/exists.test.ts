
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LmWhatsappSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LmWhatsappSDK.test()
    equal(testsdk instanceof LmWhatsappSDK, true,
      'LmWhatsappSDK.test() must return a client synchronously')
  })

})
