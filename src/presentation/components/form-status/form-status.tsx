import Context from '@/presentation/context/form/form-context'
import React, { useContext } from 'react'
import Spiner from '../spiner/spiner'
const Style = require('./form-status-styles.scss')

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Style.errorWrapper}>
      {state?.isLoading && <Spiner className={Style.spiner}/>}
      {state?.mainError && <span className={Style.error}>{state?.mainError}</span>}
    </div>
  )
}

export default FormStatus
