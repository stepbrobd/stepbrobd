import Footer from "components/footer";
import Logo from "components/logo";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "system",
  },

  navigation: false,

  search: {
    placeholder: () => {
      const placeholders = [
        "Need a hint?",
        "Meaning of life?",
        "Needle in a haystack?",
        "What's the secret word?",
        "What's your quest today?",
        "Looking for buried treasure?",
        "Witch way to the information?",
      ];
      return placeholders[new Date().getDay() % placeholders.length];
    },
  },

  sidebar: {
    autoCollapse: true,
    toggleButton: true,
    defaultMenuCollapseLevel: 3,
  },

  toc: {
    float: true,
  },

  feedback: {
    content: () => <></>,
  },

  editLink: {
    component: () => <></>,
  },

  logo: <Logo />,
  logoLink: "/",

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Yifei Sun",
    };
  },

  head: function useHead() {
    const { frontMatter } = useConfig();
    const { asPath, defaultLocale, locale } = useRouter();

    const title = `${frontMatter.title} - Yifei Sun` || "Yifei Sun";
    const url =
      "https://ysun.co" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const description =
      frontMatter.description ||
      "Yifei Sun is a graduate student at Northeastern University studying computer science. His research interests are 1. Formal verification for distributed systems and database systems. 2. Programming language and concurrent data structure related formal verification and fuzz testing. 3. IMU data feature extraction and machine learning for robotic systems and healthcare applications.";

    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />

        <meta property="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />

        <meta
          property="og:image"
          content={`https://ysun.co/api/og?text=${frontMatter.title.replaceAll(
            " ",
            "%20",
          )}`}
        />
        <meta
          property="twitter:image"
          content={`https://ysun.co/api/og?text=${frontMatter.title.replaceAll(
            " ",
            "%20",
          )}`}
        />
      </>
    );
  },

  footer: {
    text: <Footer />,
  },
};

export default config;
