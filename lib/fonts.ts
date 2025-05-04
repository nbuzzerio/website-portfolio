import localFont from "next/font/local";

export const rubikDistressed = localFont({
  src: [
    {
      path: "../public/fonts/RubikDistressed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/RubikDistressed-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  preload: true,
  display: "swap",
});
