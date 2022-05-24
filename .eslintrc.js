module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/prefer-default-export": "off",
    quotes: ["error", "double"],
    "linebreak-style": ["error", "windows", "unix"],
    "import/extensions": ["error", "never", { ignorePackages: true }],
  },
};
