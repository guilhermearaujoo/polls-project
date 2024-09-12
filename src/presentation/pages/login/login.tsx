/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Authentication } from '@/domain/usecases'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'
import { type Validation } from '@/presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Style = require('./login-styles.scss')

type Props = {
  validation?: Validation
  authentication?: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      passwordError: validation.validate('password', state.password),
      emailError: validation.validate('email', state.email)
    })
  }, [state.password, state.email])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) return
      setState({
        ...state,
        isLoading: true
      })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      localStorage.setItem('accessToken', account.accessToken)
      navigate('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Style.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Style.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Type your email' />
          <Input type='password' name='password' placeholder='Type your password' />
          <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type='submit' className={Style.submit}>Enter</button>
          <Link data-testid="signup" to="/signup" className={Style.link}>Criar conta</Link>
          <FormStatus />
        </form>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
