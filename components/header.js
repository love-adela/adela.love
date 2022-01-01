import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from './header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerNavbar}>
          <Link href="/">
              <div className={styles.headerTitleWrap}>
                <h1>adela.love</h1>
              </div>
          </Link>
          <div className={styles.headerSpecWrap}>
            <ul class={styles.headerSpecMenu}>
              <li className={styles.headerSpecItems}>
                <Link href="/post">Post</Link></li>
              <li className={styles.headerSpecItems}>
                <Link href="/essay">Essay</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

