import { describe, expect, test } from "vitest";

import { normaliseIndents } from "src/functions";
import stringifyDotenv from "src/functions/miscellaneous/stringifyDotenv";
import { DataError } from "src/types";

describe("stringifyDotenv", () => {
  test("Stringifies an object into .env file format, using double-quotes by default", () => {
    expect(
      stringifyDotenv({
        HELLO: "world",
        NODE_ENV: "test",
      }),
    ).toBe(normaliseIndents`
            HELLO="world"
            NODE_ENV="test"
        `);
  });

  test("Stringifies an object into .env file format, using single-quotes if that option is specified", () => {
    expect(
      stringifyDotenv(
        {
          HELLO: "world",
          NODE_ENV: "test",
        },
        {
          quoteStyle: "single",
        },
      ),
    ).toBe(normaliseIndents`
            HELLO='world'
            NODE_ENV='test'
        `);
  });

  test("Stringifies an object into .env file format, using no quotes if that option is specified", () => {
    expect(
      stringifyDotenv(
        {
          HELLO: "world",
          NODE_ENV: "test",
        },
        {
          quoteStyle: "none",
        },
      ),
    ).toBe(normaliseIndents`
            HELLO=world
            NODE_ENV=test
        `);
  });

  test("If quoteStyle is none, reject values with spaces or #", () => {
    try {
      stringifyDotenv(
        {
          HELLO: "my world",
          INVALID: "Hello #",
        },
        { quoteStyle: "none" },
      );
      throw new Error("DID_NOT_THROW");
    } catch (error) {
      if (DataError.check(error)) {
        expect(error.data).toEqual({ HELLO: "my world" });
        expect(error.code).toBe("INCOMPATIBLE_QUOTE_STYLE");
      } else {
        throw error;
      }
    }
  });

  test.each<"double" | "single">(["double", "single"])(
    "Escape %s-quotes characters correctly",
    (quoteStyle) => {
      const quoteCharacter = { double: '"', single: "'" }[quoteStyle];

      expect(
        stringifyDotenv(
          {
            HELLO: `world ${quoteCharacter}test${quoteCharacter}`,
          },
          { quoteStyle },
        ),
      ).toBe(normaliseIndents`
            HELLO=${quoteCharacter}world \\${quoteCharacter}test\\${quoteCharacter}${quoteCharacter}
        `);
    },
  );

  test("Escapes newline characters", () => {
    expect(
      stringifyDotenv({
        HELLO: normaliseIndents`
            world
            testing
            newlines`,
      }),
    ).toBe(`${String.raw`HELLO="world\ntesting\nnewlines"`}\n`);
  });
});
