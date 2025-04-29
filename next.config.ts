import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["google.com", "www.google.com", "lh3.googleusercontent.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
};

export default nextConfig;
