module.exports = {
  extends: ["next", "turbo", "prettier"],

  plugins: ["simple-import-sort"],

  rules: {
    "@next/next/no-html-link-for-pages": "off",

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    "react-hooks/exhaustive-deps": "error",
  },

  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
