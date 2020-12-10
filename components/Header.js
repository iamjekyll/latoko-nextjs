import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.top_navigation}>
      <div className={styles.topmaster}>
        <div className={styles.topmaster2}>
          <nav className={styles.navbar__container}>
            <div className={styles.navbar__wrapper}>
              <div className={styles.navbar__transparent}>
                <button className={styles.navbar__menu}>
                  m
                </button>
                <div className={styles.navbar__title}>
                  <div className={styles.navbar__searchbar}>
                    <input className={styles.searchbar__input} placeholder="Cari mug couple" />
                  </div>
                </div>
                <span className={styles.topnav__addtocart}>span</span>
                <div></div>
                <Link href="#" >
                  <a className={styles.topnav_notif}>N</a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Header;