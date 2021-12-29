const withMDX = require("@next/mdx")()

module.exports = withMDX({
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'mdx'],
    images: {
        domains: ["static.stepbrobd.com"],
    },
})
