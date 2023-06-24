import { PageProps } from "$fresh/server.ts";

const Greet = ({ params: { name } }: PageProps) => {
  return <div>Hello {name}</div>;
};

export default Greet;
