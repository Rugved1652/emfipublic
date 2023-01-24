/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "uat.emfi.uk",
      "emfi-uat.s3.amazonaws.com",
      "emfi-production.s3.amazonaws.com",
    ],
  },
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    baseURLV1: process.env.BASE_URL_V1,
    baseURLV2: process.env.BASE_URL_V2,
    baseURLV3: process.env.BASE_URL_V3,
  },
};

module.exports = nextConfig;
