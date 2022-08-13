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
        fade: "fade 1s ease-out 1s forwards",
        jump: "jump 0.7s cubic-bezier(0.42, 0, 0.59, 1.69) 2s both",
        expand: "expand 0.7s ease-out both",
        contract: "contract 0s ease-out both",
        accordion: "accordion 0.7s ease-out both",
        techTile: "techTile 3s ease-out both",
        techTileMobile: "techTileMobile 3s ease-out both",
        techTileInfo: "techTileInfo 5s ease-out both",
        techTileClose: "techTileClose 1s ease-out 3s both",
        corner: "corner 2s ease-out both",
        cornerAppear: "cornerAppear 1s ease-out both",
        slideIn: "slideIn 1s ease-out both",
      },
      colors: {
        "black-light": "#333",
        "white-dark": "#ccc",
        primary: {
          lighter: "#C41C1C",
          light: "#A30606",
          DEFAULT: "#820000",
          dark: "#5C0000",
          darker: "#320000",
        },
      },
      fontFamily: {
        rubik: ["Rubik Distressed"],
        oswald: ["Oswald"],
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
          "0%": { "clip-path": "polygon(0% 0, 0% 0, 0% 100%, 0% 100%)" },
          "100%": { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        jump: {
          "0%": { transform: "translateY(125px)" },
          "100%": { transform: "translateY(0px)" },
        },
        expand: {
          "0%": { width: "10%" },
          "100%": { width: "100%" },
        },
        contract: {
          "0%": { width: "150%" },
          "100%": { width: "100%" },
        },
        accordion: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        techTileMobile: {
          "0%": { "z-index": "10" },
          "30%": { transform: "translate(-2%, 0)", width: "100%" },
          "60%": {
            transform: "translate(0)",
            width: "100%",
            "aspect-ratio": "1/1",
          },
          "100%": {
            transform: "translate(-1%, -7%)",
            width: "100%",
            " z-index": "10",
            "aspect-ratio": "auto",
          },
        },
        techTile: {
          "0%": { "z-index": "10" },
          "30%": { transform: "translate(0)", width: "100%" },
          "60%": {
            transform: "translate(0)",
            width: "100%",
            "aspect-ratio": "1/1",
          },
          "100%": {
            transform: "translate(-5%, -10%)",
            width: "175%",
            " z-index": "10",
            "aspect-ratio": "1.35/1",
          },
        },
        techTileInfo: {
          "25%": { height: "100%", width: "0%" },
          "45%": { width: "100%" },
          "65%": { opacity: "0" },
          "100%": { height: "100%", width: "100%", opacity: "1" },
        },
        techTileClose: {
          "20%": { height: "20%", opacity: "0" },
          "100%": { height: "20%", opacity: "1" },
        },
        corner: {
          "50%": { transform: "translate(0)" },
        },
        cornerAppear: {
          "0%": { transform: "translate(0)" },
        },
        slideIn: {
          "100%": { transform: "translate(0)" },
        },
      },
      screens: {
        xs: "415px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        max: "1920px",
      },
    },
  },
  plugins: [],
};
