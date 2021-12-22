import {FunctionComponent, ReactNode} from "react"

import Meta from "./meta"
import Header from "./header"
import Footer from "./footer"

type Props = {
    children?: ReactNode
}

const Layout: FunctionComponent = ({children}: Props) => {
    return (
        <>
            <Meta/>
            <div className="selection:bg-yellow-500">
                <Header/>
                <main className="px-5 py-10 px-20">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout
