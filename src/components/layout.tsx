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
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout
