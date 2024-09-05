import Context from '@/presentation/context/form/form-context'
import React, { useContext } from 'react'
import Spiner from '../spiner/spiner'
const Style = require('./form-status-styles.scss')

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Style.errorWrapper}>
      {state?.isLoading && <Spiner className={Style.spiner}/>}
      {errorState?.mainError && <span className={Style.error}>Erro</span>}
    </div>
  )
}

export default FormStatus
