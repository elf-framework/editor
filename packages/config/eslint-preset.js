module.exports = {
  root: true,
  plugins: ["jsx", "prettier", "react"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      },
    },
  },
  rules: {
    "prettier/prettier": "error",
    "jsx/uses-factory": [1, { pragma: "JSX" }],
    "jsx/factory-in-scope": 0,
    "jsx/mark-used-vars": 1,
    "jsx/no-undef": 1,
    // "react/jsx-boolean-value": ["always"],
    "no-redeclare": 0,
    "import/no-unresolved": 0,
    "import/order": [
      "error",
      {
        groups: ["external", "builtin", ["parent", "sibling"], "index"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    window: true,
    document: true,
    console: true,
    Proxy: true,
    Promise: true,
    Symbol: true,
    __dirname: true,
    Map: true,
    Set: true,
    location: true,
    WeakMap: true,
    WeakSet: true,
    setTimeout: true,
    requestAnimationFrame: true,
    cancelAnimationFrame: true,
    CustomEvent: true,
    navigator: true,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
