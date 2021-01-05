import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="title" value="hello" />
                </Head>

                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
