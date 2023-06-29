import { MiddlewareHandlerContext } from "$fresh/server.ts";

export const handler = async (
  // deno-lint-ignore no-unused-vars
  req: Request,
  ctx: MiddlewareHandlerContext,
) => {
  const res = await ctx.next();
  const { ok } = res;

  if (ok) {
    res.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
    );
    res.headers.set("X-Frame-Options", "DENY");
    res.headers.set("X-Content-Type-Options", "nosniff");
    res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    res.headers.set(
      "Content-Security-Policy",
      "default-src 'self' stepbrobd.com *.stepbrobd.com; " +
        "child-src 'self' stepbrobd.com *.stepbrobd.com; " +
        "connect-src 'self' stepbrobd.com *.stepbrobd.com plausible.io client-api.auryc.com mt.auryc.com; " +
        "font-src 'self' stepbrobd.com *.stepbrobd.com cdn.jsdelivr.net; " +
        "frame-src 'self' stepbrobd.com *.stepbrobd.com; " +
        "img-src 'self' stepbrobd.com *.stepbrobd.com heapanalytics.com; " +
        "media-src 'self' stepbrobd.com *.stepbrobd.com; " +
        "object-src 'self' stepbrobd.com *.stepbrobd.com; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' stepbrobd.com *.stepbrobd.com cdn.heapanalytics.com plausible.io; " +
        "style-src 'self' 'unsafe-inline' stepbrobd.com *.stepbrobd.com; " +
        "worker-src 'self' blob: stepbrobd.com *.stepbrobd.com;",
    );
  }

  return res;
};
