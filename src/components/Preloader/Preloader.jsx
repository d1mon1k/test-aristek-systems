import React from 'react'
import preloader from '../../assets/images/svg/preloader.svg'
import cl from './Preloader.module.scss'

const Preloader = () => {
  return <img className={cl.preloader} src={preloader} alt="preloader" />
}

export default Preloader
