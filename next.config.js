module.exports = {
  trailingSlash: true,
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
