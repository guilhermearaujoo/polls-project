import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'
import { type Validation } from '@/presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
const Style = require('./login-styles.scss')

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Style.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Style.form} action="">
          <h2>Login</h2>
          <Input type='email' name='email' placeholder='Type your email' />
          <Input type='password' name='password' placeholder='Type your password' />
          <button data-testid="submit" disabled type='submit' className={Style.submit}>Enter</button>
          <span className={Style.link}>Criar conta</span>
          <FormStatus />
        </form>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
