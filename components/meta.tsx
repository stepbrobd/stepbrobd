import { Head } from "$fresh/runtime.ts";

const Meta = ({
  title,
  description,
  image,
  url,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  const defaultTitle = "StepBroBD Inc.";
  const defaultDescription =
    "Welcome to StepBroBD Inc. official website. Need to get in touch? Checkout our website, or our social media.";
  const defaultImage = "https://stepbrobd.com/assets/og.webp"; // open graph image must have absolute url
  const defaultUrl = "https://stepbrobd.com";

  const tit = title?.includes("StepBroBD Inc.") || !title
    ? title
    : `${title} - StepBroBD Inc.`;

  const img = image?.startsWith("http") || !image
    ? image
    : `https://stepbrobd.com${image}`;

  return (
    <Head>
      <title>{tit || defaultTitle}</title>
      <meta property="og:title" content={tit || defaultTitle} />
      <meta property="twitter:title" content={tit || defaultTitle} />

      <meta name="description" content={description || defaultDescription} />
      <meta
        property="description"
        content={description || defaultDescription}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />

      <meta property="og:image" content={img || defaultImage} />
      <meta property="twitter:image" content={img || defaultImage} />

      <meta property="og:url" content={url || defaultUrl} />
    </Head>
  );
};

export default Meta;
