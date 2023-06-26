import Meta from "$components/meta.tsx";
import Logo from "$components/logo.tsx";

const Page = () => {
  return (
    <>
      <Meta />
      <video
        src="/assets/lightning.mp4"
        autoPlay
        playsInline
        loop
        muted
        class="absolute top-0 object-fill w-full h-full min-w-full min-h-full -z-10"
      />
      <div class="flex items-center justify-center h-full">
        <Logo size="large" />
      </div>
    </>
  );
};

export default Page;
