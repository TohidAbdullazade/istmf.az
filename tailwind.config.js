/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: "Inter, sans-serif",
                outfit: "Outfit, sans-serif"
            },

        },
    },
    plugins: [],
}