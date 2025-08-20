import { describe, expect, test, vi } from "vitest";

import convertFileToBase64 from "src/convertFileToBase64";

describe("convertFileToBase64", () => {
  test("Converts a file to base 64 string", async () => {
    const file = new File(["Hello world!"], "test-file.pdf", {
      type: "application/pdf",
    });
    const output = await convertFileToBase64(file);

    // Check that it resolves to a base 64 string specifically
    expect(output).toMatch(/^data:application\/pdf;base64,/);

    // Now check that the given base64 string corresponds to the original file
    const decodedOutput = atob(output.split(",")[1]);
    expect(decodedOutput).toBe("Hello world!");
  });
  test("Throws an error if file reading fails", async () => {
    const file = new File([""], "broken_file.pdf", { type: "application/pdf" });

    vi.stubGlobal(
      "FileReader",
      class MockFileReader extends FileReader {
        onload: ((this: FileReader, event: ProgressEvent) => any) | null = null;
        onerror: ((this: FileReader, event: ProgressEvent) => any) | null = null;

        readAsDataURL = () => {
          queueMicrotask(() => {
            this.onerror?.(new ProgressEvent("error"));
          });
        };
      },
    );

    try {
      await convertFileToBase64(file);
      throw new Error("TEST_FAILED");
    } catch (error: unknown) {
      if (error instanceof Error) {
        expect(error.message).toBe("FILE_READER_ERROR");
      }
    }
  });
});
