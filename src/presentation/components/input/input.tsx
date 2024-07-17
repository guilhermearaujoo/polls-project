import React from 'react'
const Style = require('./input-styles.scss')

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Style.inputWrapper}>
        <input {...props} />
        <span className={Style.status}>🟢</span>
    </div>
  )
}

export default Input
