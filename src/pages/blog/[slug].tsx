import fs from "fs"
import path from "path"

import {useRouter} from "next/router"

import {remark} from "remark"
import html from "remark-html"

import {Layout, MDX, Meta} from "components"

type Props = {
    content: string
}

type Params = {
    params: {
        slug: string
    }
}

export const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export const getStaticPaths = async () => {
    const items = fs.readdirSync(path.join(process.cwd(), "src/mdx", "/blog")).map(item => {
        if (item.includes(".mdx")) {
            if (item === "index.mdx")
                return "/"
            return item.replace(".mdx", "")
        }
    }).filter(item => !!item)
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
    const mdxContent = fs.readFileSync(path.join(process.cwd(), "src/mdx", "/blog", params.slug + ".mdx"), "utf-8")
    const htmlContent = await markdownToHtml(mdxContent || '')
    return {
        props: {
            content: htmlContent,
        },
    }
}

const Blog = ({content}: Props) => {
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
                                <div className="container" dangerouslySetInnerHTML={{__html: (content)}}/>
                            </MDX>
                        </Layout>
                    </>
                )
            }
        </>
    )
}

export default Blog
