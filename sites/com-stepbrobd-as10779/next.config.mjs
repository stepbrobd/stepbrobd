import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  readingTime: true,
  defaultShowCopyCode: true,
  latex: true,
  flexsearch: {
    codeblocks: true,
  },
});

const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};

export default withNextra(nextConfig);
