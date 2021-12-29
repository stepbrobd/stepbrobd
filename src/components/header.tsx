import Link from "next/link"
import Image from "next/image"

const header = {
    links: [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Blog",
            href: "/blog",
        },
    ],
}

const Header = () => {
    return (
        <header className="sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-50 border-neutral-800 border-b-[1px]">
            <nav className="max-w-7xl mx-auto px-6">
                <div
                    className="w-full py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/">
                            <a>
                                <span className="sr-only">StepBroBD</span>
                                <span className="container flex justify-center items-center h-10 w-auto">
                                    <Image
                                        src="https://static.stepbrobd.com/og/circular.png"
                                        height={30}
                                        width={30}
                                        loading="eager"
                                        alt="StepBroBD"
                                    />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="space-x-4">
                        {
                            header.links.map((link) => (
                                link.href.startsWith("https://")
                                    ? <Link
                                        key={link.name}
                                        href={link.href}
                                    >
                                        <a
                                            className="font-medium"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {link.name}&#x2197;
                                        </a>
                                    </Link>
                                    : <Link
                                        key={link.name}
                                        href={link.href}
                                    >
                                        <a
                                            className="font-medium"
                                        >
                                            {link.name}
                                        </a>
                                    </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export {Header}
