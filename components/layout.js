import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'adela.love'
export const siteTitle = 'adela.love'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <nav className={utilStyles.headerNavbar}>
              <div className={utilStyles.headerLogo}>
                <a>
                  <img src="/images/profile.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} alt={name}/>
                  <h1 className={utilStyles.headerHomeName}>{name}</h1>
                </a>
              </div>
              <Link href="/about">
                <div className={utilStyles.headerHomeAbout}>
                  <a><h2>About</h2></a>
                </div>
              </Link>
            </nav>
          </>
        ) : (
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
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <small>
          made with
          <a href="https://nextjs.org/"> Next.js </a>
          + 
          <a href="#"> Vercel </a>
          + 
          <a href="#"> source code</a>
          <p>© 2020 <b>Adela Chung</b> All rights reserved.</p>
        </small>
      </footer>
    </div>
  )
}
