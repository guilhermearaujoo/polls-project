import React from 'react'
import Spiner from '../spiner/spiner'
const Style = require('./form-status-styles.scss')

const FormStatus: React.FC = () => {
  return (
    <div className={Style.errorWrapper}>
      <Spiner className={Style.spiner}/>
      <span className={Style.error}>Erro</span>
    </div>
  )
}

export default FormStatus
