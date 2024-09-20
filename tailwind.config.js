/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0367FF",
        secondary: "#0F0920",
      },
      fontFamily: {
        montserrat: [" Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
