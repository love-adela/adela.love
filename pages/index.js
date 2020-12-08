import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
      <meta property="og:type" content="profile" />
      <meta property="og:description" content="Adela Chung, developer & writer" key="ogdesc" />
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, subtitle }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a><h2>{title}</h2></a>
              </Link>
              <Link href={`/posts/${id}`}>
                <a><h3>{subtitle}</h3></a>
              </Link>
              <Link href={`/posts/${id}`}>
                <a>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date}/>
                  </small>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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