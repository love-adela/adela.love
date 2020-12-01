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
            <a>
              <li><img src="/images/profile.jpg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} alt={name}/></li>
              <li><h1 className={styles.headerHomeName}>{name}</h1></li>
            </a>
          </ul>
          </Link>
          <Link href="/about">
            <div className={styles.headerHomeAbout}>
              <a><h2>About</h2></a>
            </div>
        </Link>
      </nav>
    </>
  )
}

