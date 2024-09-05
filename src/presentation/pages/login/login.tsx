import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import React, { useState } from 'react'

import Context from '@/presentation/context/form/form-context'
const Style = require('./login-styles.scss')

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <div className={Style.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
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
