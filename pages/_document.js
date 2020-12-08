import Document, { Html, Head, Main, NextScript } from 'next/document'
import { siteTitle } from '../components/layout'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="kr">
        <Head>
        <title>adela.love | {siteTitle}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument