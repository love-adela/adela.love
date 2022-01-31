import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import Head from 'next/head'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.article}>
        <div className={utilStyles.articleInfo}>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={`${utilStyles.lightText} ${utilStyles.postDate}`}>
            <Date dateString={postData.date} />
          </div>
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
            postData,
        },
    }
}
