import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

// The contact form pre-selects an enquiry type from the `type` query parameter, and it
// only accepts values that exist in ENQUIRY_TYPES (src/lib/enquiry.ts). The form's
// sponsorship option is "Funding & sponsorship" — a value outside that list would be
// silently ignored and the form would open on its default option instead.
export const SPONSORSHIP_ENQUIRY_TYPE = "Funding & sponsorship";

export const Route = createFileRoute("/how-sponsorship-works")({
  head: () =>
    pageHead(
      "How Sponsorship Works",
      "How companies and foundations support digital and financial literacy for young people: ALFA BLUE presents suitable programmes, introduces sponsors to vetted NGO delivery partners and coordinates the collaboration.",
      "/how-sponsorship-works",
    ),
  component: Page,
});

const steps = [
  {
    title: "Connect",
    text: "ALFA BLUE presents suitable programmes and introduces the sponsor to a vetted NGO delivery partner.",
  },
  {
    title: "Agree",
    text: "The sponsor and the NGO agree the programme scope and funding directly between themselves.",
  },
  {
    title: "Deliver",
    text: "The NGO delivers the programme to students and reports to the sponsor.",
  },
];

const provides = [
  "Programme design and curriculum partnerships",
  "Identification of vetted NGO delivery partners",
  "Alignment of the programme with the sponsor's CSR objectives",
  "Coordination between all parties",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="How Sponsorship Works"
        intro="We help companies and foundations support digital and financial literacy for young people by connecting them with established NGO partners and ready-to-deliver programmes."
      />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="How it works" title="Three steps from introduction to delivery" />
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-brand pt-6">
                <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-2xl">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <SectionHead eyebrow="Our role" title="What ALFA BLUE provides" />
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {provides.map((p) => (
                <li key={p} className="flex items-start gap-4 py-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start border border-l-2 border-border border-l-brand bg-card p-8">
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 shrink-0 text-brand" aria-hidden />
              <h2 className="text-xl">What ALFA BLUE does not do</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We do not receive, hold or manage donations or sponsorship funds, and we do not deliver
              programmes directly to students.
            </p>
          </aside>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="rule" />
            <h2 className="mt-6 text-3xl md:text-4xl">Tell us what you would like to support</h2>
            <p className="mt-4 text-muted-foreground">
              We will present suitable programmes and introduce you to a vetted NGO delivery partner.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact" search={{ type: SPONSORSHIP_ENQUIRY_TYPE }}>
              Explore a sponsorship opportunity
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
