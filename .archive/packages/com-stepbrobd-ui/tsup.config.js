import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    treeshake: true,
    splitting: true,
    entry: ["index.tsx"],
    format: ["esm"],
    dts: true,
    minify: true,
    clean: true,
    external: ["react"],
    ...options,
}));
