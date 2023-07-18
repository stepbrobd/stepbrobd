import Theme from "components/theme";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "StepBroBD Inc.",
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

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Theme />
    </div>
  );
};

export { metadata };
export default Page;
