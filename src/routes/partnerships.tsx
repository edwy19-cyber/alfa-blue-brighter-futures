import { createFileRoute, Link } from "@tanstack/react-router";
import meetingAsset from "@/assets/partnerships-meeting.png.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand, NumberedList, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/partnerships")({
  head: () =>
    pageHead(
      "Partnerships & Impact",
      "How ALFA BLUE proposes to work with NGOs, foundations, sponsors and schools — from needs assessment to programme delivery and impact evaluation.", "/partnerships"
    ),
  component: Page,
});

const partners = [
  {
    title: "NGOs",
    profile: "Community and youth organisations, local and international, with trusted relationships in the communities they serve and a mission to widen access to quality education.",
    offer: "A certified curriculum, educator training and programme coordination, so their reach becomes structured, measurable learning.",
    enquiry: "NGO partnership",
  },
  {
    title: "Foundations & development organisations",
    profile: "Philanthropic foundations, development agencies and multilateral programmes focused on education, digital inclusion, youth employability or gender equity.",
    offer: "Programmes designed with clear objectives, indicators and independent evaluation from the outset, with transparent reporting.",
    enquiry: "Funding & sponsorship",
  },
  {
    title: "CSR & ESG teams",
    profile: "Companies whose social-impact, ESG or community-investment strategy includes education, digital skills or financial literacy, often in the markets where they operate.",
    offer: "Credible, certified initiatives aligned with corporate commitments and the UN Sustainable Development Goals (SDG 4, Quality Education), with impact reports to stakeholders.",
    enquiry: "Funding & sponsorship",
  },
  {
    title: "Schools & education authorities",
    profile: "Public and private schools, school networks and ministries or regional authorities seeking to introduce or strengthen digital and financial literacy.",
    offer: "Practical integration options (in-timetable, after-school or blended), teacher training and age-appropriate learning pathways.",
    enquiry: "Schools",
  },
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
      <section className="bg-deep">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">Partnerships & Impact</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">Working together to build the skills that lead to inclusion</h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">The approach below describes how we envisage collaboration. Completed projects and measured outcomes will be added only once verified.</p>
          </div>
          <img src="/images/inclusive-education-collaboration.jpg" alt="Diverse group of educators and partners collaborating around a table" width={1600} height={900} className="aspect-[4/3] w-full rounded-sm object-cover" />
        </div>
      </section>
      <section className="border-b border-border bg-secondary">
        <div className="container-x flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-6">
          <p className="eyebrow shrink-0">Learn more</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="rounded-sm"><Link to="/approach">Our Approach</Link></Button>
            <Button asChild variant="outline" className="rounded-sm"><Link to="/how-sponsorship-works">How Sponsorship Works</Link></Button>
            <Button asChild variant="outline" className="rounded-sm"><Link to="/safeguarding">Safeguarding</Link></Button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <img src={meetingAsset.url} alt="Education partners and community organisations collaborating on an inclusive education programme" width={1672} height={941} className="aspect-[16/9] w-full object-cover" />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container-x">
          <SectionHead eyebrow="Who we work with" title="Partners we seek" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {partners.map((p) => (
              <div key={p.title} className="flex flex-col border-t-2 border-brand pt-6">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.profile}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">What we offer together</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.offer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild size="lg"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Proposed pathway" title="From needs assessment to evaluated impact" />
          <div className="mt-14"><NumberedList items={pathway} /></div>
          <div className="mt-12 border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl">In cooperation with an AI learning-analytics partner</h3>
            <p className="mt-4 text-muted-foreground">
              Needs assessment and impact evaluation are supported by a K-12 education-technology partner based in Asia, whose patent-pending AI engine runs adaptive diagnostic assessments to identify each student's individual learning gaps and recommend personalised remediation. Its platform gives teachers, school leaders and parents clear, data-driven insight into progress, and is used by leading private schools.
            </p>
            <p className="mt-4 text-muted-foreground">
              This allows us to establish a reliable baseline before a programme starts and to measure learning gains against agreed indicators at the end.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
