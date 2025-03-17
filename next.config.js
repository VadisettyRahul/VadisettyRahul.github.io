/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    serverActions: true,
  },
};

module.exports = nextConfig;
