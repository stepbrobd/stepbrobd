import Footer from "components/footer";
import Logo from "components/logo";
import { DocsThemeConfig } from "nextra-theme-docs";

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
  logoLink: false,

  useNextSeoProps() {
    return {
      titleTemplate: "AS10779 - StepBroBD, Inc.",
    };
  },

  head: function useHead() {
    const title = "AS10779 - StepBroBD, Inc.";
    const url = "https://as10779.net";
    const description =
      "AS10779, an autonomous system operated by StepBroBD, Inc. under ARIN. This page contains StepBroBD. Inc.'s policy about it's network, including peering, routing, and more.";

    return (
      <>
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
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={title} />
        <meta property="twitter:title" content={title} />
        <meta property="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content="https://as10779.net/assets/og.png" />
        <meta
          property="twitter:image"
          content="https://as10779.net/assets/og.png"
        />
      </>
    );
  },

  footer: {
    text: <Footer />,
  },
};

export default config;
