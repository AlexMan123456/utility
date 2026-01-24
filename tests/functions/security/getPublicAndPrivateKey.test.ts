import type { CallReturnType } from "src/types";

import { describe, expectTypeOf, test } from "vitest";

import { getPublicAndPrivateKey } from "src/functions";

type HexKeys = CallReturnType<typeof getPublicAndPrivateKey, "hex">;
type Base64Keys = CallReturnType<typeof getPublicAndPrivateKey, "base64">;
type TextKeys = CallReturnType<typeof getPublicAndPrivateKey, "text">;

describe("getPublicAndPrivateKey", () => {
  test("If input is `uint8array` or `undefined`, the resulting key types should be `Uint8Array`", () => {
    const keysGivenUndefined = getPublicAndPrivateKey();
    expectTypeOf(keysGivenUndefined.publicKey).toEqualTypeOf<Uint8Array>();
    expectTypeOf(keysGivenUndefined.privateKey).toEqualTypeOf<Uint8Array>();

    const keysGivenUint8Array = getPublicAndPrivateKey("uint8array");
    expectTypeOf(keysGivenUint8Array.publicKey).toEqualTypeOf<Uint8Array>();
    expectTypeOf(keysGivenUint8Array.privateKey).toEqualTypeOf<Uint8Array>();
  });
  test("If input is `hex`, or `base64`, the resulting key types should be string", () => {
    expectTypeOf<HexKeys["publicKey"]>().toEqualTypeOf<string>();
    expectTypeOf<HexKeys["privateKey"]>().toEqualTypeOf<string>();

    expectTypeOf<Base64Keys["publicKey"]>().toEqualTypeOf<string>();
    expectTypeOf<Base64Keys["privateKey"]>().toEqualTypeOf<string>();

    expectTypeOf<TextKeys["publicKey"]>().toEqualTypeOf<string>();
    expectTypeOf<TextKeys["privateKey"]>().toEqualTypeOf<string>();
  });
});
