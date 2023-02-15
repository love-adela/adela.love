import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerElements}>
          <div className={styles.footerIntro}>
            <small>✨ made with</small>
            <Link href="https://nextjs.org" passHref>
              <small className={styles.footerText}> Next.js</small>
            </Link>
              <small> & </small>
            <Link href="https://vercel.com/" passHref>
              <small className={styles.footerText}> Vercel </small>
            </Link>
              <small> & </small>
            <Link href="https://github.com/love-adela/adela.love" passHref>
              <small className={styles.footerText}> source code</small>
            </Link>
              <small>✨</small>
          </div>
          <div className={styles.footerCopyright}>
            <p>© 2023 <b>Adela Chung</b> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
