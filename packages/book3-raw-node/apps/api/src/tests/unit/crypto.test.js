import test from "node:test";
import assert from "node:assert/strict";
import { base64urlJson, hmacSha256, randomToken } from "../../lib/crypto.js";

test("base64urlJson returns url-safe string", () => {
  const out = base64urlJson({ a: 1 });
  assert.ok(!out.includes("+"));
  assert.ok(!out.includes("/"));
  assert.ok(!out.includes("="));
});

test("hmacSha256 is deterministic", () => {
  assert.equal(
    hmacSha256("hello", "secret"),
    hmacSha256("hello", "secret")
  );
});

test("randomToken generates different values", () => {
  assert.notEqual(randomToken(), randomToken());
});
