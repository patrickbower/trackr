/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // For Tailwind CSS v2
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // For Tailwind CSS v3
  theme: {
    extend: {},
  },
  plugins: [],
};
