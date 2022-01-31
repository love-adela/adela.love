import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import Head from 'next/head'

export default function Post({ postData }) {
  const license = 
  `
  <a class="license-url" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
    <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" />
  </a>
  <br />
  <p>This work is licensed under a</p>
  <a class="license-url" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.
  `
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
        <div className={utilStyles.markdownTextLicense} dangerouslySetInnerHTML={{ __html: license }} />
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
