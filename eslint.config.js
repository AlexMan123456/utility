import plugin from "@alextheman/eslint-plugin";

export default [
  ...plugin.configs["combined/typescript-package"],
  ...plugin.configs["personal/utility"],
];
