/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uat.emfi.uk"],
  },
};

module.exports = nextConfig;
