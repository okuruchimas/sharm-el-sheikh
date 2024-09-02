/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["beautiful-boot-1db2e6c4ea.media.strapiapp.com"],
  },
  i18n,
};

module.exports = nextConfig;
