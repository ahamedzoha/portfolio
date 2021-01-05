import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Azaz Ahamed Zoha's Website</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
