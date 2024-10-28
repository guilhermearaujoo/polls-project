import { InvalidFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()
    expect(sut.validate(faker.word.sample(4))).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut()
    expect(sut.validate(faker.word.sample(5))).toBeFalsy()
  })
})
