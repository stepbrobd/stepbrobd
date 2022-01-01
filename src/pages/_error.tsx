import type {NextPageContext} from "next"

import Image from "next/image"

import {Layout, Meta} from "components"

type Props = {
    statusCode?: number
}

const Error = ({statusCode}: Props) => {
    return (
        <>
            <Meta title={statusCode + " | StepBroBD"} description={"An error with status " + statusCode + " occurred."}/>
            <Layout>
                <div className="not-prose flex flex-col justify-center items-center">
                    <h1 className="font-black text-3xl pt-8 pb-4">Oops...</h1>
                    <Image src={"https://static.stepbrobd.com/status/" + statusCode + ".jpg"}
                           width={750}
                           height={600}
                           alt={"Error" + statusCode}
                    />
                </div>
            </Layout>
        </>
    );
}

Error.getInitialProps = ({res, err}: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
};

export default Error
