module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "google",
    // "plugin:prettier/recommended",
    "plugin:react/recommended",
    // // 'eslint:recommended',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {},
};
