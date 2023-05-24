/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      colors: {
         default: "#292B2C",
         white: "#fff",
         black: "#000000",
         green: "#27ae60",
         red: "#c0392b",
         dark: "#1E2125;",
         blue: "#6E07F3",
      },
      animation: {
         slide: "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      fontFamily: {
         inter: ["Inter", "sans-serif"],
      },
      extend: {
         keyframes: {
            "slide-top": {
               "0%": {
                  transform: "translateY(-10px)",
               },
               "100%": {
                  transform: "translateY(0)",
               },
            },
         },
      },
   },
   plugins: [],
};
