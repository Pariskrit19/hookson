module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:react/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
  },
};
