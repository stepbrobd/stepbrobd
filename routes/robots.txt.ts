import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET: (_req, _res) => {
    return new Response(
      `User-agent: *
Allow: /*
Sitemap: https://stepbrobd.com/sitemap.xml
`,
      {
        status: 200,
        headers: {
          "content-type": "text/plain",
        },
      },
    );
  },
};
