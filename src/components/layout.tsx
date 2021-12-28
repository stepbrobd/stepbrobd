import type {ReactNode} from "react"

import {Footer, Header} from "./components"

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            <div className="selection:bg-yellow-400 selection:text-black">
                <main className="px-6 py-6">
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}

export {Layout}
