import React, { MouseEventHandler } from 'react'
import ItemTodo, { OnBtnClick } from '../../ItemTodo/ItemTodo'
import cl from './AdditionalButton.module.scss'

interface AdditionalBtn {
  onClick: (e: React.MouseEvent, todoItem: ItemTodo) => void
  alt: string
  src: string
}

const AdditionalButton: React.FC<AdditionalBtn> = ({ onClick, alt, ...props }) => {
  return (
    <button onClick={onClick} className={cl.additionalBtn}>
      <img {...props} alt={alt} />
    </button>
  )
}

export default AdditionalButton
