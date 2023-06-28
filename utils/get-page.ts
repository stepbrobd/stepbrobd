import { Page } from "$utils/types.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/posix.ts";

export const getPage = async (
  directory: string,
  slug: string,
): Promise<Page | null> => {
  const text = await Deno.readTextFile(join(directory, `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title as string,
    date: new Date(attrs.date as string),
    description: attrs.description as string,
    og: attrs.og as string,
    content: body as string,
  };
};
