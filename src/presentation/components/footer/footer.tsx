import React, { memo } from 'react'
const Style = require('./footer-styles.scss')

const LoginHeader: React.FC = () => {
  return (
    <footer className={Style.footer}></footer>
  )
}

export default memo(LoginHeader)
