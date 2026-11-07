import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/ahmed-edwy-portrait.jpg.asset.json";
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

// Add further experts only once agreements and publication consent are secured.
const people = [
  {
    name: "Ahmed Edwy",
    role: "Founder and Managing Partner",
    bio: "Ahmed Edwy is a senior executive and entrepreneur with over 25 years of experience spanning corporate banking, financial services and strategic business development. As Founder and Managing Partner of ALFA BLUE, he applies his financial background and entrepreneurial perspective to expanding international partnerships in digital education and practical financial literacy for young people.",
    linkedin: "https://www.linkedin.com/in/ahmed-edwy-76695529/",
    photo: portraitAsset.url,
  },
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
          <SectionHead eyebrow="Leadership" title="The People Behind Our Work" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {people.map((p) => (
              <article key={p.name} className="flex flex-col gap-6 bg-card p-8 sm:flex-row sm:gap-8">
                <img src={p.photo} alt={`Portrait of ${p.name}`} width={236} height={236} className="h-40 w-40 shrink-0 border border-border object-cover sm:h-48 sm:w-48" />
                <div>
                  <h3 className="text-xl">{p.name}</h3>
                  <p className="eyebrow mt-1">{p.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{p.bio}</p>
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                    View LinkedIn profile
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Collaborate as an expert" text="Education and finance professionals interested in contributing are warmly invited to get in touch." />
    </>
  );
}
