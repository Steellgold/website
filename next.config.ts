import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dgzmokcshopxlsimyjqx.supabase.co", port: "", pathname: "/**" },
      { protocol: "https", hostname: "cdn.discordapp.com", port: "", pathname: "/**" },
      { protocol: "https", hostname: "media.discordapp.net", port: "", pathname: "/**" }
    ]
  },
  experimental: {
    authInterrupts: true
  }
};

export default nextConfig;
