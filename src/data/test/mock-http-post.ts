import { faker } from '@faker-js/faker'
import { type HttpPostParams } from '../protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: { name: faker.person.firstName() }
  }
}
