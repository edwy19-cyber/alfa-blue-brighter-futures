import { describe, expect, it } from "vitest";
import { enquirySchema, looksLikeBot } from "@/lib/enquiry";

const valid = {
  type: "Schools", name: "Jane Doe", organisation: "Example School", email: "jane@example.org",
  message: "We would like to discuss a coding programme.", adultConfirm: true, privacyConsent: true,
  website: "", startedAt: 0,
};

describe("enquiry form", () => {
  it("accepts a complete adult enquiry", () => expect(enquirySchema.safeParse(valid).success).toBe(true));
  it("rejects when the adult confirmation is missing", () =>
    expect(enquirySchema.safeParse({ ...valid, adultConfirm: false }).success).toBe(false));
  it("rejects when the spam trap field is filled", () =>
    expect(enquirySchema.safeParse({ ...valid, website: "spam" }).success).toBe(false));
  it("flags submissions under 3 seconds as bots", () => {
    expect(looksLikeBot(1000, 2000)).toBe(true);
    expect(looksLikeBot(1000, 9000)).toBe(false);
  });
});
