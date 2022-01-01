import {useRouter} from "next/router"

import {MDXRemote as Content} from "next-mdx-remote"
import {serialize} from "next-mdx-remote/serialize"
import {readMDXFileContent} from "lib/parser"

import {Layout, MDX, Meta} from "components"

type Props = {
    mdxSource: string
}

const components = {}

export const getStaticProps = async () => {
    const mdxContent = await readMDXFileContent("/", "index")
    const mdxSource = await serialize(mdxContent)
    return {
        props: {
            mdxSource
        }
    }
}

const Index = ({mdxSource}: Props) => {
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
                        <Meta title="StepBroBD" description="StepBroBD homepage."/>
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

export default Index
