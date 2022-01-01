import fs from "fs"
import path from "path"

import {Layout, Meta} from "../../components"

import MDXComponent from "../../mdx/blog/index.mdx"

export const getStaticPaths = async () => {
    const postFileNames = fs.readdirSync(path.join(process.cwd(), "src/mdx/blog"))
    return {
        paths: postFileNames.map((postFileName) => ({
            slug: postFileName.replace(/\.mdx/, '')
        })),
        fallback: false
    }
}

export const getStaticProps = async () => {

}

const Blog = () => {
    console.log(fs.readdirSync(path.join(process.cwd(), "src/mdx/blog", "")))
    return (
        <>
            <Meta title="Blog | StepBroBD" description="StepBroBD blog."/>
            <Layout>
                <MDXComponent/>
            </Layout>
        </>
    )
}

export default Blog
