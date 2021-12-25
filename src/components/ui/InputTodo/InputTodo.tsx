import React from 'react'
import cl from './InputTodo.module.scss'

interface InputTodo {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  textArea: string
  placeholder: string
}

const InputTodo:React.FC<InputTodo> = ({ onInputChange, textArea, ...props }) => {
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
