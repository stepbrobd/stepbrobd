import {Head, Html, Main, NextScript} from "next/document"

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="theme-color" content="#000000"/>
                <meta name="description" content="StepBroBD"/>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
                <meta property="og:image" content="/og.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document
