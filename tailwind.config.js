/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { min: "551px", max: "1050px" }, sm: { min: "200px", max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue: { A400: "#2f80ed" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter" },
    },
  },
};
