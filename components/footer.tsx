import Logo from "$components/logo.tsx";
import Theme from "$islands/theme.tsx";

import IconMail from "icons/tsx/mail.tsx";
import BrandGithub from "icons/tsx/brand-github.tsx";
import BrandTwitter from "icons/tsx/brand-twitter.tsx";
import BrandInstagram from "icons/tsx/brand-instagram.tsx";
import BrandReddit from "icons/tsx/brand-reddit.tsx";

export default function Footer() {
  return (
    <footer class="flex flex-col space-y-8 items-center md:flex-row md:justify-between md:space-y-0 w-full px-8 py-8 backdrop-filter backdrop-blur backdrop-brightness-75">
      <div class="flex flex-col space-y-8">
        <div class="flex items-center justify-center md:justify-start h-8">
          <Theme prev="system" />
        </div>
        <div class="flex items-center justify-center md:justify-start h-8">
          <Logo StepBroBD size="small" />
        </div>
      </div>

      <div class="flex flex-col space-y-8">
        <div class="flex flex-row space-x-4 items-center justify-center md:justify-end h-8">
          <a
            href="https://github.com/stepbrobd"
            class="inline-block"
            aria-label="GitHub"
          >
            <BrandGithub />
          </a>
          <a
            href="https://twitter.com/stepbrobd"
            class="inline-block"
            aria-label="Twitter"
          >
            <BrandTwitter />
          </a>
          <a
            href="https://instagram.com/stepbrobd"
            class="inline-block"
            aria-label="Instagram"
          >
            <BrandInstagram />
          </a>
          <a
            href="https://www.reddit.com/user/stepbrobd"
            class="inline-block"
            aria-label="Reddit"
          >
            <BrandReddit />
          </a>
          <a href="mailto:Hi@StepBroBD.com" class="inline-block">
            <IconMail />
          </a>
        </div>
        <div class="flex items-center justify-center md:justify-end h-8">
          &copy; {new Date().getFullYear()} StepBroBD Inc.
        </div>
      </div>
    </footer>
  );
}
