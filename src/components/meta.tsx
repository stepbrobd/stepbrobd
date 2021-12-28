import Head from "next/head"

type Props = {
    title: string
    description: string
}

const Meta = ({title, description}: Props) => {
    return (
        <Head>
            <link rel="shortcut icon" type="image/x-icon" href="https://static.stepbrobd.com/favicons/favicon.ico"/>
            <link rel="icon" type="image/png" sizes="16x16" href="https://static.stepbrobd.com/favicons/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="https://static.stepbrobd.com/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="https://static.stepbrobd.com/favicons/favicon-96x96.png"/>

            <link rel="apple-touch-icon" type="image/png" href="https://static.stepbrobd.com/favicons/apple-icon.png"/>
            <link rel="apple-touch-icon" sizes="57x57" href="https://static.stepbrobd.com/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="https://static.stepbrobd.com/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="https://static.stepbrobd.com/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="https://static.stepbrobd.com/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="https://static.stepbrobd.com/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="https://static.stepbrobd.com/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="https://static.stepbrobd.com/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="https://static.stepbrobd.com/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="https://static.stepbrobd.com/favicons/apple-icon-180x180.png"/>
            <link rel="apple-touch-icon" type="image/png" href="https://static.stepbrobd.com/favicons/apple-icon-precomposed.png"/>

            <link rel="icon" type="image/png" sizes="36x36" href="https://static.stepbrobd.com/favicons/android-icon-36x36.png"/>
            <link rel="icon" type="image/png" sizes="48x48" href="https://static.stepbrobd.com/favicons/android-icon-48x48.png"/>
            <link rel="icon" type="image/png" sizes="72x72" href="https://static.stepbrobd.com/favicons/android-icon-72x72.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="https://static.stepbrobd.com/favicons/android-icon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="144x144" href="https://static.stepbrobd.com/favicons/android-icon-144x144.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="https://static.stepbrobd.com/favicons/android-icon-192x192.png"/>

            <meta name="msapplication-TileColor" content="#000000"/>
            <meta name="msapplication-config" content="https://static.stepbrobd.com/favicons/browserconfig.xml"/>
            <meta name="msapplication-TileImage" content="https://static.stepbrobd.com/favicons/ms-icon-144x144.png"/>

            <link rel="manifest" href="https://static.stepbrobd.com/favicons/manifest.json"/>

            <meta name="theme-color" content="#000000"/>

            <meta property="og:image" content="https://static.stepbrobd.com/og/banner.png"/>

            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
    )
}

export {Meta};
