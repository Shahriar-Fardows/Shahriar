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
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bgColor: {
          10: "#141824",
          20: "#0F111A",
          // Add your new background styles here
          custom: "rgb(219,244,241)",
          gradient: "linear-gradient(135deg, rgba(219,244,241,1) 0%, rgba(255,246,247,1) 100%)",
        },
        lemon: {
          10: "#2ECA7F",
          20: "#1A2D62",
        },
      },
      fontFamily: {
        mukta: ['Mukta', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        play: ["Playwrite IT Moderna", 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
