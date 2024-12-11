/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        prayer: `url("http://localhost:5173/pleaseIcon.png"), auto;`,
      },
    },
  },
  plugins: [],
};
