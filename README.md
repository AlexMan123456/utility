# @alextheman/utility

This is my personal utility package. It provides custom utility functions that can be used in more or less any TypeScript or JavaScript project, using either the browser or Node environment.

## Installation

To install this into your project, you can do so with the following command:

```bash
npm install @alextheman/utility
```

From there, you may import any of the package's functions.

## Quick start

You can import and use any function or type from the package in the following way:

```typescript
import type { NonUndefined } from "@alextheman/utility";

import { formatDateAndTime } from "@alextheman/utility";

const myVariable: NonUndefined<string> = formatDateAndTime(new Date());
// ...
```

## Contributing

### Creating a function
#### Setup
To create a new function in the package, you must first checkout a new branch. Do **not** commit directly on main.

From there, create the skeleton of the function. This is just the function declaration itself, along with the arguments and their types, along with the return type.

```typescript
function myFunction(firstArg: ArgType): ReturnType {
  // Implementation goes here
}

export default myFunction
```

Note that every function that gets exported from this package **must** have a type annotation. This is also enforced by ESLint. This helps to make the return types extra explicit and more intentional.

Once you have this, export the function from `src/functions/index.ts` so that consumers can import your function. Also export any types you may want to export near the bottom of the file:

```typescript
export { default as addDaysToDate } from "src/functions/addDaysToDate";
export { default as appendSemicolon } from "src/functions/appendSemicolon";
export { default as camelToKebab } from "src/functions/camelToKebab";
export { default as convertFileToBase64 } from "src/functions/convertFileToBase64";
export { default as createFormData } from "src/functions/createFormData";
export { default as fillArray } from "src/functions/fillArray";
export { default as formatDateAndTime } from "src/functions/formatDateAndTime";
// ...
export { default as myFunction } from "src/functions/myFunction";
// ...

export type { MyFunctionOptions } from "src/functions/myFunction";
```

#### Testing

Every function must also be tested. Tests are located in the `tests` folder and follows roughly the same structure as `src`. We use Vitest for our tests, and instead of relying on the global test functions like you might do with Jest, we instead import each test function directly.

Tests are generally structured in the following way:

```typescript
import { describe, expect, test } from "vitest";

import myFunction from "src/functions/myFunction";

describe("myFunction", () => {
  test("Does a thing", () => {
    expect(myFunction("hello")).toBe("world");
  });
  test("Does another thing", () => {
    expect(myFunction("one")).toBe("two");
  });
  // ...
});
```

That is, we wrap all tests around a describe block grouping all related tests to that function together, then each test block tests a specific behaviour.

Every function must at least have one test for the core behaviour of it. Of course, the more tests, the better, but at the very least, test the core behaviour of the function. From there, if you feel like there may be a few edge cases you want to verify the behaviour of, please add tests in for that as well.

Some functions that we create may often end up taking in an array or object. Due to the nature of how JavaScript passes these, we must have non-mutation tests in place to prevent unintended mutation of the input array/object. The best way to do this is to use `Object.freeze()`, as that will ensure that we get an error if the function ever even tries to mutate the input.

```typescript
describe("removeDuplicates", () => {
  describe("Mutation checks", () => {
    test("Does not mutate the original array", () => {
      const inputArray = Object.freeze([1, 1, 2, 3, 4]);
      // since the array has been frozen, this will give a TypeError if it tries to mutate the inputArray.
      removeDuplicates(inputArray);
      expect(inputArray).toEqual([1, 1, 2, 3, 4]);
    });
  });
});
```

Also, if the return type of the function is the same as one or more of the inputs, it's also often helpful to have a test that ensures the output returns a new reference in memory:

```typescript
describe("removeDuplicates", () => {
  describe("Mutation checks", () => {
    test("Returns an array with a new reference in memory", () => {
      const inputArray = [1, 1, 2, 3, 4];
      const outputArray = removeDuplicates(inputArray);
      expect(outputArray).not.toBe(inputArray);
    });
  });
});
```

Note the use of `.toBe()` over `.toEqual()` here. This is because in this case, we are comparing the variable's memory reference to the output's memory reference rather than the actual contents of the array.

### Creating a type

Creating a type works in a similar way to creating a function, in the sense that you create a new file for it, add it to `src/types/index.ts`, and test it. Yes, test it. It is possible to test type declarations using `expectTypeOf`. As an example:

```typescript
import type { OptionalOnCondition } from "src/types";

import { describe, expectTypeOf, test } from "vitest";

describe("OptionalOnCondition", () => {
  test("Resolves to the type of the second type argument if first type argument is true", () => {
    expectTypeOf<OptionalOnCondition<true, string>>().toEqualTypeOf<string>();
  });
  test("Resolves to a union of the second type and undefined if first type argument is false", () => {
    expectTypeOf<OptionalOnCondition<false, string>>().toEqualTypeOf<string | undefined>();
  });
});
```

Note that when you actually run the tests using `npm test`, the tests will always pass even if the logic is incorrect. This is because type tests run with the TypeScript compiler so it will error in your editor and in linting, but it will never fail in runtime. As such, just remember to be extra careful with these type tests and remember that the actual test results for these show in the editor and not in runtime.

### Publishing

Once you are happy with your changes, commit the changes to your branch, then change the version number. You can do this by running one of `npm run change-major`, `npm run change-minor`, or `npm run change-patch`. Major changes generally correspond to breaking changes (e.g. removing features, changing the build process substantially), minor changes correspond to non-breaking additions/deprecations, and patch changes are for the small things that aren't as noticeable. Note that your change will fail CI if you change the source code but forget to change the version number. From there, after your changes have been approved and merged, the publish script will automatically run, and if you remembered to change the version number, it will pass the publishing action.

Version number changes must also **not** be part of your main commit(s) - they must be their own standalone commit. This helps to make it easier to revert changes if needed - if the version change is part of the main commit, that means that if we need to revert it for whatever reason, the version change also gets reverted, which is not really ideal as it makes re-publishing a bit harder.
