import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber'
import request from 'supertest'
import { ApiBackendApp } from '../../../../../../src/apps/api/backend/ApiBackendApp'

let _request: request.Test
let application: ApiBackendApp

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route)
})

Then('The response status code is {int}', async (status: number) => {
  await _request.expect(status)
})

BeforeAll(async () => {
  application = new ApiBackendApp()
  await application.start()
})

AfterAll(async () => {
  await application.stop()
})
