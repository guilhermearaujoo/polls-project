import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: { lastName: faker.person.lastName() },
    status: faker.number.int(200)
  })
  return mockedAxios
}
