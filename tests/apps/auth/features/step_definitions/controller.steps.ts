import assert from 'assert'
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber'
import request from 'supertest'
import { AuthApp } from '../../../../../src/apps/auth/AuthApp'

let _request: request.Test
let application: AuthApp
// let _response: request.Response

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route)
})

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body))
})

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status)
})

Then('the response should be empty', async () => {
  await _request.then((res) => {
    assert.deepStrictEqual(res.body, {})
  })
})

BeforeAll(async () => {
  application = new AuthApp()
  await application.start()
})

AfterAll(async () => {
  await application.stop()
})
