import Date from '../components/Date'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export default function PostPage({ allPostsData }) {
    return (
      <Layout>
        <Head>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, subtitle }) => (
              <Link href={`/posts/${id}`} key={id}>
                <a>
                  <div className={utilStyles.listItem} key={id}>
                    <h2 className={utilStyles.listItemTitle}>{title}</h2>
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                    <h3 className={utilStyles.listItemSubtitle}>{subtitle}</h3>
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