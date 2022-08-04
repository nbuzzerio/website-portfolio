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
        blink: "fade 0.5s infinite",
        clip: "clip 1.5s ease-out 1s both",
        fade: "fade 1s ease-out forwards",
        jump: "jump 0.7s cubic-bezier(0.42, 0, 0.59, 1.69) 1s both",
        expand: "expand 0.7s ease-out both",
        contract: "contract 0s ease-out both",
        accordion: "accordion 0.7s ease-out both",
      },
      colors: {
        'black-light': '#333',
        'white-dark': '#ccc',
        'primary': {
          lighter: "#C41C1C",
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
        jump: {
          "0%": { 'transform': 'translateY(110px)' },
          "100%": { 'transform': 'translateY(0px)' },
        },
        expand: {
          "0%": { 'width': '10%' },
          "100%": { 'width': '100%' },
        },
        contract: {
          "0%": { 'width': '150%' },
          "100%": { 'width': '100%' },
        },
        accordion: {
          "0%": { 'height': '0%' },
          "100%": { 'height': '100%' },
        }
      },
    },
  },
  plugins: [],
};
