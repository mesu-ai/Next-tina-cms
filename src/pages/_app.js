// import '@/styles/globals.css'

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return 
  
  <>
    <Head>
      <title>My Website Title</title>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
    </Head>
    <p>Welcome to my website!</p>

    <Component {...pageProps} />
  </>
}
