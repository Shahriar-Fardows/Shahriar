/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgColor: {
          10: "#141824",
          20: "#0F111A",
        },
        lemon: {
          10: "#15d798",
          20: "#10b981",
        },
      },
      fontFamily: {
        mukta: ['Mukta', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        play: ["Playwrite IT Moderna", 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
