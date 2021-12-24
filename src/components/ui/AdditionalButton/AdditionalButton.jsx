import React from 'react'
import cl from './AdditionalButton.module.scss'

const AdditionalButton = ({ onClick, alt, ...props }) => {
  return (
    <button onClick={onClick} className={cl.additionalBtn}>
      <img {...props} alt={alt} />
    </button>
  )
}

export default AdditionalButton
