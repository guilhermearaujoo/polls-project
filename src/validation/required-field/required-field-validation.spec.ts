import { faker } from '@faker-js/faker'
import { RequiredFieldError } from '../errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.word.sample())

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return FALSY if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.word.sample())
    expect(error).toBeFalsy()
  })
})
