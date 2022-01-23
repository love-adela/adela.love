import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerElements}>
          <div className={styles.footerIntro}>
          ✨ made with
            <Link href="https://nextjs.org">
              <small className={styles.footerText}> Next.js</small>
            </Link>
              <small className={styles.footerText}> & </small>
            <Link href="https://vercel.com/">
              <small> Vercel </small>
            </Link>
              <small className={styles.footerText}> & </small>
            <Link href="https://github.com/love-adela/adela.love"> 
              <small> source code ✨</small>
            </Link>
          </div>
          <div className={styles.footerCopyright}>
            <p>© 2022 <b>Adela Chung</b> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}