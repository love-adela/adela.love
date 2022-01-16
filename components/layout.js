import Header from './header'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <main className={styles.mainArticle}>{children}</main>
      </div>
      <Footer />
  </>
  )
}