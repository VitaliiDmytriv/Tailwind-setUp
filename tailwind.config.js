/** @type {import('tailwindcss').Config} */
module.exports = {
    // Path to source code
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                main: "#006f6f",
            },
            letterSpacing: {
                general: "0.5em",
            },
            fontFamily: {
                main: ["Roboto"],
            },
        },
    },
    plugins: [],
};
