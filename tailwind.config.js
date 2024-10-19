/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A59FE",
        secondary: "#F9F9F9",
        pagination: "#2A59FE4D",
      },
    },
  },
  plugins: [],
};
