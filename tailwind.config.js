/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#87DF50",
        action: "#BB6D42",
        base: "#EBEBEB",
      },
      boxShadow: {
        soft: "0 0px 6px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
