import {Layout, Meta} from "../components/components"

import MDXComponent from "../mdx/index.mdx"

const Index = () => {
    return (
        <>
            <Meta title="Home | StepBroBD" description="StepBroBD homepage."/>
            <Layout>
                <MDXComponent/>
            </Layout>
        </>
    )
}

export default Index
