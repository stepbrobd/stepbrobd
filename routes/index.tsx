import Meta from "$components/meta.tsx";
const Home = () => {
  return (
    <>
      <Meta />
      <div class="w-full h-screen">
        <img
          class="absolute inset-0 z-10 w-32 h-32 rounded-full mx-auto my-auto"
          src="/assets/stepbrobd.gif"
          alt="StepBroBD Inc."
        />
        <img
          class="absolute inset-0 top-0 left-0 -z-50 object-cover w-full h-full"
          src="/assets/bg.gif"
          alt="StepBroBD Inc."
        />
      </div>
    </>
  );
};

export default Home;
