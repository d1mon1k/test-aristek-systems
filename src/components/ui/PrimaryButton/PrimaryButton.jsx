import React from 'react'
import './PrimaryButton.scss'

const PrimaryButton = ({ clickHandler, ...props }) => {
  return (
    <button
      {...props}
      className="primary-btn"
      onClick={(e) => {
        clickHandler(e)
      }}
    >
      {props.children}
    </button>
  )
}

export default PrimaryButton
