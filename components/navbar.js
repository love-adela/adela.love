import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './navbar.module.css'
const name = 'adela.love'

export default function NavBar() {
  return (
    <>
      <nav className={styles.headerNavbar}>
        <Link href="/">
          <ul className={styles.headerLogo}>
            <li><a><img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name}/></a></li>
            <li><a><h1 className={styles.headerHomeName}>{name}</h1></a></li>
          </ul>
          </Link>
          <Link href="/about">
            <div className={styles.headerHomeAbout}>
              <a><span className={styles.headerHomeAbout}>About</span></a>
            </div>
        </Link>
      </nav>
    </>
  )
}

