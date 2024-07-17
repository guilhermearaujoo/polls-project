import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Spiner from '@/presentation/components/spiner/spiner'
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
        <div className={Style.errorWrapper}>
          <Spiner className={Style.spiner}/>
          <span className={Style.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
