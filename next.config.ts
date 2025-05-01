import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allow your custom dev origins alongside localhost
  allowedDevOrigins: [
    "https://me.zactower.com",
    "https://portfolio.zactower.com",
  ],

  // other config options here
};

export default nextConfig;
