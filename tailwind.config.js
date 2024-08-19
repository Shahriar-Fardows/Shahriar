/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        bgColor: {
          10: "#141824",
          20: "#0F111A",
          30: "#FAFAFB",
          custom: "rgb(219,244,241)",
          gradient: "linear-gradient(135deg, rgba(219,244,241,1) 0%, rgba(255,246,247,1) 100%)",
        },
        lemon: {
          10: "#2ECA7F",
          20: "#1A2D62",
          30: "#25A5ED",
        },
        hello: {
          10: "#6244C5",
          20: "#533AA7",
          30: "#FFC448",
        },
      },
      fontFamily: {
        mukta: ['Mukta', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        play: ["Playwrite IT Moderna", 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Slows down the bounce animation to 5 seconds per cycle
        'custom-bounce': 'custom-bounce 5s infinite', 
      },
      keyframes: {
        'custom-bounce': {
          // Initial and final positions (0% and 100%) are the same, no movement
          '0%, 100%': {
            transform: 'translateY(0%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 2, 0)',
          },
          // Midpoint (50%) is where the element moves up slightly, reducing the range to -5%
          '50%': {
            transform: 'translateY(4%)', // Reducing the bounce height to make it less jumpy
            'animation-timing-function': 'cubic-bezier(0, 0, 2, 0)',
          },
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
