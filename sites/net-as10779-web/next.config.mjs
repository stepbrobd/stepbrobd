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

  trailingSlash: false,

  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },

  async redirects() {
    return [
      {
        permanent: true,
        source: "/about",
        destination: "/#about",
      },
      {
        permanent: true,
        source: "/peering",
        destination: "/#peering",
      },
      {
        permanent: true,
        source: "/transparency",
        destination: "/#transparency",
      },
      {
        permanent: true,
        source: "/geolocation",
        destination: "/#geolocation",
      },
      {
        permanent: true,
        source: "/contact",
        destination: "/#contact",
      },
    ];
  },
};

export default withNextra(nextConfig);
