import convertFileToBase64 from "src/convert-file-to-base-64";
import { describe, expect, test } from "vitest";

describe("convertFileToBase64", () => {
  test("Converts a file to base 64 string", async () => {
    const file = new File(["Hello world!"], "test-file.txt", {
      type: "text/plain",
    });
    const output = await convertFileToBase64(file);

    // Check that it resolves to a base 64 string specifically
    expect(output).toMatch(/^data:text\/plain;base64,/);

    // Now check that the given base64 string corresponds to the original file
    const decodedOutput = atob(output.split(",")[1]);
    expect(decodedOutput).toBe("Hello world!");
  });
});
