import Date from '../components/Date'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getSortedEssaysData } from '../lib/essays'


export default function PostPage({ allEssaysData }) {
    return (
      <Layout>
        <Head>
          {/* <title>{siteTitle}</title> */}
        </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.list}>
          {allEssaysData.map(({ id, date, title, subtitle }) => (
            <Link href={`/essays/${id}`} key={id}>
              <a>
                <div className={utilStyles.listItem} key={id}>
                <h2 className={utilStyles.listItemTitle}>{title}</h2>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <div className={utilStyles.listItemSubtitle}>{subtitle}</div>
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
  const allEssaysData = getSortedEssaysData()
  return {
    props: {
      allEssaysData
    }
  }
}