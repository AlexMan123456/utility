import plugin from "@alextheman/eslint-plugin";

export default [
  ...plugin.configs.alexTypeScriptBase,
  {
    rules: {
      /* Since the entire purpose of this package is to provide functions to be used by others, it's best to be explicit about the exact return type
            we expect from them. It's not as important in most other packages since they tend to be more predictable, but for utility, where the entire
            purpose of the package is functions, it's best to have the return type specified. */
      "@typescript-eslint/explicit-module-boundary-types": "error",
    },
  },
];
