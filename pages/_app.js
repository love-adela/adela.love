import '../styles/global.css'
import '../styles/reset.css'
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      {/* favicon */}
      <Head>
        <link rel="favicon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;