import { Caveat } from "next/font/google";
import localFont from "next/font/local";

export const lastik = localFont({
  src: "./fonts/lastik-free-font.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-serif",
  display: "swap",
});

export const handwritten = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-handwritten",
});