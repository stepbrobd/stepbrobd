import { Metadata } from "next";

//@ts-ignore
import Content, { meta } from "./content.mdx";

const metadata: Metadata = {
  ...meta,
};

const Page = () => (
  <article className="max-w-3xl place-self-center px-8 py-8">
    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
      {
        // @ts-ignore
        new Date(metadata.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }
    </p>
    <Content />
  </article>
);

export { metadata };
export default Page;
