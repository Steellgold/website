import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.gaetanhus.fr", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.simplist.blog", port: "", pathname: "/**" },
    ],
  },
};

export default withNextIntl(nextConfig);