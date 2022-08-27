import "../styles/tailwind.css";

import {useEffect} from "react";

import {AppProps} from "next/app";
import {useRouter} from "next/router";
import Script from "next/script";

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
            <Script
                strategy="afterInteractive"
                data-domain="stepbrobd.com"
                src={"https://plausible.io/js/plausible.js"}
            />
            <Script
                strategy="afterInteractive"
                src={"https://rum-static.pingdom.net/pa-6309bc040d7ce500110011d8.js"}
            />
            <Component {...pageProps} />
        </>
    );
};

export default App;
