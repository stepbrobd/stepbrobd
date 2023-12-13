import createMDX from "@next/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkMath, {}]],
    rehypePlugins: [
      [rehypeKatex, {}],
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark-dimmed",
          },
        },
      ],
    ],
  },
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    sri: {
      algorithm: "sha256",
    },
    typedRoutes: true,
  },

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
};

export default withMDX(nextConfig);
