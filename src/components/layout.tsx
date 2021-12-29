import type {ReactNode} from "react"

import {Footer, Header} from "./components"

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            <div className="mx-auto my-5 selection:bg-yellow-300 selection:text-black">
                <main className="mx-auto px-6 py-6
                prose prose-invert
                prose-h1:font-black
                prose-pre:bg-neutral-900"
                >
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}

export {Layout}
