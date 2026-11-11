import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, GraduationCap, Info, Layers, LineChart } from "lucide-react";
import { PageHero, SectionHead } from "@/components/site/Blocks";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/approach")({
  head: () =>
    pageHead(
      "Our Approach",
      "How ALFA BLUE designs structured AI, coding and financial literacy programmes and connects them with the partners who deliver and support them.",
      "/approach",
    ),
  component: Page,
});

const steps = [
  {
    title: "Design",
    text: "ALFA BLUE develops the programme model with certified curriculum providers.",
  },
  {
    title: "Partner",
    text: "ALFA BLUE connects the programme with established local NGOs and schools.",
  },
  {
    title: "Support",
    text: "Sponsors fund the delivering NGO directly, under their own agreement.",
  },
  {
    title: "Deliver",
    text: "The NGO delivers the programme to students and reports to its sponsors.",
  },
];

const standards = [
  {
    icon: BadgeCheck,
    title: "Certified curricula",
    text: "Built on curricula and platforms certified by recognised international education bodies.",
  },
  {
    icon: Layers,
    title: "Age-appropriate design",
    text: "Content structured by age group and skill level, from first concepts to advanced projects.",
  },
  {
    icon: LineChart,
    title: "Built-in assessment tools",
    text: "Progress assessments that delivery partners can use to track learning.",
  },
  {
    icon: GraduationCap,
    title: "Educator enablement",
    text: "Delivery partners' educators receive programme guides and onboarding from the curriculum provider.",
  },
];

// Official UN SDG colours (numbers only, no UN emblem).
const sdgs = [
  { number: 4, colour: "#C5192D", title: "Quality Education", detail: "Targets 4.4 and 4.5" },
  { number: 5, colour: "#FF3A21", title: "Gender Equality", detail: null },
  { number: 8, colour: "#A21942", title: "Decent Work and Economic Growth", detail: "Target 8.6" },
  { number: 10, colour: "#DD1367", title: "Reduced Inequalities", detail: null },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="Designed for Lasting Learning Outcomes"
        intro="We design structured AI, coding and financial literacy programmes and connect them with the partners who deliver and support them."
      />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="The model" title="How a programme comes together" />
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative border border-border bg-card p-8">
                <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-brand lg:block"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Quality" title="Programme Quality Standards" />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {standards.map((s) => (
              <article key={s.title} className="bg-card p-8">
                <s.icon className="h-7 w-7 text-brand" aria-hidden="true" />
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            Monitoring and reporting on programme results are the responsibility of the delivering NGO, in line with
            its agreements with its sponsors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Global goals" title="Programmes designed to contribute to" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sdgs.map((s) => (
              <article key={s.number} className="border border-border bg-card">
                <div
                  className="flex h-20 items-center px-6 font-display text-3xl text-white"
                  style={{ backgroundColor: s.colour }}
                >
                  SDG {s.number}
                </div>
                <div className="p-6">
                  <h3 className="text-lg leading-snug">{s.title}</h3>
                  {s.detail && <p className="mt-2 text-sm text-muted-foreground">{s.detail}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x">
          <div className="flex gap-4 border border-border border-l-2 border-l-brand bg-secondary p-8">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              ALFA BLUE does not receive or manage programme funds. Delivery, monitoring and reporting to sponsors are
              carried out by our NGO partners.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-border pt-12 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="rule" />
              <h2 className="mt-6 text-3xl md:text-4xl">Discuss a programme</h2>
              <p className="mt-4 text-muted-foreground">
                Tell us about your community, your students or your CSR objectives, and we will explore how a
                programme could work for you.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Discuss a programme</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
