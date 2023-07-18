import "com-stepbrobd-tailwind/tailwind.css";
import "com-stepbrobd-ui/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import { Providers } from "app/providers";
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

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      suppressHydrationWarning
      lang="en-US"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
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

export default Layout;
