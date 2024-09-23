import { faker } from '@faker-js/faker'
import { RequiredFieldError } from '../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return FALSY if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.word.sample())
    expect(error).toBeFalsy()
  })
})
