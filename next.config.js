const { withSentryConfig } = require("@sentry/nextjs");

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  sentry: {
    hideSourceMaps: false,
    widenClientFileUpload: true,
    transpileClientSDK: true,
  },
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = withSentryConfig(nextConfig, { silent: true });
