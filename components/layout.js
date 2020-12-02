import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './navbar'

const name = 'adela.love'
export const siteTitle = 'adela.love'

export default function Layout({ children, home }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Adela의 블로그"
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
          + 
          <a href="#"> Vercel </a>
          + 
          <a href="#"> source code ✨</a>
          <p>© 2020 <b>Adela Chung</b> All rights reserved.</p>
        </small>
      </footer>
    </div>
  )
}
