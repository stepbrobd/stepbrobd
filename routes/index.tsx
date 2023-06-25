import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "$islands/counter.tsx";
import Meta from "$components/meta.tsx";
import Theme from "$islands/theme.tsx";

const Home = () => {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>StepBroBD Inc.</title>
      </Head>
      <Meta />
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/assets/circular.png"
          class="w-32 h-32"
          alt="StepBroBD Inc."
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter count={count} />
        <Theme prev="system" />
      </div>
    </>
  );
};

export default Home;
