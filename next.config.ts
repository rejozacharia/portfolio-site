// next.config.js or next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your existing options, e.g. allowedDevOrigins:
  allowedDevOrigins: [
    'me.zactower.com',
    'portfolio.zactower.com',
    '*.zactower.com',
    'rejozmathew.com',
  ],

  // *** Add this line to enable standalone output ***
  output: 'standalone',
};

export default nextConfig;
