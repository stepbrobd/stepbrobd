import {Head, Html, Main, NextScript} from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="light-mode-background-color dark:dark-mode-background-color transition-all duration-150 selection:bg-[#f81ce5]">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
};

export default Document;
