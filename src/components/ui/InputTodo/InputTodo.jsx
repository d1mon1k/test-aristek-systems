import React from 'react'
import './InputTodo.scss'

const InputTodo = ({ onInputChange, textArea, ...props }) => {
   return (
    <input
      {...props}
      value={textArea}
      className="input-todo"
      onChange={(e) => onInputChange(e)}
    />
  )
}

export default InputTodo
