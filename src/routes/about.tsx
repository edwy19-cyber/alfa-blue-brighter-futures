import { createFileRoute } from "@tanstack/react-router";
import portraitAsset from "@/assets/ahmed-edwy-portrait.jpg.asset.json";
import { Link } from "@tanstack/react-router";
import { CtaBand, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About & Expertise",
      "ALFA BLUE's strategic advisory and partnership-development role, its leadership and its work connecting curriculum providers, delivery organisations and funders.", "/about"
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
      <section className="bg-deep">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">About ALFA BLUE</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">Strategic advice and partnership development for education</h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">ALFA BLUE Management Consulting is a commercially operated company. We combine consulting experience with a commitment to inclusive education and long-term social benefit.</p>
          </div>
          <img src="/images/office-meeting-room.jpg" alt="Modern meeting room overlooking a city skyline at sunset" width={1291} height={924} className="aspect-[4/3] w-full rounded-sm object-cover" />
        </div>
      </section>
      <section className="section">
        <div className="container-x mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our vision</p>
          <p className="mt-6 font-display text-2xl leading-snug md:text-4xl">To build a brighter, more inclusive future by preparing the next generation with the digital skills and financial literacy they need to thrive.</p>
          <p className="mt-6 text-lg text-muted-foreground">Every young learner should have the confidence to code, create, and take part fully in tomorrow's economy.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Our role" title="Connecting the people who make programmes work" />
            <div className="mt-6 space-y-5 text-muted-foreground">
              <p>We advise on and develop education programmes, coordinate between curriculum providers and delivery organisations, and help open access to new markets and communities.</p>
              <p>We are not a registered NGO or charitable foundation. Our commercial model allows us to work flexibly with non-profit, public and private partners alike.</p>
            </div>
          </div>
          <img src="/images/partners-collaboration-meeting.jpg" alt="Diverse educators, partners and students collaborating around a conference table" width={1672} height={941} className="aspect-[4/3] w-full object-cover" />
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
                  <a href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on LinkedIn`} className="mt-5 inline-block rounded-full transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <img src="/images/linkedin-icon.png" alt="" width={32} height={32} className="h-8 w-auto" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article className="bg-card p-8">
              <h3 className="text-xl">Advisory Board</h3>
              <p className="mt-4 text-sm text-muted-foreground">Advisory board in formation, comprising experts in education, child protection and corporate social responsibility.</p>
            </article>
            <article className="bg-card p-8">
              <h3 className="text-xl">Corporate information</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>ALFA BLUE Management Consulting LLC – registered in the State of Delaware, USA, 16192 Coastal Highway, Lewes, Delaware 19958.</p>
                <p>A commercially operated programme development and partnership company. ALFA BLUE does not solicit, receive or manage donations.</p>
                <p>Committed to ethical business, anti-corruption, data protection and safeguarding – see our <Link to="/privacy" className="text-primary underline underline-offset-4">Privacy Statement</Link> and <Link to="/safeguarding" className="text-primary underline underline-offset-4">Safeguarding Policy</Link>.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
