import { describe, expect, it } from "vitest";
import { readFileSync, statSync } from "node:fs";

describe("safeguarding policy download", () => {
  it("is a real PDF file in the repository", () => {
    const path = "public/docs/safeguarding-policy.pdf";
    expect(statSync(path).size).toBe(385777);
    expect(readFileSync(path).subarray(0, 4).toString()).toBe("%PDF");
  });
});
