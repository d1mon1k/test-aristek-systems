import React from 'react'
import './ItemTodo.scss'
import editIcon from './../../assets/images/svg/edit-ico.svg'
import copyIcon from './../../assets/images/svg/copy-ico.svg'
import deleteIcon from './../../assets/images/svg/delete-ico.svg'
import AdditionalButton from '../ui/AdditionalButton/AdditionalButton'

const ItemTodo = ({ onEdit, onRemove, onCheckboxChange, todoItem, title }) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(todoItem.title)
  }

  const additionalBtns = todoItem.completed ? null : (
    <>
      <AdditionalButton onClick={onEdit} src={editIcon} alt="edit" />
      <AdditionalButton onClick={copyHandler} src={copyIcon} alt="copy" />
    </>
  )

  const itemTitleClass = `item-todo__text ${
    todoItem.completed ? 'item-todo__text_checked' : null
  }`

  return (
    <li className="item-todo">
      <input onChange={onCheckboxChange} checked={todoItem.completed} type="checkbox"/>
      <span className={itemTitleClass}>{title}</span>
      {additionalBtns}
      <AdditionalButton onClick={onRemove} src={deleteIcon} alt="delete" />
    </li>
  )
}

export default ItemTodo
