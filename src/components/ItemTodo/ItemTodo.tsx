import React from 'react'
import cl from './ItemTodo.module.scss'
import editIcon from './../../assets/images/svg/edit-ico.svg'
import copyIcon from './../../assets/images/svg/copy-ico.svg'
import deleteIcon from './../../assets/images/svg/delete-ico.svg'
import AdditionalButton from '../ui/AdditionalButton/AdditionalButton'
import { NewTodo } from '../../interfaces'

interface ItemTodo {
  onEdit?: EditFunction
  onRemove: RemoveFunction
  onCheckboxChange: CheckboxChangeFunction
  todoItem: NewTodo
  title: string 
}
type EditFunction = (todoItem: NewTodo) => void 
type RemoveFunction = (e: React.MouseEvent, todoItem: NewTodo) => void
type CheckboxChangeFunction = (todoItem: NewTodo) => void
export type OnBtnClick = EditFunction | RemoveFunction | CheckboxChangeFunction

const ItemTodo: React.FC<ItemTodo> = ({ onEdit, onRemove, onCheckboxChange, todoItem, title }) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(todoItem.title)
  }

  const additionalBtns = todoItem.completed ? null : (
    <>
      <AdditionalButton onClick={onEdit} src={editIcon} alt="edit" />
      <AdditionalButton onClick={copyHandler} src={copyIcon} alt="copy" />
    </>
  )

  let itemTitleCl = [cl.text, todoItem.completed ? cl.text_checked : null]

  return (
    <li className={cl.itemTodo}>
      <input
        onChange={() => onCheckboxChange(todoItem)}
        checked={todoItem.completed}
        type="checkbox"
      />
      <span className={itemTitleCl.join(' ')}>{title}</span>
      {additionalBtns}
      <AdditionalButton onClick={onRemove} src={deleteIcon} alt="delete" />
    </li>
  )
}

export default ItemTodo
