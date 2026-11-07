import { createServerFn } from "@tanstack/react-start";
import { enquirySchema, looksLikeBot } from "./enquiry";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    if (looksLikeBot(data.startedAt)) return { ok: true }; // silently drop
    // TODO: deliver to inbox / store once email or database is connected.
    console.log("[enquiry]", data.type, data.organisation, data.email);
    return { ok: true };
  });
