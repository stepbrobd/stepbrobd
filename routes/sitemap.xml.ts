import { SitemapContext } from "fresh-seo";
import { Handlers } from "$fresh/server.ts";
import { getPages } from "$utils/get-pages.ts";
import manifest from "../fresh.gen.ts";

export const handler: Handlers = {
  GET: async (_req, _ctx) => {
    const sitemap = new SitemapContext(
      "https://stepbrobd.com",
      manifest,
    );

    const pages = await getPages("./routes");
    pages.forEach((page) => {
      sitemap.add(page.slug);
    });

    return sitemap.render();
  },
};
