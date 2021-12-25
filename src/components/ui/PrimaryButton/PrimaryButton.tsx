import React from 'react'
import cl from './PrimaryButton.module.scss'

  type onSave= (e: React.FormEvent) => void
  type onAdd= (e: React.FormEvent) => void
interface PrimaryButton {
  clickHandler: onSave | onAdd

}

const PrimaryButton:React.FC<PrimaryButton> = ({ clickHandler, ...props }) => {
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
