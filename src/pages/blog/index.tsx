import {useRouter} from "next/router"

import Link from "next/link"

import {generateTitle, getAllValidPaths} from "lib/parser"

import {Layout, Meta} from "components"

type Props = {
    slugs: string[]
}

const components = {}

export const getStaticProps = async () => {
    const slugs = await getAllValidPaths("/blog")
    return {
        props: {
            slugs
        }
    }
}

const Blog = ({slugs}: Props) => {
    const router = useRouter()
    return (
        <>
            {router.isFallback
                ? (
                    <>
                        <Meta title="Loading..." description="Loading..."/>
                        <Layout>
                            Loading...
                        </Layout>
                    </>
                )
                : (
                    <>
                        <Meta title="Blog - StepBroBD" description="StepBroBD blog posts."/>
                        <Layout>
                            <ul>
                                {slugs.map((slug) => (
                                    <li key={slug}>
                                        <Link
                                            href={"/blog/" + slug}
                                        >
                                            <a>{generateTitle(slug)}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export default Blog
