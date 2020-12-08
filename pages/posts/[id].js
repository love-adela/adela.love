import Date from '../../components/date'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>adela.love | {postData.title}</title>
        <meta name="og:title" content={postData.title} key="ogtitle"/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content={postData.subtitle} />
      </Head>
      <article>
        <div className={utilStyles.header}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <small className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </small>
        </div>
        <div className={utilStyles.markdownText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
