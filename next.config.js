/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uat.emfi.uk"],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseURL: process.env.BASE_URL,
    baseURLV1: process.env.BASE_URL_V1,
  },
};

module.exports = nextConfig;
