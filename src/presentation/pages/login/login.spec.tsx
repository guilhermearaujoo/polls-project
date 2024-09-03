import { render } from '@testing-library/react'
import React from 'react'
import Login from './login'

describe('Login Component', () => {
  test('Should not render Spinner and ErrorMessage on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrapper = getByTestId('error-wrap')
    expect(errorWrapper.childElementCount).toBe(0)
  })
})
