import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header'

const name = 'adela.love'
export const siteTitle = 'adela.love'
export const siteImage = 'https://raw.githubusercontent.com/love-adela/adela.love/main/public/images/og_image.jpg'

export default function Layout({ children, home }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* Open Graph */}
        <meta property="og:url" content="https://adela.love" />
        <meta property="og:image" content={siteImage} key="ogimage"/>
        <meta property="og:image:width" content="598" />
        <meta property="og:image:height" content="425" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@love__adela" />
        <meta name="twitter:creator" content="@love__adela" />
      </Head>
      {home ? (
        <>
          <Header />
        </>
      ) : (
      <header className={styles.header}>
      <>
        <Link href="/">
          <a>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
          </a>
        </Link>
      </>
      </header>
      )}
      <main className={styles.container}>{children}</main>
      <footer>
        <small>
        ✨ made with
          <a href="https://nextjs.org/"> Next.js </a>
          & 
          <a href="https://vercel.com/"> Vercel </a>
          & 
          <a href="https://github.com/love-adela/adela.love"> source code ✨</a>
          <p>© 2022 <b>Adela Chung</b> All rights reserved.</p>
        </small>
      </footer>
    </div>
  )
}
