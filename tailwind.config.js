module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"]
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
