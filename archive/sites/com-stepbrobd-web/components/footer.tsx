import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandThreads,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
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
        { name: "StepBroBD, Inc.", href: "https://stepbrobd.com" },
        { name: "Viral Vision, LLC.", href: "https://viral.vision" },
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
      name: "X",
      href: "https://x.com/stepbrobd",
      icon: IconBrandX,
    },
    {
      name: "Threads",
      href: "https://threads.net/@stepbrobd",
      icon: IconBrandThreads,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@stepbrobd",
      icon: IconBrandYoutube,
    },
  ];

  return (
    <footer
      className="w-full space-y-8 border-t border-neutral-200 px-8 py-16 text-neutral-700 backdrop-blur-md backdrop-filter dark:border-neutral-800 dark:text-neutral-300"
      aria-label="Footer"
    >
      <nav className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="flex items-center justify-center md:items-start md:justify-start">
          <Logo StepBroBD size="small" />
        </div>
        {links.map(({ name, items }) => (
          <div className="space-y-4" key={name}>
            <h2 className={`font-bold`}>{name}</h2>
            <ul className="space-y-2 pl-2 text-neutral-600 dark:text-neutral-400 md:pl-0">
              {items.map(({ name, href }) => (
                <li key={name}>
                  <Link className="text-sm" href={href}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="block border-neutral-200 dark:border-neutral-800 md:hidden" />
          </div>
        ))}
      </nav>
      <section className="flex flex-col items-center space-y-8 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div className="space-y-4">
          <span>
            <p className="items-center justify-start text-center text-sm md:text-start">
              &copy; {new Date().getFullYear()} StepBroBD, Inc.
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
