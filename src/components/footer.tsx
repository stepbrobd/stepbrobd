import Image from "next/image"
import Link from "next/link"

import {FunctionComponent} from "react"

const Footer: FunctionComponent = () => {
    return (
        <footer className="border-neutral-800 border-y-[1px]">
            <div className="container flex flex-row items-center mx-auto pt-5 pb-4 sm:px-5 px-0">
                <div
                    className="container flex flex-col sm:flex-row sm:items-center items-start sm:pl-0 pl-5 sm:py-[2px]"> {/* footer - left side */}
                    <span
                        className="flex inline-flex justify-center items-center sm:pt-[6px] pt-0">
                        <Link href="/">
                            <a className="sm:mr-3 mr-2">
                                <Image src="/favicons/favicon-96x96.png" width={24} height={24} alt="StepBroBD"/>
                            </a>
                        </Link>
                        <Link href="https://opensea.io/StepBroBD">
                            <a className="mr-3" target="_blank">
                                <Image src="/ethereum.png" width={24} height={24} alt="StepBroBD"/>
                            </a>
                        </Link>
                    </span>
                    <span
                        className="flex inline-flex justify-center items-center border-neutral-800 sm:pl-5 sm:border-l-[1px] sm:py-2 pt-3">
                        <Link href="https://github.com/StepBroBD">
                            <a className="mr-3" target="_blank">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                        </a>
                        </Link>
                        <Link href="https://twitter.com/StepBroBD">
                            <a className="mr-3" target="_blank">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                            </a>
                        </Link>
                        <Link href="https://www.reddit.com/user/StepBroBD">
                            <a className="mr-3" target="_blank">
                                <svg fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 11.889c0-.729-.596-1.323-1.329-1.323-.358 0-.681.143-.92.373-.905-.595-2.13-.975-3.485-1.023l.742-2.334 2.008.471-.003.029c0 .596.487 1.082 1.087 1.082.599 0 1.086-.485 1.086-1.082s-.488-1.082-1.087-1.082c-.46 0-.852.287-1.01.69l-2.164-.507c-.094-.023-.191.032-.22.124l-.827 2.603c-1.419.017-2.705.399-3.65 1.012-.237-.219-.552-.356-.9-.356-.732.001-1.328.594-1.328 1.323 0 .485.267.905.659 1.136-.026.141-.043.283-.043.429-.001 1.955 2.404 3.546 5.359 3.546 2.956 0 5.36-1.591 5.36-3.546 0-.137-.015-.272-.038-.405.416-.224.703-.657.703-1.16zm-8.612.908c0-.434.355-.788.791-.788.436 0 .79.353.79.788 0 .434-.355.787-.79.787-.436.001-.791-.352-.791-.787zm4.53 2.335c-.398.396-1.024.589-1.912.589l-.007-.001-.007.001c-.888 0-1.514-.193-1.912-.589-.073-.072-.073-.19 0-.262.072-.072.191-.072.263 0 .325.323.864.481 1.649.481l.007.001.007-.001c.784 0 1.324-.157 1.649-.481.073-.072.19-.072.263 0 .073.072.073.19 0 .262zm-.094-1.547c-.436 0-.79-.353-.79-.787 0-.434.355-.788.79-.788.436 0 .79.353.79.788 0 .434-.354.787-.79.787z"/>                        </svg>
                            </a>
                        </Link>
                        <Link href="https://discordapp.com/users/664337668842192899">
                            <a className="mr-3" target="_blank">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                     strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/>
                                </svg>
                            </a>
                        </Link>
                    </span>
                </div>
                <div
                    className="container flex flex-col sm:flex-row sm:items-center items-end justify-end sm:pr-0 pr-5 border-neutral-800 border-l-[1px] whitespace-nowrap"> {/* footer - right side */}
                    <Link href="mailto:Hi@StepBroBD.com?subject=Hi!">
                        <a className="text-m sm:ml-3 sm:pl-3">
                            <span>Hi@StepBroBD.com</span>
                        </a>
                    </Link>
                    <div className="text-m sm:ml-5 sm:pl-5 border-neutral-800 sm:border-l-[1px] sm:py-2 pt-[14px]">
                        <Link
                            href="https://opensea.io/assets/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/42303080142962679593185109697494649809117032969304814184272812681325690219089">
                            <a target="_blank">&copy; Nov. 30, 2056 A.D.</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
