import kebabCase from "lodash.kebabcase";
import { Balancer } from "react-wrap-balancer";

const Content = ({ children }: { children: React.ReactNode }) => (
  <a
    href={`#${kebabCase(children?.toString())}`}
    className="hover:no-underline"
  >
    <Balancer>{children}</Balancer>
  </a>
);

const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mb-4 mt-8 border-b border-neutral-200 pb-2 text-4xl font-bold dark:border-neutral-800">
    <Content>{children}</Content>
  </h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-3 mt-6 border-b border-neutral-200 pb-1 text-2xl font-bold dark:border-neutral-800">
    <Content>{children}</Content>
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3 mt-5 text-xl font-bold">
    <Content>{children}</Content>
  </h3>
);

const H4 = ({ children }: { children: React.ReactNode }) => (
  <h4 className="mb-2 mt-4 text-lg font-bold">
    <Content>{children}</Content>
  </h4>
);

const H5 = ({ children }: { children: React.ReactNode }) => (
  <h5 className="mb-2 mt-3 text-base font-bold">
    <Content>{children}</Content>
  </h5>
);

const H6 = ({ children }: { children: React.ReactNode }) => (
  <h6 className="mb-1 mt-2 text-base font-bold">
    <Content>{children}</Content>
  </h6>
);

export const Heading = { H1, H2, H3, H4, H5, H6 };
