module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "google",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks", "storybook"],
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ], // "react/prop-types": "off"
  },
};
