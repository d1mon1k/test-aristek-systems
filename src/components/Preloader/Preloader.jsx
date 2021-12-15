import React from 'react'
import preloader from '../../assets/images/svg/preloader.svg'
import './Preloader.scss'

const Preloader = () => {
  return <img className="preloader" src={preloader} alt="preloader" />
}

export default Preloader
