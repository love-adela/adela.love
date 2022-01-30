import '../styles/global.css'
import '../styles/reset.css'
import Head from "next/head"
import React, { Fragment } from 'react'
import Router from 'next/router'

import * as gtag from '/lib/gtag'


// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

  export default ({ Component, pageProps }) => {
  return (
    <>
      {/* favicon */}
      <Head>
        <title>adela.love</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Fragment>
        <Component {...pageProps} />
      </Fragment>
    </>
  );
}