import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bbny-presentation',
  assetPrefix: '/bbny-presentation',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
