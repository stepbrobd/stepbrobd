import { default as NextLink } from "next/link";

const Link = ({ href, className, children }) => {
  if (!href.toString().startsWith("/")) {
    return (
      <a
        href={href.toString()}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <NextLink href={href} className={className} passHref>
        {children}
      </NextLink>
    );
  }
};

export default Link;
