import Head from "next/head"
import Image from "next/image"

import {Layout} from "../components/components"

const Index = () => {
    return (
        <Layout>
            <Head>
                <title>StepBroBD</title>
            </Head>
            <div className="flex justify-center items-center">
                <Image src="https://static.stepbrobd.com/status/501.jpg" width={750} height={600}
                       alt="501 Not Implemented"/>
            </div>
        </Layout>
    )
}

export default Index
