import React from 'react'
const Style = require('./spiner-styles.scss')

type Props = React.HTMLAttributes<HTMLElement> & {
  className?: string
}

const Spiner: React.FC<Props> = (props: Props) => {
  return (
    <div {...props} data-testid="spiner" className={[Style.spiner, props.className].join(' ')}>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
  )
}

export default Spiner
