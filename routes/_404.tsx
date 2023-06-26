import Error from "$components/error.tsx";

const Page = () => {
  return <Error status={404} description="Not Found" />;
};

export default Page;
