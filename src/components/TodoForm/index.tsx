import React from 'react'
import cl from './styles.module.scss'
import { NewTodo } from '../../types/interfaces'
import InputTodo from '../ui/InputTodo'
import PrimaryButton from '../ui/PrimaryButton'

interface Props {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSave: (e: React.FormEvent) => void
  onAdd: (e: React.FormEvent) => void
  editableTask: NewTodo | null
  textArea: string
}

const TodoForm: React.FC<Props> = ({ onInputChange, onSave, onAdd, editableTask, textArea }) => {
  return (
    <form className={cl.todoForm}>
      <InputTodo
        onInputChange={onInputChange}
        textArea={textArea}
        placeholder="+ Add a task, press Enter to save"
      />
      <PrimaryButton clickHandler={editableTask ? onSave : onAdd}>
        {editableTask ? 'Save' : 'Add'}
      </PrimaryButton>
    </form>
  )
}

export default TodoForm
