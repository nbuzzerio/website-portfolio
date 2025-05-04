/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nb-portfolio-images.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nb-portfolio-images.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/chess/:path*",
        destination: "https://localhost:3001/:path*",
      },
      {
        source: "/chess-socket/:path*",
        destination: "https://localhost:3001/chess-socket/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
