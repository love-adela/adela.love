import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedEssaysData } from '../lib/essays'


export default function PostPage({ allEssaysData }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.list}>
          {allEssaysData.map(({ id, date, title }) => (
            <Link href={`/essays/${id}`}>
            <a>
              <div className={utilStyles.listItem} key={id}>
                {title}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              </div>
            </a>
          </Link>
          ))}
        </div>
      </section>
  </Layout>
  )
}

export async function getStaticProps() {
  const allEssaysData = getSortedEssaysData()
  return {
    props: {
        allEssaysData
    }
  }
}