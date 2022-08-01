module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        open: "menuOpen .7s ease-out forwards",
        close: "menuClose 1s ease-in-out forwards",
        fade: "fade 1s ease-out forwards",
        'clip': "clip 1.5s ease-out 1s both",
      },
      colors: {
        'black-light': '#333',
        'white-dark': '#ccc',
        'primary': {
          ligher: "#C41C1C",
          light: "#A30606",
          DEFAULT: "#820000",
          dark: "#5C0000",
          darker: "#320000",
        },
      },
      keyframes: {
        menuOpen: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        menuClose: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        clip: {
          "0%": { 'clip-path': 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)' },
          "100%": { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
      },
    },
  },
  plugins: [],
};
