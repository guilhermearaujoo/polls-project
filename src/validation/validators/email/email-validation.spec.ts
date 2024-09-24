import { InvalidFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'
import { EmailValidation } from './email-validation'

const makeSut = (): EmailValidation => new EmailValidation(faker.word.sample())

describe('EmailValidator', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.word.sample())
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return FALSY if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
