/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '768px'}
      },
      animation: {
        "spin-low": "spin 2s linear infinite",
        "from-bellow": "fromBellow 500s linear",
        "from-right": "fromRight 300s linear",
      },
      keyframes: {
        fromBellow: {
          "0%": { transfrom: "translateY(0%)" },
          "50%": { transfrom: "translateY(200%)" },
          "100%": { transfrom: "translateY(0%)" },
        },
        fromRight: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
