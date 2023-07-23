import { Heading, List, P } from "com-stepbrobd-ui";
import Image from "components/image";
import Link from "components/link";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6,
    p: P,
    a: Link,
    img: Image,
    ul: List.Unordered,
    ol: List.Ordered,
    li: List.Item,
    ...components,
  };
}
