module.exports = {
    plugins: ["jsx-a11y", "prettier"],
    extends: [
        "next/core-web-vitals",
        "prettier",
        "plugin:jsx-a11y/recommended",
    ],
    ignorePatterns: ["node_modules/"],
    rules: {
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error",
        "arrow-body-style": ["error", "as-needed"],
        // Enable putting href at Next <Link> instead of <a>.
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"],
            },
        ],
        // Whether allowing using <img> instead of <Image> or not.
        // "@next/next/no-img-element": "off",
    },
};
