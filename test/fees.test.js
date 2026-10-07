import { test } from "node:test";
import assert from "node:assert/strict";
import { processingFee } from "../src/fees.js";

test("charges 2.9% + 30c", () => {
  assert.equal(processingFee(10_000), 320);
});

test("rejects non-positive amounts", () => {
  assert.throws(() => processingFee(0), RangeError);
});
