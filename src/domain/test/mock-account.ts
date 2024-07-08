import { faker } from '@faker-js/faker'
import { type AccountModel } from '../models/account-model'
import { type AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.string.uuid()
  }
}
