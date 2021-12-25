import React from 'react'

interface Counter {
    className: string
}

const Counter: React.FC<Counter> = (props) => {
  return <span {...props}>{props.children}</span>
}

export default Counter
