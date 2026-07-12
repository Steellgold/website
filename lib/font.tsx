import { Caveat, Instrument_Serif } from "next/font/google";

export const piano = Instrument_Serif({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const handwritten = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-handwritten",
});