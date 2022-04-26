import Image from "next/image";

import Meta from "../components/meta";


const Error = () => {
    return (
        <>
            <Meta
                title="StepBroBD"
                description="StepBroBD"
            />
            <div className="bg-black min-h-screen h-screen flex justify-center items-center z-1">
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <Image
                        src={"/og/circular.png"}
                        width={256}
                        height={256}
                        quality={75}
                        alt="StepBroBD"
                        placeholder="blur"
                        blurDataURL="/og/circular.png"
                    />
                </div>
                <div className="relative w-full max-w-lg z-0">
                    <div
                        className="absolute top-8 left-8 w-[144rem] h-[144rem]
                                bg-red-500 rounded-full
                                mix-blend-multiply filter blur-xl opacity-70
                                animate-blob animation-delay-1000"/>
                    <div
                        className="absolute top-64 right-16 w-[128rem] h-[128rem]
                                bg-yellow-500 rounded-full
                                mix-blend-multiply filter blur-xl opacity-70
                                animate-blob animation-delay-3000"/>
                    <div
                        className="absolute bottom-32 -left-[24rem] w-[48rem] h-[48rem]
                                bg-blue-700 rounded-full
                                mix-blend-multiply filter blur-xl opacity-70
                                animate-blob animation-delay-5000"/>
                    <div
                        className="absolute -bottom-96 -left-[64rem] w-[72rem] h-[72rem]
                                bg-pink-300 rounded-full
                                mix-blend-multiply filter blur-xl opacity-70
                                animate-blob animation-delay-7000"/>
                    <div
                        className="absolute bottom-64 -left-[-24rem] w-[96rem] h-[96rem]
                                bg-purple-700 rounded-full
                                mix-blend-multiply filter blur-xl opacity-70
                                animate-blob animation-delay-9000"/>
                </div>
            </div>
        </>
    );
};

export default Error;
