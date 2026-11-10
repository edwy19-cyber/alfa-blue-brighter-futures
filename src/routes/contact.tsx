import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/Blocks";
import { LEGAL_NAME, pageHead, REGISTERED_ADDRESS } from "@/content/site";
import { ENQUIRY_TYPES, enquirySchema } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/enquiry.functions";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact",
      "Institutional enquiries for NGO partnerships, funding and sponsorship, schools and expert collaboration with ALFA BLUE.", "/contact"
    ),
  component: Page,
});

const descriptions: Record<(typeof ENQUIRY_TYPES)[number], string> = {
  "NGO partnership": "Co-develop and deliver programmes in your communities.",
  "Funding & sponsorship": "Support access for underserved students via CSR or philanthropy.",
  Schools: "Explore bringing digital or financial literacy to your students.",
  "Expert collaboration": "Contribute education or finance expertise.",
};

function Page() {
  const { type: initialType } = useSearch({ strict: false }) as { type?: string };
  const [type, setType] = useState<(typeof ENQUIRY_TYPES)[number]>(
    (ENQUIRY_TYPES as readonly string[]).includes(initialType ?? "") ? (initialType as (typeof ENQUIRY_TYPES)[number]) : "NGO partnership",
  );
  const [startedAt] = useState(() => Date.now());
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      type,
      name: f.get("name"),
      organisation: f.get("organisation"),
      role: f.get("role") ?? "",
      email: f.get("email"),
      message: f.get("message"),
      adultConfirm: f.get("adultConfirm") === "on",
      privacyConsent: f.get("privacyConsent") === "on",
      website: f.get("website") ?? "",
      startedAt,
    });
    if (!parsed.success) {
      toast.error("Please complete all required fields (message at least 20 characters) and confirm both checkboxes.");
      return;
    }
    setSending(true);
    try {
      await submitEnquiry({ data: parsed.data });
      setSent(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Discuss a collaboration" intro="This form is intended for adult representatives of organisations. Please choose the enquiry type that best fits." />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <fieldset>
            <legend className="eyebrow">Enquiry type</legend>
            <div className="mt-5 space-y-3">
              {ENQUIRY_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  aria-pressed={type === t}
                  className={`w-full border p-5 text-left transition-colors ${type === t ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-brand"}`}
                >
                  <span className="font-display text-lg">{t}</span>
                  <span className={`mt-1 block text-sm ${type === t ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{descriptions[t]}</span>
                </button>
              ))}
            </div>
            <div className="mt-10 border-t border-border pt-6 text-sm">
              <p className="eyebrow">Registered address</p>
              <p className="mt-3 font-semibold">{LEGAL_NAME}</p>
              <address className="not-italic text-muted-foreground">
                {REGISTERED_ADDRESS.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
            </div>
          </fieldset>

          {sent ? (
            <div className="border border-border bg-secondary p-10">
              <h2 className="text-3xl">Thank you</h2>
              <p className="mt-4 text-muted-foreground">Your enquiry has been received. We aim to respond within a few working days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name *"><Input id="name" name="name" required autoComplete="name" /></Field>
                <Field id="email" label="Work email *"><Input id="email" name="email" type="email" required autoComplete="email" /></Field>
                <Field id="organisation" label="Organisation *"><Input id="organisation" name="organisation" required autoComplete="organization" /></Field>
                <Field id="role" label="Role"><Input id="role" name="role" autoComplete="organization-title" /></Field>
              </div>
              <Field id="message" label={`Message — ${type} *`}><Textarea id="message" name="message" rows={6} required /></Field>
              {/* Honeypot for spam bots */}
              <div className="absolute -left-[9999px]" aria-hidden>
                <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <label className="flex items-start gap-3 text-sm"><input type="checkbox" name="adultConfirm" className="mt-1 accent-primary" /> I confirm I am 18 or over and contacting on behalf of an organisation. *</label>
              <label className="flex items-start gap-3 text-sm"><input type="checkbox" name="privacyConsent" className="mt-1 accent-primary" /> I agree that ALFA BLUE may use these details solely to respond to this enquiry. *</label>
              <p className="text-xs text-muted-foreground">
                Privacy notice: we collect only the details above to reply to your enquiry. We do not collect student data and do not share your information with third parties for marketing. See our{" "}
                <Link to="/privacy" className="font-medium text-primary underline-offset-4 hover:underline">Privacy Statement</Link> for full details.
              </p>
              <Button type="submit" size="lg" disabled={sending}>{sending ? "Sending…" : "Send enquiry"}</Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}
