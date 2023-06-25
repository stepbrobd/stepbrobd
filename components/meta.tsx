import { Head } from "$fresh/runtime.ts";

const Meta = ({
  title = "StepBroBD Inc.",
  description = "Welcome to StepBroBD Inc. official website. Need to get in touch? Checkout our website, or our social media.",
  image = "https://stepbrobd.com/assets/circular.png",
  url = "https://stepbrobd.com",
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) => {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="twitter:card" content="summary_large_image" />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      <meta property="og:image" content={image} />
      <meta property="twitter:image" content={image} />

      <meta property="og:url" content={url} />
    </Head>
  );
};

export default Meta;
