import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "",
      },
    ],
  },
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  //devIndicators: false,
};

export default nextConfig;
