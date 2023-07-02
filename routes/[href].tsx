import Meta from "$components/meta.tsx";
import { Page } from "$utils/types.ts";
import { getPage } from "$utils/get-page.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { CSS, KATEX_CSS, render } from "gfm";

export const handler: Handlers<Page> = {
  GET: async (_req, ctx) => {
    try {
      const page = await getPage("./routes", ctx.params.href);
      return ctx.render(page as Page);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

const Page = (props: PageProps<Page>) => {
  const page = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: KATEX_CSS }} />
        <style>
          {`
          ol.nested {
            counter-reset: item;
          }
        
          ol.nested li {
            display: block;
          }
        
          ol.nested li:before {
            font-feature-settings: "kern" 1, "tnum" 1;
            -webkit-font-feature-settings: "kern" 1, "tnum" 1;
            -ms-font-feature-settings: "kern" 1, "tnum" 1;
            -moz-font-feature-settings: "kern" 1, "tnum" 1;
            content: counters(item, ".") ". ";
            counter-increment: item;
          }
        
          .markdown-body ul {
            list-style: disc;
          }
        
          .markdown-body ol {
            list-style: numeric;
          }
        
          .toggle:checked + .toggled {
            display: block;
          }
        `}
        </style>
      </Head>
      <Meta
        title={page.title}
        description={page.description}
        image={page.og}
        url={props.url.href}
      />
      <article class="max-w-screen-md px-8 py-8">
        <time class="text-gray-500 dark:text-gray-400 text-sm">
          {new Date(page.date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div
          data-color-mode="system"
          data-light-theme="light"
          data-dark-theme="dark"
          class="markdown-body prose prose-neutral bg-white text-black dark:bg-black dark:text-white pt-4 transition-colors duration-500 ease-in-out"
          dangerouslySetInnerHTML={{
            __html: render(page.content, {
              baseUrl: "https://stepbrobd.com",
              mediaBaseUrl: "https://stepbrobd.com",
              inline: false,
              allowIframes: false,
              allowMath: true,
              disableHtmlSanitization: false,
            }),
          }}
        />
      </article>
    </>
  );
};

export default Page;
