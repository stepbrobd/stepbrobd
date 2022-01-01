import {useRouter} from "next/router"

import {MDXRemote as Content} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
import {getAllValidPaths, readMDXFileContent} from "lib/parser"

import {Layout, MDX, Meta} from "components"

type Props = {
    mdxSource: string
}

type Params = {
    params: {
        slug: string
    }
}

const components = {}

export const getStaticPaths = async () => {
    const items = await getAllValidPaths("/blog")
    return {
        paths: items.map(item => {
            return {
                params: {
                    slug: item
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async ({params}: Params) => {
    const mdxContent = await readMDXFileContent("/blog", params.slug)
    const mdxSource = await serialize(mdxContent)
    return {
        props: {
            mdxSource
        }
    }
}

const Blog = ({mdxSource}: Props) => {
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
                        <Meta title="Blog - StepBroBD" description="StepBroBD blog."/>
                        <Layout>
                            <MDX>
                                {
                                    /* @ts-ignore */
                                    <Content {...mdxSource} components={components}/>
                                }
                            </MDX>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export default Blog
