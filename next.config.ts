import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dgzmokcshopxlsimyjqx.supabase.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.discordapp.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "media.discordapp.net", port: "", pathname: "/**" },
      { protocol: "https", hostname: "i.scdn.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.simplist.blog", port: "", pathname: "/**" }
    ]
  }
};

export default withNextIntl(nextConfig);
