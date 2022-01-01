import type {AppProps} from "next/app"

import {useEffect} from "react"
import {useRouter} from "next/router"

import * as analytics from "lib/analytics"

import "styles/tailwind.css"

const App = ({Component, pageProps}: AppProps) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            analytics.pageView(url)
        };
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        };
    }, [router.events])
    return <Component {...pageProps} />
}

export default App
