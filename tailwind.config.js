/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pallete: {
        dark: "#111315",
        lightDark: "#1B1D1F",
        grey: "#6F757C",
        green: "#BEE3CC",
        light: "#FEF7EE",
        yellow: "#F6C768",
        red: "#ED735D",
      },
    },
    extend: {},
  },
  plugins: [],
};
