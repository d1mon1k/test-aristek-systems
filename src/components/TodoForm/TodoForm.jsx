import React from 'react'
import cl from './TodoForm.module.scss'
import InputTodo from '../ui/InputTodo/InputTodo'
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton'

const TodoForm = ({ onInputChange, onSave, onAdd, editableTask, textArea }) => {
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
