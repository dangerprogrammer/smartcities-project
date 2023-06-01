/** @type {import('next').NextConfig} */
const path = require('path'), nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig;