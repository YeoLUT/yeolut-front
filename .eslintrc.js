module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ["google", "eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "prettier/prettier": ["warn", {
      endOfLine: "auto"
    }] // "react/prop-types": "off"

  }
};