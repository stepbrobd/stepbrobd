import "../styles/tailwind.css";

import {useEffect} from "react";

import {AppProps} from "next/app";
import {useRouter} from "next/router";
import Script from "next/script";

import {ThemeProvider} from "next-themes";
import NextNProgress from "nextjs-progressbar";

import * as gtag from "../utils/gtag";

const App = ({Component, pageProps}: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        router.events.on("hashChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
            router.events.off("hashChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "${gtag.GA_TRACKING_ID}", {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <ThemeProvider attribute="class" defaultTheme="dark">
                <NextNProgress
                    color="#f81ce5"
                    height={2}
                    nonce=""
                    startPosition={0.1}
                    stopDelayMs={250}
                    showOnShallow={true}
                    options={{showSpinner: false, easing: "ease", speed: 250}}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
