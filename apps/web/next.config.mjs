/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.houseofblanks.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e-c.storage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
