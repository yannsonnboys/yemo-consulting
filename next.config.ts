import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This is to disable eslint (error warnings) from Vercel during the deployment */
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* This is to disable eslint (error warnings) from Vercel during the deployment */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
