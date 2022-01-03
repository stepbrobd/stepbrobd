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
                            <div className="container prose prose-invert">
                                <div className="flex justify-start items-center">
                                    <div className="whitespace-nowrap inline text-3xl font-black">
                                        <h3 className="whitespace-nowrap inline font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">PO</h3>
                                        <h3 className="whitespace-nowrap inline font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">S</h3>
                                        <h3 className="whitespace-nowrap inline font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500">T</h3>
                                        <h3 className="whitespace-nowrap inline font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">S</h3>
                                    </div>
                                </div>
                                <ul className="not-prose list-disc">
                                    {slugs.map((slug) => (
                                        <li key={slug} className="text-xl pt-5">
                                            <Link
                                                href={"/blog/" + slug}
                                            >
                                                <a>{generateTitle(slug)}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export default Blog
