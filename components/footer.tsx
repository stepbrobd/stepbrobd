import Logo from "$components/logo.tsx";
import Theme from "$islands/theme.tsx";

import IconBrandDeno from "icons/tsx/brand-deno.tsx";
import IconBrandGithub from "icons/tsx/brand-github.tsx";
import IconBrandTwitter from "icons/tsx/brand-twitter.tsx";
import IconBrandInstagram from "icons/tsx/brand-instagram.tsx";
import IconBrandYoutube from "icons/tsx/brand-youtube.tsx";

const Footer = () => {
  return (
    <footer
      aria-label="footer"
      class="flex flex-col space-y-8 items-start md:items-center md:flex-row md:justify-between md:space-y-0 w-full px-8 py-8 backdrop-filter backdrop-blur-md"
    >
      <div class="flex flex-col space-y-8">
        <div class="flex items-center justify-start h-8">
          <Theme prev="system" />
        </div>

        <div class="flex flex-row space-x-2 items-center justify-start h-8">
          <a
            href="https://deno.land/x/stepbrobd"
            target="_blank"
            class="inline-block"
            aria-label="Deno"
          >
            <IconBrandDeno />
          </a>
          <a
            href="https://github.com/stepbrobd/stepbrobd.com"
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
            href="https://instagram.com/stepbrobd"
            target="_blank"
            class="inline-block"
            aria-label="Instagram"
          >
            <IconBrandInstagram />
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
      </div>
      <div class="flex flex-col space-y-8">
        <div class="flex items-center justify-start md:justify-end h-8">
          <Logo StepBroBD size="small" />
        </div>
        <div class="flex items-center justify-start md:justify-end h-8">
          <small>
            Copyright &copy; {new Date().getFullYear()}{" "}
            StepBroBD Inc. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
