import {FunctionComponent, ReactNode} from "react"

import Header from "./header";
import Footer from "./footer";

type Props = {
    children?: ReactNode
}

const Container: FunctionComponent = ({children}: Props) => {
    return (
        <>
            <Header/>
            <div className="container mx-auto md:container md:mx-auto">{children}</div>
            <Footer/>
        </>
    )
}

export default Container
