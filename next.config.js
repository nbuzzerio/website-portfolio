/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async rewrites() {
    return [
      {
        source: "/chess/:path*",
        destination: "https://localhost:3001/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
