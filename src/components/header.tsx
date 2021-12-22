import Link from "next/link"

import {FunctionComponent} from "react"
import Image from "next/image";

const Header: FunctionComponent = () => {
    return (
        <header className="border-neutral-800 border-y-[1px]">
            <div className="container flex flex-row items-center mx-auto px-5 py-1.5">
                <div className="container flex-row items-start items-start">
                    <Link href="/">
                        <a className="font-bold tracking-tighter text-2xl underline decoration-dashed">
                            <span>StepBroBD</span>
                        </a>
                    </Link>
                </div>
                <div className="container flex flex-row items-end justify-end pt-[5px]">
                    <span
                        className="flex inline-flex justify-center items-center sm:pt-[6px] pt-[2px] sm:pb-[2px] pb-0">
                        <Link href="/">
                            <a className="mr-3">
                                <Image src="/favicons/favicon-96x96.png" width={22} height={22} alt="StepBroBD"/>
                            </a>
                        </Link>
                        <Link href="/gpg">
                            <a className="mr-2.5">
                                <Image src="/gpg.png" width={20} height={22} alt="StepBroBD"/>
                            </a>
                        </Link>
                        <Link href="https://www.npmjs.com/~stepbrobd">
                            <a className="mr-3.5 invert-[0.7]" target="_blank">
                                <Image src="/npm.png" width={20} height={22} alt="StepBroBD"/>
                            </a>
                        </Link>
                        <Link href="https://opensea.io/StepBroBD">
                            <a target="_blank">
                                <Image src="/ethereum.png" width={17} height={20} alt="StepBroBD"/>
                            </a>
                        </Link>
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header
