/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev Webpack : réduit les erreurs de chunks (.next) corrompus / 547.js sur Windows.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig;
