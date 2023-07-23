/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 10px 50px -15px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
