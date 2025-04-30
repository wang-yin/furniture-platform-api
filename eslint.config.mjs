import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier,
    },
    extends: ["js/recommended", eslintConfigPrettier],
    rules: {
      quotes: "off",
      "prettier/prettier": "error",
      "no-console": "off",
    },
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ["**/*.js"],
    rules: {
      "consistent-return": "off",
      "no-underscore-dangle": "off",
    },
  },
]);
