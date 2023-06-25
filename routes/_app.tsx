import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                function global_dark(change) {
                    if (change === 'auto') delete localStorage.theme; else if (change === 'on') localStorage.theme = 'dark'; else if (change === 'off') localStorage.theme = 'light';
                    window.isDark = localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
                    document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
                }
                global_dark();
            `,
          }}
        />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-icon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/favicons/apple-icon-precomposed.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/favicons/android-icon-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/favicons/android-icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/android-icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/favicons/android-icon-144x144.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
      </Head>
      <body class="bg-white text-black dark:bg-black dark:text-white">
        <main>
          <Component />
        </main>
      </body>
      <script
        defer
        data-domain="stepbrobd.com"
        src="https://plausible.io/js/script.js"
      />
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("321254199");
          `,
        }}
      />
    </html>
  );
}
