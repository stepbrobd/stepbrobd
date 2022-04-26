/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  pageExtensions: ["ts", "tsx", "mdx"]
};

module.exports = nextConfig;
