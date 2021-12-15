import React from 'react'
import './Header.scss'
import logo from '../../assets/images/svg/logo.svg'
import userPhoto from '../../assets/images/jpg/avatar.jpg'
import arrow from '../../assets/images/svg/arrow.svg'

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <h1 className="header__title">Tasks</h1>
      <div className="user-info">
        <span>Leanne Graham</span>
        <img className="user-info__photo" src={userPhoto} alt="user" />
        <img src={arrow} alt="arrow" />
      </div>
    </header>
  )
}

export default Header
