import Link from 'next/link'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <nav className={styles.footer}>
        <div className={styles.bottomnav}>
          <Link href="/">
            <a className={styles.bottomnavHome} >
              <div className={styles.img__wrapper}>
               <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/811ee09c.svg" alt="home" />
              </div>
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={styles.bottomnavHome} >
              <div className={styles.img__wrapper}>
                <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/a8815f96.svg" alt="feed" />
              </div>
              Feed
            </a>
          </Link>
          <Link href="/">
            <a className={styles.bottomnavHome} >
              <div className={styles.img__wrapper}>
                <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/b2ce8c51.svg" alt="cart" />
              </div>
              Cart
            </a>
          </Link>
          <Link href="/">
            <a className={styles.bottomnavHome} >
              <div className={styles.img__wrapper}>
                <img width="24" height="24" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/atreus/kratos/4a42b93d.svg" alt="login" />
              </div>
              Login
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
