import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ImageOff, ShieldCheck, Smartphone, UserCheck } from "lucide-react";
import { PageHero, SectionHead } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/content/site";
import policyPdf from "@/assets/safeguarding-policy.pdf.asset.json";

export const Route = createFileRoute("/safeguarding")({
  head: () =>
    pageHead(
      "Safeguarding & Child Protection",
      "How ALFA BLUE protects children through partner due diligence, online safety, data and image rules and a strict code of conduct.",
      "/safeguarding",
    ),
  component: Page,
});

// The approved uploaded policy is served through the asset pointer.
const POLICY_PDF_AVAILABLE = true;

const protections = [
  {
    icon: ShieldCheck,
    title: "Partner due diligence",
    text: "We check every delivery partner's safeguarding policy, staff vetting, training and reporting procedures before any collaboration.",
  },
  {
    icon: Smartphone,
    title: "Online safety",
    text: "Digital platforms must be age-appropriate, secure and free of advertising aimed at children.",
  },
  {
    icon: ImageOff,
    title: "Data and images",
    text: "We receive only anonymised programme information; images are used only with consent obtained by the partner.",
  },
  {
    icon: UserCheck,
    title: "Code of conduct",
    text: "Our team and sponsors attending partner events follow strict conduct rules and are always accompanied by partner staff.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Safeguarding"
        title="Safeguarding & Child Protection"
        intro="Children's safety comes first in every programme, partner and sponsor decision we make."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our commitment" title="Zero tolerance of abuse, exploitation and neglect" />
            <p className="mt-6 text-muted-foreground">
              ALFA BLUE has zero tolerance of abuse, exploitation and neglect. Children's safety comes first in every
              programme, partner and sponsor decision.
            </p>
          </div>
          <div className="border-l-2 border-l-brand bg-secondary p-8">
            <p className="eyebrow">Our role</p>
            <p className="mt-4 font-display text-xl leading-snug md:text-2xl">
              ALFA BLUE does not work directly with children. Programmes are delivered by established NGO partners
              under their own safeguarding policies, which must meet our minimum standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="How we protect children" title="Safeguards built into every partnership" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {protections.map((p) => (
              <article key={p.title} className="bg-card p-8">
                <p.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div className="border-l-2 border-l-brand bg-secondary p-8">
            <p className="eyebrow">Raising a concern</p>
            <p className="mt-4 text-muted-foreground">
              If you have a concern about a child in a programme we support, please contact our Safeguarding Focal
              Point at{" "}
              <a href="mailto:ReachUs@alfablueme.com" className="text-primary underline underline-offset-4">
                ReachUs@alfablueme.com
              </a>
              . Concerns are passed to the delivering partner's safeguarding lead within 24 hours and treated
              confidentially.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <SectionHead eyebrow="Full policy" title="Download our Safeguarding Policy" />
            <div className="mt-8">
              {POLICY_PDF_AVAILABLE ? (
                <Button asChild size="lg">
                  <a href={policyPdf.url} download="safeguarding-policy.pdf">
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                    Download our Safeguarding Policy (PDF)
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" variant="outline" className="rounded-sm">
                  <Link to="/contact">Available on request</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
