/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export statique : génère un dossier `out/` 100 % HTML/CSS/JS
  // déployable sur n'importe quel stockage objet (Yandex Object Storage, S3, etc.)
  output: "export",

  // Yandex Object Storage sert "dossier/" → "dossier/index.html" si trailingSlash=true
  trailingSlash: true,

  // Le loader d'images Vercel n'existe pas sur un host statique → on désactive
  images: {
    unoptimized: true
  },

  // Dev Webpack : réduit les erreurs de chunks (.next) corrompus / 547.js sur Windows.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  }
};

export default nextConfig;
