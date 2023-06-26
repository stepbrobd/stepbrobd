import Error from "$components/error.tsx";

const Page = () => {
  return <Error status={500} description="Internal Server Error" />;
};

export default Page;
