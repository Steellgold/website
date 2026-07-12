import { SITE_NAME } from "@/config/site";
import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: SITE_NAME,
    short_name: "Gaëtan Huszovits",
    description: "Full-Stack Developer",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}

export default manifest;