import Meta from "$components/meta.tsx";
import Logo from "$components/logo.tsx";

const Home = () => {
  return (
    <>
      <Meta />
      <video
        src="https://stepbrobd.com/assets/bg.webm"
        autoPlay
        loop
        muted
        class="absolute top-0 object-fill w-full h-full min-w-full min-h-full -z-10"
      />
      <div class="flex items-center justify-center h-full">
        <Logo animated size="large" />
      </div>
    </>
  );
};

export default Home;
