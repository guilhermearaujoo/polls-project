import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components'
import React from 'react'
const Style = require('./login-styles.scss')

const Login: React.FC = () => {
  return (
    <div className={Style.login}>
      <LoginHeader />
      <form className={Style.form} action="">
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Type your email' />
        <Input type='password' name='password' placeholder='Type your password' />
        <button type='submit' className={Style.submit}>Enter</button>
        <span className={Style.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login