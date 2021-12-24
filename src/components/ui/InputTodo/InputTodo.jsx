import React from 'react'
import cl from './InputTodo.module.scss'

const InputTodo = ({ onInputChange, textArea, ...props }) => {
  return (
    <input
      {...props}
      value={textArea}
      className={cl.inputTodo}
      onChange={(e) => onInputChange(e)}
    />
  )
}

export default InputTodo
