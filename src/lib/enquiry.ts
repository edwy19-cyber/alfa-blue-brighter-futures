import { z } from "zod";

export const ENQUIRY_TYPES = ["NGO partnership", "Funding & sponsorship", "Schools", "Expert collaboration"] as const;

export const enquirySchema = z.object({
  type: z.enum(ENQUIRY_TYPES),
  name: z.string().trim().min(2).max(120),
  organisation: z.string().trim().min(2).max(160),
  role: z.string().trim().max(120).optional().default(""),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(20).max(4000),
  adultConfirm: z.literal(true),
  privacyConsent: z.literal(true),
  website: z.string().max(0), // honeypot: must stay empty
  startedAt: z.number(),
});

export type Enquiry = z.infer<typeof enquirySchema>;

/** Rejects submissions completed faster than a human could (bots). */
export function looksLikeBot(startedAt: number, now = Date.now()) {
  return now - startedAt < 3000;
}
