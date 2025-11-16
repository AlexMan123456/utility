import { describe, expect, test } from "vitest";

import { stripIndents } from "src/index";

describe("stripIndents", () => {
  test("Strips weird indents when creating new lines in template strings", () => {
    expect(stripIndents`Hello
            world`).toBe("Hello\nworld");
  });
  test("Maintains intentional indents", () => {
    expect(stripIndents`Hello
                world`).toBe("Hello\n    world");
  });
  test("Deals with empty lines", () => {
    expect(stripIndents`Hello
            
            world`).toBe("Hello\n\nworld");
  });
  test("Deals with interpolations", () => {
    expect(stripIndents`Hello
            world
            ${"An interpolation"}
                ${1} indent here
                    ${2} indents here
                    An indented line with ${1} interpolation in the middle`).toBe(
      "Hello\nworld\nAn interpolation\n    1 indent here\n        2 indents here\n        An indented line with 1 interpolation in the middle",
    );
  });
});
