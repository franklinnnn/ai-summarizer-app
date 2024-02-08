/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Clash Display", "sans-serif"],
        body: ["Archivo", "sans-serif"],
      },
      colors: {
        primary: "#402d53",
        secondary: "#3c86b6",
      },
    },
  },
  plugins: [],
};
