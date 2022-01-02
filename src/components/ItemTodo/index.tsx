import React from 'react'
import cl from './styles.module.scss'
import editIcon from './../../assets/images/svg/edit-ico.svg'
import copyIcon from './../../assets/images/svg/copy-ico.svg'
import deleteIcon from './../../assets/images/svg/delete-ico.svg'
import AdditionalButton from '../ui/AdditionalButton'
import { NewTodo } from '../../types/interfaces'
import { CheckboxChangeFunction, CopyTextFunction, EditFunction, RemoveFunction } from '../../types/types'

interface Props {
  onEdit?: EditFunction
  onRemove: RemoveFunction
  onCheckboxChange: CheckboxChangeFunction
  todoItem: NewTodo
  title: string 
}

const ItemTodo: React.FC<Props> = ({ onEdit, onRemove, onCheckboxChange, todoItem, title }) => {
  const copyHandler: CopyTextFunction = () => {
    navigator.clipboard.writeText(todoItem.title)
  }

  const additionalBtns = todoItem.completed ? null : (
    <>
      <AdditionalButton item={todoItem} onClickHandler={onEdit!} src={editIcon} alt="edit" />
      <AdditionalButton item={todoItem} onClickHandler={copyHandler} src={copyIcon} alt="copy" />
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
      <AdditionalButton item={todoItem} onClickHandler={onRemove} src={deleteIcon} alt="delete" />
    </li>
  )
}

export default ItemTodo
