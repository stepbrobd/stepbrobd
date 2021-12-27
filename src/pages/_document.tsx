import {Head, Html, Main, NextScript} from "next/document"

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://vitals.vercel-insights.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://static.stepbrobd.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document
