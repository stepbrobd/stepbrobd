import type {ReactNode} from "react"

import {Footer, Header} from "components"

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            <div className="flex justify-center items-center mx-auto my-5 px-6 py-6 selection:bg-yellow-300 selection:text-black">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export {Layout}
