import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
];
