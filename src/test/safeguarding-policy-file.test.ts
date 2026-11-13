import { readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The safeguarding page's download button links to /docs/safeguarding-policy.pdf, which Vite
// serves from public/docs. If that file is missing the button 404s, so the file itself is the
// thing worth checking. Vitest runs from the project root, and import.meta.url is not a file
// URL under jsdom, so the path is resolved from the working directory.
const PDF_PATH = resolve(process.cwd(), "public/docs/safeguarding-policy.pdf");

describe("Safeguarding policy download", () => {
  it("ships the policy file the download button links to", () => {
    expect(existsSync(PDF_PATH)).toBe(true);
  });

  it("is a real multi-page PDF, not an empty placeholder", () => {
    const bytes = readFileSync(PDF_PATH);
    expect(bytes.subarray(0, 5).toString("latin1")).toBe("%PDF-");
    expect(statSync(PDF_PATH).size).toBeGreaterThan(50_000);
    // Every page of an A4 policy carries a /Type /Page object.
    const text = bytes.toString("latin1");
    const pageCount = (text.match(/\/Type\s*\/Page[^s]/g) || []).length;
    expect(pageCount).toBeGreaterThanOrEqual(8);
  });
});
