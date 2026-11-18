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

/**
 * Formspree form ID (the part after https://formspree.io/f/). Formspree emails each
 * enquiry to ReachUs@alfablueme.com and keeps a copy in its online inbox. Sent from
 * the browser because the Hostinger build is static, with no server behind it.
 */
export const FORMSPREE_FORM_ID = "";

export async function sendEnquiry(data: Enquiry): Promise<void> {
  if (looksLikeBot(data.startedAt)) return; // silently drop
  if (!FORMSPREE_FORM_ID) throw new Error("Formspree form ID not set");
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Website enquiry: ${data.type} – ${data.organisation}`,
      _replyto: data.email,
      "Enquiry type": data.type,
      Name: data.name,
      Organisation: data.organisation,
      Role: data.role,
      email: data.email,
      Message: data.message,
    }),
  });
  if (!res.ok) throw new Error(`Formspree error ${res.status}`);
}
