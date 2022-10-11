/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["circryp-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
}

module.exports = nextConfig
