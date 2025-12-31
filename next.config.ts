// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // For Cloudflare compatibility
  experimental: {
    // Optional: if you need WASM or other features
    // serverComponentsExternalPackages: [],
  },
  // Remove these or keep only if necessary
  typescript: {
    ignoreBuildErrors: true, // Consider removing for production
  },
  reactStrictMode: true, // Better to keep true
  eslint: {
    ignoreDuringBuilds: true, // Consider removing for production
  },
  // Optional: Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    // Uncomment if using external images
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '**',
    //   },
    // ],
  },
};

export default nextConfig;