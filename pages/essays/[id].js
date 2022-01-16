import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getEssayData } from '../../lib/essays'
import Date from '../../components/date'
import Head from 'next/head'

export default function Essay({ essayData }) {
  return (
  <Layout>
      <Head>
        <title>{essayData.title}</title>
      </Head>
      <article className={utilStyles.article}>
        <div className={utilStyles.articleInfo}>
          <h1 className={utilStyles.headingXl}>{essayData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={essayData.date} />
          </div>
        </div>
        <div className={utilStyles.markdownText} dangerouslySetInnerHTML={{ __html: essayData.contentHtml }} />
      </article>
  </Layout>
  )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
     // Fetch necessary data for the blog post using params.id
    const essayData = await getEssayData(params.id)
    return {
        props: {
            essayData,
        },
    }
}