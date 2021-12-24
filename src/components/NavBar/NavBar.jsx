import React from 'react'
import cl from './NavBar.module.scss'
import tasksIco from '../../assets/images/svg/nav-element.svg'

const NavBar = () => {
  return (
    <aside className={cl.sidebar}>
      <ul className={cl.nav}>
        <li className={[cl.item, cl.active].join(' ')}>
          <a className={cl.link} href="/">
            <img src={tasksIco} alt="tasks icon" />
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default NavBar
