import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About & Expertise",
      "ALFA BLUE's strategic advisory and partnership-development role, its leadership and its collaboration with education and finance professionals.",
    ),
  component: Page,
});

// Replace with verified biographies once publication consent is received.
const people = [
  { name: "[Name]", role: "Founder & Managing Director", bio: "[Biography to be provided and verified]" },
  { name: "[Name]", role: "Education Expert", bio: "[Biography to be provided — publication consent required]" },
  { name: "[Name]", role: "Finance Expert", bio: "[Biography to be provided — publication consent required]" },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="About ALFA BLUE" title="Strategic advice and partnership development for education" intro="ALFA BLUE Management Consulting is a commercially operated company. We combine consulting experience with a commitment to inclusive education and measurable social impact." />
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <SectionHead eyebrow="Our role" title="Connecting the people who make programmes work" />
          <div className="space-y-5 text-muted-foreground">
            <p>We advise on and develop education programmes, coordinate between curriculum providers and delivery organisations, and help open access to new markets and communities.</p>
            <p>We are not a registered NGO or charitable foundation. Our commercial model allows us to work flexibly with non-profit, public and private partners alike.</p>
            <p>Our work draws on collaboration with international education and finance professionals, who contribute subject-matter expertise to programme design.</p>
          </div>
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Leadership & experts" title="The people behind our work" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {people.map((p, i) => (
              <div key={i} className="bg-card p-8">
                <div className="flex h-20 w-20 items-center justify-center bg-brand-soft font-display text-2xl text-primary" aria-hidden>{p.name.slice(1, 2)}</div>
                <h3 className="mt-6 text-xl">{p.name}</h3>
                <p className="eyebrow mt-1">{p.role}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Collaborate as an expert" text="Education and finance professionals interested in contributing are warmly invited to get in touch." />
    </>
  );
}
