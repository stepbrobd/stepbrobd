import { asset } from "$fresh/runtime.ts";
import Meta from "$components/meta.tsx";

const Error = ({
  status,
  description,
}: {
  status: number;
  description: string;
}) => {
  const text = [
    "This page is in another castle.",
    "On vacation, try again next year.",
    "This page took a leap into the unknown.",
    "The server is having a case of the Mondays.",
    "This page decided to explore the outer space.",
    "This page took the wrong turn at Albuquerque.",
    "Our server is in weekend mode, try again next Monday.",
  ];
  return (
    <>
      <Meta
        title={`${status} ${description} - StepBroBD Inc.`}
        description={`${status} ${description} - StepBroBD Inc.`}
      />
      <video
        src={asset("/assets/lightning.mp4")}
        autoPlay
        playsInline
        loop
        muted
        class="absolute top-0 object-fill w-full h-full min-w-full min-h-full -z-10"
      />
      <div class="flex items-center justify-center h-full px-16 text-center">
        <h1 class="text-6xl font-bold">
          {text[new Date().getDay() % text.length]}
        </h1>
      </div>
    </>
  );
};

export default Error;
