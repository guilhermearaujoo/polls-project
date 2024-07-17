import React, { memo } from 'react'
import Logo from '../logo/logo'
const Style = require('./login-header-styles.scss')

const LoginHeader: React.FC = () => {
  return (
    <header className={Style.header}>
        <Logo/>
        <h1>4Dev - Polls for devs</h1>
      </header>
  )
}

export default memo(LoginHeader)
