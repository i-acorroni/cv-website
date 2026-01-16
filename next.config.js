/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.substack.com',
      },
      {
        protocol: 'https',
        hostname: 'substackcdn.com',
      },
    ],
  },
};

module.exports = nextConfig;

