import Layout from '../../components/layout'
import { getAllPostIds, getEssayData } from '../../lib/essays'

export default function Essay({ essayData }) {
  return (
  <Layout>
      {essayData.title}
      <br />
      {essayData.id}
      <br />
      {essayData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: essayData.contentHtml }} />
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