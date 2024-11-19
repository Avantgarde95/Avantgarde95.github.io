import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  sassOptions: {
    // https://github.com/vercel/next.js/issues/71638
    silenceDeprecations: ["legacy-js-api"],
  },
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.md$/,
        type: "asset/source",
      },
    );

    return config;
  },
};

export default nextConfig;
