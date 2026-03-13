/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gerstudio.com",
      },
      {
        protocol: "https",
        hostname: "gerstudio.com",
      },
    ],
  },
};

module.exports = nextConfig;
