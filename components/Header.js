import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.top_navigation}>
      <div className={styles.nav_wrapper}>
        <div className={styles.navmain}>
          <button className={styles.navbar_menu}></button>
          <div className={styles.navbar_title}>
            <div className={styles.searchbar}>
              <input className={styles.searchbar_input} placeholder="Cari mug couple" />
            </div>
          </div>
          <span className={styles.whistlist}>
            m
          </span>
          <span className={styles.whistlist}>
            m
          </span>
          <span className={styles.whistlist}>
            m
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header;