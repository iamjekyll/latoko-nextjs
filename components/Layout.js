import Footer from './Footer'
import Header from './Header'
// import CategoryButtons from './CategoryButtons'
import styles from './Layout.module.css'

const Layout = ({ children, categories }) => {
    return (
            <div className={styles.css}>
                <Header />
                <div className={styles.moo}>{children}</div>
                <Footer />
            </div>
    )
}

export default Layout;