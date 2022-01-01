import {Head, Html, Main, NextScript} from "next/document"

import {TrackingID} from "lib/analytics"

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://vitals.vercel-insights.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://static.stepbrobd.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
                {/* Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${TrackingID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag("js", new Date());
                            gtag("config", "${TrackingID}", {
                            page_path: window.location.pathname,
                            });
                        `
                    }}
                />
                {/* Google Analytics */}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default Document
