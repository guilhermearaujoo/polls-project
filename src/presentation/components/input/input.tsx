/* eslint-disable react/prop-types */
import Context from '@/presentation/context/form/form-context'
import React, { useContext } from 'react'
const Style = require('./input-styles.scss')

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Style.inputWrapper}>
        <input {...props} readOnly onFocus={enableInput}/>
        <span data-testid={`${props.name}-status`} title={getTitle()} className={Style.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
