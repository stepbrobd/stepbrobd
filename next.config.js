const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withMDX = require("@next/mdx")()

module.exports = withPWA(withMDX({
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "mdx"],
    images: {
        domains: ["static.stepbrobd.com"],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    },
}))
