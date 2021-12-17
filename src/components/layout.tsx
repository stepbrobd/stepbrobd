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
            <div className="container mx-auto md:container md:mx-auto">{children}</div>
            <Footer/>
        </>
    )
}

export default Layout
