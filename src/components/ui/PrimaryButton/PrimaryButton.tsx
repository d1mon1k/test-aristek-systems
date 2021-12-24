import React from 'react'
import cl from './PrimaryButton.module.scss'

const PrimaryButton = ({ clickHandler, ...props }) => {
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
