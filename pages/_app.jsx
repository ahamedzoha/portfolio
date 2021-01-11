import Head from "next/head"
import "../styles/globals.scss"
import Nav from "../modules/nav"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Azaz Ahamed Zoha's Website</title>
        <link
          rel="preload"
          href="/fonts/CascadiaMono/CascadiaMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/CascadiaMono/CascadiaMono-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
