import Image from "next/image";

import Meta from "../components/meta";

const Error = () => {
  return (
    <>
      <Meta title="StepBroBD" description="StepBroBD" />
      <div className="scale-50 transform">
        <div className="z-1 flex h-screen min-h-screen items-center justify-center">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
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
          <div
            className="absolute -top-[136rem] -left-[96rem] h-[144rem] w-[144rem]
                                animate-blob rounded-full
                                bg-blue-200 opacity-70 mix-blend-multiply blur-xl
                                filter"
          />
          <div className="relative z-0 w-full max-w-lg">
            <div
              className="animation-delay-1000 absolute top-8 left-8 h-[144rem]
                                w-[144rem] animate-blob
                                rounded-full bg-red-500 opacity-70 mix-blend-multiply
                                blur-xl filter"
            />
            <div
              className="animation-delay-3000 absolute top-[32rem] right-[48rem] h-[128rem]
                                w-[128rem] animate-blob
                                rounded-full bg-yellow-500 opacity-70 mix-blend-multiply
                                blur-xl filter"
            />
            <div
              className="animation-delay-5000 absolute bottom-32 -left-[24rem] h-[48rem]
                                w-[48rem] animate-blob
                                rounded-full bg-blue-700 opacity-70 mix-blend-multiply
                                blur-xl filter"
            />
            <div
              className="animation-delay-7000 absolute -bottom-96 -left-[64rem] h-[72rem]
                                w-[72rem] animate-blob
                                rounded-full bg-pink-500 opacity-70 mix-blend-multiply
                                blur-xl filter"
            />
            <div
              className="animation-delay-9000 absolute bottom-64 -left-[-24rem] h-[96rem]
                                w-[96rem] animate-blob
                                rounded-full bg-purple-700 opacity-70 mix-blend-multiply
                                blur-xl filter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
