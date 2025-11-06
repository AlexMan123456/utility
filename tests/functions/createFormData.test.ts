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
  test("Stringifies primitive data", () => {
    const formData = createFormData({
      numberKey: 1,
      booleanKey: true,
      stringKey: "Test",
    });
    expect(formData.get("numberKey")).toBe("1");
    expect(formData.get("booleanKey")).toBe("true");
    expect(formData.get("stringKey")).toBe("Test");
  });
  test("Stringifies arrays and objects", () => {
    const formData = createFormData({
      arrayKey: ["Test", "array"],
      objectKey: { test: "object" },
    });
    expect(formData.get("arrayKey")).toBe(JSON.stringify(["Test", "array"]));
    expect(formData.get("objectKey")).toBe(JSON.stringify({ test: "object" }));
  });
  test("Can take a blob", async () => {
    const formData = createFormData({ blobKey: new Blob(["Hello"]) });
    const blob = formData.get("blobKey") as any;
    expect(blob).toBeTruthy();
    expect(String(blob)).toBe("[object Blob]");
  });
  test("Can take a type argument", () => {
    createFormData<{
      firstKey: string;
      secondKey: string;
    }>({
      firstKey: "First property",
      secondKey: "Second property",
    });
  });
  test("Resolves undefined to be an empty string", () => {
    const formData = createFormData({
      undefinedKey: undefined,
    });
    expect(formData.get("undefinedKey")).toBe("");
  });
  test("Resolves null to be an empty string", () => {
    const formData = createFormData({
      nullKey: null,
    });
    expect(formData.get("nullKey")).toBe("");
  });
  test("Stringifies nullables if given that option", () => {
    const data = {
      undefinedKey: undefined,
      nullKey: null,
    };

    const formData = createFormData(data, {
      undefinedResolution: "stringify",
      nullResolution: "stringify",
    });
    expect(formData.get("undefinedKey")).toBe("undefined");
    expect(formData.get("nullKey")).toBe("null");

    const nullableResolutionFormDataTest = createFormData(data, {
      nullableResolution: "stringify",
    });
    expect(nullableResolutionFormDataTest.get("undefinedKey")).toBe("undefined");
    expect(nullableResolutionFormDataTest.get("nullKey")).toBe("null");
  });
  test("Omits nullables if given that option", () => {
    const data = {
      undefinedKey: undefined,
      nullKey: null,
    };

    const formData = createFormData(data, { undefinedResolution: "omit", nullResolution: "omit" });
    expect(formData.get("undefinedKey")).toEqual(null);
    expect(formData.get("nullKey")).toEqual(null);

    const nullableResolutionFormDataTest = createFormData(data, { nullableResolution: "omit" });
    expect(nullableResolutionFormDataTest.get("undefinedKey")).toEqual(null);
    expect(nullableResolutionFormDataTest.get("nullKey")).toEqual(null);
  });
  test("Adds arrays as a repeated property if arrayResolution is set to multiple", () => {
    const data = {
      arrayKey: ["Multiple", "data", "test"],
    };

    const formData = createFormData(data, { arrayResolution: "multiple" });
    expect(formData.getAll("arrayKey")).toEqual(["Multiple", "data", "test"]);
  });
  test("Does not allow non-primitive data (except blobs)", () => {
    const data = {
      arrayKey: ["Multiple", ["data", "test"], undefined, null],
    };

    try {
      createFormData(data, { arrayResolution: "multiple" });
      throw new Error("TEST_FAILED");
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("NON_PRIMITIVE_ARRAY_ITEMS_FOUND");
      } else {
        throw error;
      }
    }
  });
  test("Allow blobs in an array to be resolved with the multiple option", () => {
    const data = [new Blob(["Hello"]), new Blob(["World"])];

    const formData = createFormData({ blobs: data }, { arrayResolution: "multiple" });
    formData.getAll("blobs").forEach((item) => {
      expect(String(item)).toBe("[object Blob]");
    });
  });
  test("Pure JavaScript slop", () => {
    const data = {
      nullKey: null,
    };

    try {
      // @ts-expect-error: Because pure JavaScript users still exist, for some reason
      createFormData(data, { nullableResolution: "slop" });
    } catch (error) {
      if (error instanceof TypeError) {
        expect(error.message).toBe("SLOPPY_PURE_JAVASCRIPT_USER_ERROR");
      } else {
        throw error;
      }
    }
  });
});
