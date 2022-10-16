import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="preconnect" href="https://cdn.heapanalytics.com" />

        <Script
          defer
          id="plausible-analytics"
          strategy="afterInteractive"
          data-domain="stepbrobd.com"
          src={"https://plausible.io/js/plausible.js"}
        />
        <Script defer id="heap-analytics" strategy="afterInteractive">{`
            window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("321254199");
          `}</Script>
      </Head>
      <body lang="en-US">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
