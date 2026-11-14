import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? files(join(dir, e.name)) : [join(dir, e.name)],
  );
}

describe("site media", () => {
  const sources = files("src").filter((f) => /\.tsx?$/.test(f) && !f.includes("/test/"));
  it("every /images or /docs path used in code exists in public/", () => {
    for (const f of sources) {
      for (const m of readFileSync(f, "utf8").matchAll(/["'`](\/(?:images|docs)\/[^"'`]+)["'`]/g)) {
        expect(existsSync(join("public", m[1])), `${m[1]} in ${f}`).toBe(true);
      }
    }
  });
  it("no page relies on hosted-only .asset.json pointers", () => {
    for (const f of sources) expect(readFileSync(f, "utf8"), f).not.toMatch(/\.asset\.json/);
  });
});
