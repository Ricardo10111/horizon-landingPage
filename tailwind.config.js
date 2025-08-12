/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // esto es lo que centra el contenedor horizontalmente
      padding: "0px", // esto es el padding que se aplica a los lados del contenedor
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1600px", //
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        playfairSc: ["var(--font-playfair-display-sc)"],
        jetbrainsMono: ["var(--font-jetbrainsMono)"],
      },

      colors: {
        primary: "#fcfcfc",
        secondary: "#C5A95E",
        accent: {
          DEFAULT: "#1a7da0",
          hover: "#1c9cbe",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
