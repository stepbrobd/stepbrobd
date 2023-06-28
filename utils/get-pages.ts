import { Page } from "$utils/types.ts";
import { getPage } from "$utils/get-page.ts";

export const getPages = async (directory: string): Promise<Page[]> => {
  const files = Deno.readDir(directory);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPage(directory, slug));
  }
  return await Promise.all(promises) as Page[];
};
