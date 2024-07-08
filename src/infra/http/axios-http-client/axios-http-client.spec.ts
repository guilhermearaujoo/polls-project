import { type HttpPostParams } from '@/data/protocols/http'
import { faker } from '@faker-js/faker'
import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = { data: { lastName: faker.person.lastName() }, status: faker.number.int(200) }
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: { name: faker.person.firstName() }
  }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct VALUES', async () => {
    const sut = makeSut()
    const request = mockPostRequest()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('should return the correct status code and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({ statusCode: mockedAxiosResult.status, body: mockedAxiosResult.data })
  })
})
