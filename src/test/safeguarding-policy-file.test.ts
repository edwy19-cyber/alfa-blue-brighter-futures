import { describe, expect, it } from "vitest";
import policyPdf from "@/assets/safeguarding-policy.pdf.asset.json";

describe("Safeguarding policy download", () => {
  it("references the uploaded PDF through the asset service", () => {
    expect(policyPdf.url).toMatch(/^\/__l5e\/assets-v1\/.+\/safeguarding-policy\.pdf$/);
    expect(policyPdf.content_type).toBe("application/pdf");
  });

  it("retains the complete uploaded file size", () => {
    expect(policyPdf.size).toBe(385777);
  });
});
