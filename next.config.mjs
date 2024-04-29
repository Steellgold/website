/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "dgzmokcshopxlsimyjqx.supabase.co", protocol: "https" },
      { hostname: "i.scdn.co", protocol: "https" },
      { hostname: "raw.githubusercontent.com", protocol: "https" },
      { hostname: "cdn.rcd.gg", protocol: "https" },
      { hostname: "cdn.discordapp.com", protocol: "https" },
      { hostname: "media.discordapp.net", protocol: "https" },
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "pbs.twimg.com", protocol: "https" },
      { hostname: "upload.wikimedia.org", protocol: "https" },
      { hostname: "api.dicebear.com", protocol: "https" },
    ]
  }
};

export default nextConfig;
