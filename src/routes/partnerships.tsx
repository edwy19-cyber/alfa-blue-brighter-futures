import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, NumberedList, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    pageHead(
      "Partnerships & Impact",
      "How ALFA BLUE proposes to work with NGOs, foundations, sponsors and schools — from needs assessment to programme delivery and impact evaluation.",
    ),
  component: Page,
});

const partners = [
  { title: "NGOs", text: "Community reach and local trust, combined with structured, licensed curricula." },
  { title: "Foundations & development organisations", text: "Programmes designed with clear objectives and evaluation from the outset." },
  { title: "CSR & ESG teams", text: "Credible education initiatives aligned with corporate social commitments." },
  { title: "Schools & education authorities", text: "Practical options for integrating digital and financial skills into learning." },
];

const pathway = [
  { title: "Needs assessment", text: "Understand the community, existing provision, infrastructure and learner needs." },
  { title: "Programme design", text: "Select curriculum, delivery model, educator training and success measures." },
  { title: "Funding", text: "Structure sponsorship, philanthropic or institutional funding for the programme." },
  { title: "Delivery", text: "Implement through authorised partners, with coordination and quality oversight." },
  { title: "Impact evaluation", text: "Measure learning outcomes against agreed indicators and report transparently." },
  { title: "Scale & refine", text: "Use evidence to improve the programme and extend it to new communities." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Partnerships & Impact" title="Working together for inclusive, measurable education" intro="The approach below describes how we envisage collaboration. Completed projects and measured outcomes will be added only once verified." />
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Who we work with" title="Partners we seek" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.title} className="border-t-2 border-brand pt-6">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Proposed pathway" title="From needs assessment to evaluated impact" />
          <div className="mt-14"><NumberedList items={pathway} /></div>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Case studies" title="Future programme results" />
          <p className="placeholder-note mt-8 max-w-2xl">[Placeholder] Case studies and impact data will appear here after programmes have been delivered and evaluated.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
