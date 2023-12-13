import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandThreads,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Logo from "components/logo";

const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:items-start">
      <div className="flex flex-row text-xs">
        <a
          href="https://stepbrobd.com/privacy-policy"
          target="_blank"
          className="inline-block"
          aria-label="Privacy Policy"
        >
          Privacy
        </a>
        <a
          href="https://stepbrobd.com/terms-of-service"
          target="_blank"
          className="ml-3 inline-block rounded-l-none border-l pl-3 dark:border-neutral-800"
          aria-label="Terms of Service"
        >
          Terms
        </a>
      </div>

      <small className="h-5">
        &copy; {new Date().getFullYear()} StepBroBD, Inc.
      </small>

      <div className="flex h-5 flex-row items-center justify-center space-x-4">
        <a
          href="https://github.com/stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="GitHub"
        >
          <IconBrandGithub size={20} />
        </a>
        <a
          href="https://discordapp.com/users/664337668842192899"
          target="_blank"
          className="inline-block"
          aria-label="Discord"
        >
          <IconBrandDiscord size={20} />
        </a>
        <a
          href="https://x.com/stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="X"
        >
          <IconBrandX size={20} />
        </a>
        <a
          href="https://threads.net/@stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="Threads"
        >
          <IconBrandThreads size={20} />
        </a>
        <a
          href="https://youtube.com/@stepbrobd"
          target="_blank"
          className="inline-block"
          aria-label="YouTube"
        >
          <IconBrandYoutube size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
