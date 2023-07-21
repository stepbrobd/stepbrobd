import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandThreads,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import FooterCollapsible from "components/footer-collapsible";
import Link from "components/link";
import Logo from "components/logo";
import Theme from "components/theme";

const Footer = () => {
  const links = [
    {
      name: "Company",
      items: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      name: "Explore",
      items: [
        { name: "StepBroBD Inc.", href: "https://stepbrobd.com" },
        { name: "Viral Vision LLC.", href: "https://viral.vision" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ],
    },
  ];

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/stepbrobd",
      icon: IconBrandGithub,
    },
    {
      name: "Discord",
      href: "https://discordapp.com/users/664337668842192899",
      icon: IconBrandDiscord,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/stepbrobd",
      icon: IconBrandTwitter,
    },
    {
      name: "Threads",
      href: "https://threads.net/@stepbrobd",
      icon: IconBrandThreads,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@stepbrobd",
      icon: IconBrandYoutube,
    },
  ];

  return (
    <footer
      aria-label="footer"
      className="w-full space-y-8 border-t border-neutral-200 px-8 py-16 text-neutral-700 backdrop-blur-md backdrop-filter dark:border-neutral-800 dark:text-neutral-300"
    >
      <nav className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex items-center justify-center md:items-start md:justify-start">
          <Logo StepBroBD size="small" />
        </div>

        {links.map(({ name, items }) => (
          <FooterCollapsible key={name} title={name}>
            {items.map(({ name, href }) => (
              <li key={name}>
                <Link
                  className="text-sm text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </FooterCollapsible>
        ))}
      </nav>

      <section className="flex flex-col items-center space-y-8 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div className="space-y-4">
          <span>
            <p className="items-center justify-start text-center text-sm md:text-start">
              &copy; {new Date().getFullYear()} StepBroBD Inc.
            </p>
          </span>
          <ul className="flex flex-row space-x-4">
            {socials.map(({ name, href, icon: Icon }) => (
              <li key={name} className="h-5 w-5">
                <a
                  target="_blank"
                  className="inline-block"
                  href={href}
                  aria-label={name}
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Theme />
      </section>
    </footer>
  );
};

export default Footer;
