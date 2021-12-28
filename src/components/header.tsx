import {FunctionComponent} from "react"

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

const Header: FunctionComponent = () => {
    return (
        <header className="border-neutral-800 border-b-[1px]">
            <nav className="max-w-7xl mx-auto px-6">
                <div
                    className="w-full py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">StepBroBD</span>
                            <img
                                className="h-10 w-auto"
                                src="https://static.stepbrobd.com/og/circular.png"
                                alt="StepBroBD"
                            />
                        </a>
                    </div>
                    <div className="space-x-4">
                        {
                            header.links.map((link) => (
                                link.href.startsWith("https://")
                                    ? <a key={link.name}
                                         href={link.href}
                                         className="font-medium"
                                         target="_blank"
                                         rel="noreferrer"
                                    >
                                        {link.name}&#x2197;
                                    </a>
                                    : <a
                                        key={link.name}
                                        href={link.href}
                                        className="font-medium"
                                    >
                                        {link.name}
                                    </a>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export {Header}
