import React from 'react'

const Counter = (props) => {
  return <span {...props}>{props.children}</span>
}

export default Counter
