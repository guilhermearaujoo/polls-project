import { faker } from '@faker-js/faker'
import { FieldValidationSpy } from '../test/mock-field-valdiation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpies: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationSpies = [new FieldValidationSpy(fieldName), new FieldValidationSpy('any_field')]
  const sut = new ValidationComposite(
    fieldValidationSpies
  )
  return {
    sut,
    fieldValidationSpies
  }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationSpies } = makeSut(fieldName)
    const errorMessage = faker.word.words()
    fieldValidationSpies[0].error = new Error(errorMessage)
    fieldValidationSpies[1].error = new Error(faker.word.words())

    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBe(errorMessage)
  })

  test('Should not return error if validation succeds', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)

    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBeFalsy()
  })
})
