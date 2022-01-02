import React from 'react'
import { NewTodo } from '../../../types/interfaces'
import { OnBtnClick } from '../../../types/types'
import cl from './styles.module.scss'

interface Props {
  onClickHandler: OnBtnClick
  item: NewTodo
  alt: string
  src: string
}

const AdditionalButton: React.FC<Props> = ({ onClickHandler, item, alt, ...props }) => {
  return (
    <button onClick={() => onClickHandler(item)} className={cl.additionalBtn}>
      <img {...props} alt={alt} />
    </button>
  )
}

export default AdditionalButton
