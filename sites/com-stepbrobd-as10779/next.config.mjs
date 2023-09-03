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

    async redirects() {
        return [
            // page redirects
            {
                permanent: true,
                source: "/notes/:path*",
                destination: "/note/:path*",
            },
            {
                permanent: true,
                source: "/publications/:path*",
                destination: "/publication/:path*",
            },
            {
                permanent: true,
                source: "/writings/:path*",
                destination: "/writing/:path*",
            },

            // social redirects
            {
                permanent: true,
                source: "/github/:path*",
                destination: "https://github.com/stepbrobd",
            },
            {
                permanent: true,
                source: "/instagram/:path*",
                destination: "https://www.instagram.com/stepbrobd",
            },
            {
                permanent: true,
                source: "/linkedin/:path*",
                destination: "https://www.linkedin.com/in/yifei-s",
            },
            {
                permanent: true,
                source: "/threads/:path*",
                destination: "https://threads.net/@stepbrobd",
            },
            {
                permanent: true,
                source: "/twitter/:path*",
                destination: "https://twitter.com/stepbrobd",
            },
            {
                permanent: true,
                source: "/x/:path*",
                destination: "https://x.com/stepbrobd",
            },
            {
                permanent: true,
                source: "/youtube/:path*",
                destination: "https://www.youtube.com/@stepbrobd",
            },
        ];
    },

    async rewrites() {
        return [
            // obsidian publish
            {
                source: "/note/:path*",
                destination:
                    "https://publish.obsidian.md/serve?url=ysun.co/note/:path*",
            },
        ];
    },
};

export default withNextra(nextConfig);
