import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '',
  basePath: ''
};
module.exports = nextConfig

export default nextConfig;
