import React from 'react'
import { OnBtnClick } from '../../ItemTodo/ItemTodo'
import cl from './AdditionalButton.module.scss'

interface AdditionalBtn {
  onClickHandler?: OnBtnClick
  alt: string
  src: string
}

const AdditionalButton: React.FC<AdditionalBtn> = ({ onClickHandler, alt, ...props }) => {
  return (
    <button onClick={onClickHandler} className={cl.additionalBtn}>
      <img {...props} alt={alt} />
    </button>
  )
}

export default AdditionalButton
