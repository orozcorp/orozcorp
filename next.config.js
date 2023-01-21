/** @type {import('next').NextConfig} */
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "stgfinal.s3.amazonaws.com",
      "stgfinal.s3.us-east-1.amazonaws.com",
      "orozcorp.s3.us-east-2.amazonaws.com",
      "res.cloudinary.com",
      "s3.amazonaws.com",
    ],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        // matching all Diseno routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  swcMinify: true,
  optimizeFonts: false,
  env: {
    BASE_URL: dev ? "http://localhost:3000/" : "https://www.orozcorp.live/",
    DB_URI: process.env.DB_URI,
  },
};
