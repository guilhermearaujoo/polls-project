import React from 'react'
const Style = require('./input-styles.scss')

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Style.inputWrapper}>
        <input {...props} readOnly onFocus={enableInput}/>
        <span className={Style.status}>🟢</span>
    </div>
  )
}

export default Input
