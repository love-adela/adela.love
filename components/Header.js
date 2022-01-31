import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerNavbar}>
          <div className={styles.headerTitleWrap}>
              <h1><Link href="/">adela.love</Link></h1>
          </div>
          <div className={styles.headerSpecWrap}>
            <ul className={styles.headerSpecMenu}>
              <li className={styles.headerSpecItems}>
                <Link href="/posts">Post</Link></li>
              <li className={styles.headerSpecItems}>
                <Link href="/essays">Essay</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
