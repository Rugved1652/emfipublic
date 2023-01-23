/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["uat.emfi.uk"],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    baseURLV1: process.env.BASE_URL_V1,
    baseURLV2: process.env.BASE_URL_V2,
  },
};

module.exports = nextConfig;
