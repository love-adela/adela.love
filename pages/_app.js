import '../styles/global.css'
import '../styles/reset.css'
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      {/* favicon */}
      <Head>
        <title>adela.love</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;