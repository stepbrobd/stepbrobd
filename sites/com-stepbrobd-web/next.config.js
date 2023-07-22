const withMDX = require("@next/mdx")();

/** @type {import("next").NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },

  experimental: {
    sri: {
      algorithm: "sha256",
    },
    typedRoutes: true,
    mdxRs: true,
  },
});
