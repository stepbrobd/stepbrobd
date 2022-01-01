const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx"],
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    images: {
        domains: ["static.stepbrobd.com"],
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
})
