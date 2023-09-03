import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandTwitter,
  IconCreativeCommons,
  IconCreativeCommonsBy,
  IconCreativeCommonsNc,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:items-start">
      <small className="h-5">
        &copy; {new Date().getFullYear()} Yifei Sun. Some rights reserved.
      </small>

      <div className="flex h-5 flex-row items-center justify-center space-x-3">
        <a
          href="mailto:hi@ysun.co"
          target="_blank"
          className="inline-block"
          aria-label="Mail"
        >
          <IconMail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/yifei-s"
          target="_blank"
          className="inline-block"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={20} />
        </a>
        <a
          href="https://github.com/stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="GitHub"
        >
          <IconBrandGithub size={20} />
        </a>
        <a
          href="https://twitter.com/stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="Twitter"
        >
          <IconBrandTwitter size={20} />
        </a>
        <a
          href="https://www.threads.net/@stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="Threads"
        >
          <IconBrandThreads size={20} />
        </a>
      </div>

      <a
        className="flex h-5 items-center justify-center"
        href="https://creativecommons.org/licenses/by-nc/4.0/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="CC BY-NC 4.0"
      >
        <div className="flex flex-row space-x-3">
          <IconCreativeCommons size={20} />
          <IconCreativeCommonsBy size={20} />
          <IconCreativeCommonsNc size={20} />
        </div>
      </a>
    </div>
  );
};

export default Footer;
