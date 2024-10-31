/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": [
          "Source Sans Pro",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "neutral-dark": "#333333",
        "neutral-light": "#FFFFFF",
        "brand-green": "#244442",
        "brand-lime": "#1F8E2A",
        "brand-beige": "#E5D8C8",
        "brand-maroon": "#B11E54",
      },
    },
  },
  plugins: [],
};
