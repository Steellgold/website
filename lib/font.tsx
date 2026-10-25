import localFont from "next/font/local";

export const lastik = localFont({
  src: "./fonts/lastik-free-font.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
});

export const handwritten = localFont({
  src: "./fonts/caveat-latin.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-handwritten",
});
