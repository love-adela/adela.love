import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function PostPage({ allPostsData }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, description }) => (
              <Link href={`/posts/${id}`}>
                <a>
                  <div className={utilStyles.listItem} key={id}>
                    {title}
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  {description}
                  </div>
                  <br />
                </a>
              </Link>
            ))}
          </div>
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