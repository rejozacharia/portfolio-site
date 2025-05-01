import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allow your custom dev origins alongside localhost
  allowedDevOrigins: [
    "me.zactower.com",
    "portfolio.zactower.com",
    // or wildcard for all subdomains:
    "*.zactower.com",
  ],
  // other config options here
};

export default nextConfig;
