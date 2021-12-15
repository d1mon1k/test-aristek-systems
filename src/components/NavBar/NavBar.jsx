import React from 'react'
import './NavBar.scss'
import tasksIco from '../../assets/images/svg/nav-element.svg'

const NavBar = () => {
  return (
    <aside className="sidebar">
      <ul className='nav'>
        <li className='nav__item active'>
          <a className='nav__link' href="/">
            <img src={tasksIco} alt="tasks icon" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default NavBar
