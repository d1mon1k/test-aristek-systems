import React from 'react'
import './AdditionalButton.scss'

const AdditionalButton = ({ onClick, alt, ...props }) => {
  return (
    <button onClick={onClick} className="additional-btn">
      <img {...props} alt={alt} />
    </button>
  )
}

export default AdditionalButton
