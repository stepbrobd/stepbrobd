import type {ReactNode} from "react"

import Head from "next/head"

import {Footer, Header, Meta} from "./components"

type Props = {
    title: string
    description: string
    children?: ReactNode
}

const Layout = ({title, description, children}: Props) => {
    return (
        <>
            <Meta/>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Head>
            <div className="selection:bg-yellow-400 selection:text-black">
                <Header/>
                <main className="px-6 py-6">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}

export {Layout}
