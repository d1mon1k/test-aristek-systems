import cl from './styles.module.scss'
import logo from '../../assets/images/svg/logo.svg'
import userPhoto from '../../assets/images/jpg/avatar.jpg'
import arrow from '../../assets/images/svg/arrow.svg'

const Header = () => {
  return (
    <header className={cl.header}>
      <a className={cl.logo} href="/">
        <img src={logo} alt="logo" />
      </a>
      <h1 className={cl.title}>Tasks</h1>
      <div className={cl.userInfo}>
        <span>Leanne Graham</span>
        <img src={userPhoto} alt="user" />
        <img src={arrow} alt="arrow" />
      </div>
    </header>
  )
}

export default Header
