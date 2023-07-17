/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["!**/node_modules/**", "**/*.{js,jsx,ts,tsx,md,mdx}"],
    theme: {
        fontFamily: {
            serif: ["var(--font-tinos)"],
            sans: ["var(--font-inter)"],
            mono: ["var(--font-jetbrains-mono)"],
        },
    },
};
