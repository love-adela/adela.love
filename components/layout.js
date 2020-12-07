import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './navbar'

const name = 'adela.love'
export const siteTitle = 'adela.love'
export const siteImage = 'https://raw.githubusercontent.com/love-adela/adela.love/main/public/images/og_image.jpg'

export default function Layout({ children, home }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Adela의 블로그"
          key="ogdesc"
        />
        <meta
          property="og:image"
          content={siteImage}
          key="ogimage"
        />
        <meta name="og:title" content={siteTitle} key="ogtitle"/>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {home ? (
        <>
          <NavBar />
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
          <p>© 2020 <b>Adela Chung</b> All rights reserved.</p>
        </small>
      </footer>
    </div>
  )
}
