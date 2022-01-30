import { Fragment } from 'react'
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      // isProduction,
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {(
            <Fragment>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}