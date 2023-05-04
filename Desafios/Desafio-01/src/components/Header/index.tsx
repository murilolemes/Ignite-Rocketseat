import logo from '../../assets/logo.png';

import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.content}>
      <img src={logo} alt="Logo ToDo" />
    </div>
  )
}