import alexBaseConfig from "@alextheman/eslint-config-typescript-base";
import globals from "globals";

export default [
  ...alexBaseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      },
    },
  },
];
