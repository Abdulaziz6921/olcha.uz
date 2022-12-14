/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        beat: "beat 0.5s ease-out infinite",
      },
      keyframes: {
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      boxShadow: {
        custom: "0px 5px 15px rgb(0 0 0 / 0.3)",
      },
    },
  },
  plugins: [],
};
