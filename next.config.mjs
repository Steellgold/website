/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "dgzmokcshopxlsimyjqx.supabase.co", protocol: "https" },
      { hostname: "i.scdn.co", protocol: "https" },
    ]
  }
};

export default nextConfig;
