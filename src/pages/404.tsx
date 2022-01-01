import Image from "next/image"

import {Layout, Meta} from "components"

const Error = () => {
    return (
        <>
            <Meta title="404 | StepBroBD" description="An error with status 404 occurred."/>
            <Layout>
                <div className="not-prose flex flex-col justify-center items-center">
                    <h1 className="font-black text-3xl pt-8 pb-4">It&#39;s your fault.</h1>
                    <Image
                        src={"https://static.stepbrobd.com/status/404.jpg"}
                        width={750}
                        height={600}
                        alt="Error 404"
                    />
                </div>
            </Layout>
        </>
    );
}

export default Error
