import { describe, expect, test } from "vitest";

import { normaliseImportPath, normalizeImportPath } from "src/functions";

describe("normalizeImportPath", () => {
  test("Normalises paths based on the path.posix.normalize() output if path does not start with ./", () => {
    expect(normalizeImportPath("src/types/../functions//normalizeImportPath")).toBe(
      "src/functions/normalizeImportPath",
    );
  });
  test("Preserves ./", () => {
    expect(normalizeImportPath("./functions/normalizeImportPath")).toBe(
      "./functions/normalizeImportPath",
    );
  });
  test("Can also use normaliseImportPath because I'm gonna be pedantic about spelling so you don't have to", () => {
    expect(normaliseImportPath("src/types/../functions//normaliseImportPath")).toBe(
      "src/functions/normaliseImportPath",
    );
  });
});
