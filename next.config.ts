import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // もし画像の最適化を使うなら↓
  // images: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;
