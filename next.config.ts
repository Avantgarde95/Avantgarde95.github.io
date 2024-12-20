import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

console.log(`===== ${isDevelopment ? "Dev. mode" : "Prod. mode"} =====`);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: isDevelopment ? ".next" : "docs",
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        type: "asset/source",
      }
    );

    return config;
  },
};

export default nextConfig;
