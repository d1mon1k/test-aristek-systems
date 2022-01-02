import React from 'react'
import cl from './styles.module.scss'

interface Props {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  textArea: string
  placeholder: string
}

const InputTodo:React.FC<Props> = ({ onInputChange, textArea, ...props }) => {
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
