import "com-stepbrobd-tailwind/tailwind.css";
import "com-stepbrobd-ui/tailwind.css";
import "app/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import { Providers } from "app/providers";
import Footer from "components/footer";
import Header from "components/header";
import Progress from "components/progress";
import { Metadata } from "next";
import { Inter, JetBrains_Mono, Tinos } from "next/font/google";
import Script from "next/script";

const serif = Tinos({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-tinos",
  display: "swap",
});
const sans = Inter({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const metadata: Metadata = {
  title: {
    default: "StepBroBD, Inc.",
    template: "%s | StepBroBD, Inc.",
  },
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicons/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicons/favicon-96x96.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      url: "/favicons/apple-icon.png",
    },
    {
      rel: "apple-touch-icon-precomposed",
      type: "image/png",
      url: "/favicons/apple-icon-precomposed.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "57x57",
      url: "/favicons/apple-icon-57x57.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "60x60",
      url: "/favicons/apple-icon-60x60.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "72x72",
      url: "/favicons/apple-icon-72x72.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "76x76",
      url: "/favicons/apple-icon-76x76.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "114x114",
      url: "/favicons/apple-icon-114x114.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "120x120",
      url: "/favicons/apple-icon-120x120.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "144x144",
      url: "/favicons/apple-icon-144x144.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "152x152",
      url: "/favicons/apple-icon-152x152.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/favicons/apple-icon-180x180.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "36x36",
      url: "/favicons/android-icon-36x36.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "48x48",
      url: "/favicons/android-icon-48x48.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "72x72",
      url: "/favicons/android-icon-72x72.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicons/android-icon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "144x144",
      url: "/favicons/android-icon-144x144.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicons/android-icon-192x192.png",
    },
  ],
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      suppressHydrationWarning
      lang="en-US"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="flex min-h-screen flex-col border-neutral-200 bg-white text-neutral-800 selection:bg-[#aaffec] dark:border-neutral-800 dark:bg-black dark:text-neutral-200 dark:selection:bg-[#f81ce5]">
        <Providers>
          <Progress />
          <Header />
          <main className="flex grow flex-col" aria-label="Content">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
        <Script
          defer
          data-domain="stepbrobd.com"
          id="plausible-analytics"
          src="https://plausible.io/js/script.js"
        />
        <Script
          defer
          id="heap-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("321254199");
          `,
          }}
        />
      </body>
    </html>
  );
};

export { metadata };
export default Layout;
