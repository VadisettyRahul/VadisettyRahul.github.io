/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "assets.holopin.io",
      },
    ],
  },
  output: "export",
  distDir:"dist",
  experimental: {
    externalDir: true,
    serverActions: false,
  },
};

module.exports = nextConfig;
