import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
