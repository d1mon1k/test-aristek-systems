import React from 'react'

interface Props {
  className: string
}

const Counter: React.FC<Props> = (props) => {
  return <span {...props}>{props.children}</span>
}

export default Counter
