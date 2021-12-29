import {Layout, Meta} from "../../components/components"

import MDXComponent from "../../mdx/blog/index.mdx"

const BlogIndex = () => {
    return (
        <>
            <Meta title="Blog | StepBroBD" description="StepBroBD blog."/>
            <Layout>
                <MDXComponent/>
            </Layout>
        </>
    )
}

export default BlogIndex
