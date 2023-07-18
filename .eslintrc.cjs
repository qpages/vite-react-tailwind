module.exports = {
  parser: "@typescript-eslint/parser",
  // Added plugins configuration
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    //"plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    // Tells eslint how to resolve imports
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Add your own rules here to override ones from the extended configs.
    "react/react-in-jsx-scope": "off",
  },
};
