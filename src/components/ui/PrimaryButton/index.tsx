import React from 'react'
import { onAdd, onSave } from '../../../types/types'
import cl from './styles.module.scss'

interface Props {
  clickHandler: onSave | onAdd
}

const PrimaryButton:React.FC<Props> = ({ clickHandler, ...props }) => {
  return (
    <button
      {...props}
      className={cl.primaryBtn}
      onClick={(e) => {
        clickHandler(e)
      }}
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton
