/* eslint-disable react/prop-types */
import Context from '@/presentation/context/form/form-context'
import React, { useContext } from 'react'
const Style = require('./input-styles.scss')

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={Style.inputWrapper}>
        <input
          {...props} data-testid={props.name}
          readOnly onFocus={enableInput}
          onChange={handleChange}
        />
        <span
          data-testid={`${props.name}-status`}
          title={getTitle()}
          className={Style.status}>
            {getStatus()}
        </span>
    </div>
  )
}

export default Input
