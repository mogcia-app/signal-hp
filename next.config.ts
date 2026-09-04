import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.sgnalapp.com',
          },
        ],
        destination: 'https://www.signalapp.jp/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sgnalapp.com',
          },
        ],
        destination: 'https://www.signalapp.jp/:path*',
        permanent: true,
      },
    ];
  },
  // もし画像の最適化を使うなら↓
  // images: {
  //   domains: ['example.com'],
  // },
};

export default nextConfig;
