import type {FunctionComponent, ReactNode} from "react"

import {Footer, Header, Meta} from "./components"

type Props = {
    children?: ReactNode
}

const Layout: FunctionComponent = ({children}: Props) => {
    return (
        <>
            <Meta/>
            <div className="selection:bg-red-900">
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
