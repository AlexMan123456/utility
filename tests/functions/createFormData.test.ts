import { describe, expect, test } from "vitest";

import { createFormData } from "src/functions";

describe("createFormData", () => {
  test("Creates FormData given an object", () => {
    const formData = createFormData({
      firstKey: "First property",
      secondKey: "Second property",
    });
    expect(formData.get("firstKey")).toBe("First property");
    expect(formData.get("secondKey")).toBe("Second property");
  });
  test("Stringifies arrays and objects", () => {
    const formData = createFormData({
      arrayTest: ["Test", "array"],
      objectTest: { test: "object" },
    });
    expect(formData.get("arrayTest")).toBe(JSON.stringify(["Test", "array"]));
    expect(formData.get("objectTest")).toBe(JSON.stringify({ test: "object" }));
  });
  test("Can take a blob", async () => {
    const formData = createFormData({ blobTest: new Blob(["Hello"]) });
    const blob = formData.get("blobTest") as any;
    expect(blob).toBeTruthy();
    expect(String(blob)).toBe("[object Blob]");
  });
});
