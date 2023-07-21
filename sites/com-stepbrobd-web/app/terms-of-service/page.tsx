import { Metadata } from "next";

//@ts-ignore
import Content, { meta } from "./content.mdx";

const metadata: Metadata = {
  ...meta,
};

const Page = () => <Content />;

export { metadata };
export default Page;
