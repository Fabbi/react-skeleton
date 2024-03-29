
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended" // must be the last entry
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["extra-rules" ,"eslint-plugin-react", "unused-imports", "import", "react-refresh", "local"],
  overrides: [{
    files: ["*.ts", "*.tsx"],
    // Your TypeScript files extension
    parserOptions: {
      project: ["./tsconfig.json"] // Specify it only for TypeScript files
    }
  }],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "local/exhaustive-deps": "warn",
    "react-hooks/exhaustive-deps": "off",
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "func-style": ["warn", "expression"],
    "no-unused-vars": "off",

    "import/no-cycle": "error",
    "import/order": "off",
    "unused-imports/no-unused-vars": ["off",
                       {
                         "vars": "all",
                         "varsIgnorePattern": "^_",
                         "args": "after-used",
                         "argsIgnorePattern": "^_"
                       }
                      ],
    "@typescript-eslint/no-unused-vars": "off",

    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [1, {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  }
}
