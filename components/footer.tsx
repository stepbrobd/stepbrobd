import Logo from "$components/logo.tsx";
import Theme from "$islands/theme.tsx";

import IconBrandGithub from "icons/tsx/brand-github.tsx";
import IconBrandTwitter from "icons/tsx/brand-twitter.tsx";
import IconBrandYoutube from "icons/tsx/brand-youtube.tsx";

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
            target="_blank"
            class="inline-block"
            aria-label="GitHub"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://twitter.com/stepbrobd"
            target="_blank"
            class="inline-block"
            aria-label="Twitter"
          >
            <IconBrandTwitter />
          </a>
          <a
            href="https://www.youtube.com/@stepbrobd"
            target="_blank"
            class="inline-block"
            aria-label="YouTube"
          >
            <IconBrandYoutube />
          </a>
        </div>
        <div class="flex items-center justify-center md:justify-end h-8">
          &copy; {new Date().getFullYear()} StepBroBD Inc.
        </div>
      </div>
    </footer>
  );
}
