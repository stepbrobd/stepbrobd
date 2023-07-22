import { Heading, P } from "com-stepbrobd-ui";
import Image from "components/image";
import { Metadata } from "next";
import NotFoundImage from "public/assets/404.webp";

const metadata: Metadata = {
  title: "Not Found | StepBroBD Inc.",
  description:
    "The page you are looking for does not exist. Either we are performing site maintenance or you might have mistyped the URL.",
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

const NotFound = () => {
  return (
    <article className="max-w-3xl place-self-center px-8 py-8">
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        HTTP 404 - Not Found
      </p>
      <Heading.H1>Not Found</Heading.H1>
      <P>
        The page you are looking for does not exist. Either we are performing
        site maintenance or you might have mistyped the URL.
      </P>
      <Image
        src={NotFoundImage}
        alt='DALL·E: "HTTP 404 Not Found, depicted as a cute kitten hiding in a pile of newspapers, digital art."'
      />
    </article>
  );
};

export { metadata };
export default NotFound;
