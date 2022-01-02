import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedEssaysData } from '../lib/essays'


export default function PostPage({ allEssaysData }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allEssaysData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
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