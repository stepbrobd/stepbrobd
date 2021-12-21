import Link from "next/link"

import {FunctionComponent} from "react"

const Header: FunctionComponent = () => {
    return (
        <header className="border-b-2 border-neutral-700">
            <div className="container flex flex-row justify-center items-center mx-auto px-3 py-3">
                <Link href="/">
                    <a className="text-3xl">
                        <span>StepBroBD</span>
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header
