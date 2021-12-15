import React from 'react'
import './TodoForm.scss'
import InputTodo from '../ui/InputTodo/InputTodo'
import PrimaryButton from '../ui/PrimaryButton/PrimaryButton'

const TodoForm = ({ onInputChange, onSave, onAdd, editableTask, textArea }) => {
  return (
    <form className="todo-form">
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
