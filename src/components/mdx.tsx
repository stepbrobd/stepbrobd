import type {ReactNode} from "react"

type Props = {
    children?: ReactNode
}

const MDX = ({children}: Props) => {
    return (
        <article className="
        container
        prose prose-invert
        prose-h1:font-black
        prose-pre:bg-neutral-900
        "
        >
            {children}
        </article>
    )
}

export {MDX}
