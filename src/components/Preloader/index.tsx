import preloader from '../../assets/images/svg/preloader.svg'
import cl from './styles.module.scss'

const Preloader = () => {
  return <img className={cl.preloader} src={preloader} alt="preloader" />
}

export default Preloader
