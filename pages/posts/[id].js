import Date from '../../components/date'
import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  const license = 
  `<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
    <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
  </a>
  <br />This work is licensed under <br/>a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.`

  return (
    <Layout>
      <Head>
        <title>adela.love | {postData.title}</title>
        {/* Open Graph */}
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
        <div className={utilStyles.copyrightText} dangerouslySetInnerHTML={{ __html: license }} />
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
