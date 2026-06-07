/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        narutoOrange: "#FF6700",
        chakraBlue: "#00F0FF",
        inkBlack: "#0B0C16",
        parchment: "#F4F1EA",
        shinobiGreen: "#10B981",
        charcoal: "#1A1C2B",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
      boxShadow: {
        neoBlack: "5px 5px 0px #0B0C16",
        neoOrange: "5px 5px 0px #FF6700",
        neoCyan: "5px 5px 0px #00F0FF",
        neoGreen: "5px 5px 0px #10B981",
        rasengan: "0 0 20px rgba(0, 240, 255, 0.6), 0 0 35px rgba(0, 240, 255, 0.3)",
      },
      animation: {
        "spin-fast": "spin 1.5s linear infinite",
        "pulse-chakra": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 4s infinite",
      }
    },
  },
  plugins: [],
}




