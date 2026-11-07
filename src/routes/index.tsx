import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-classroom.jpg";
import coding from "@/assets/coding-students.jpg";
import finance from "@/assets/financial-classroom.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Empowering the Next Generation Through Digital and Financial Literacy",
      "ALFA BLUE builds education partnerships that widen access to AI, coding, digital and financial literacy for school-age students.",
    ),
  component: Index,
});

const delivery = [
  { who: "Curriculum providers", what: "Supply specialist content and platforms under their own licensing terms." },
  { who: "ALFA BLUE", what: "Develops programmes, coordinates partners and facilitates market access." },
  { who: "NGOs & schools", what: "Reach students and deliver locally with authorised educators." },
  { who: "Funders & sponsors", what: "Enable access for underserved communities through CSR and philanthropy." },
];

function Index() {
  return (
    <>
      <section className="bg-deep relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">ALFA BLUE Management Consulting</p>
            <h1 className="mt-6 text-4xl leading-[1.05] md:text-6xl">
              Empowering the next generation through digital and financial literacy.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
              We bring together curriculum providers, NGOs, schools and funders to widen access to the skills
              every student needs — with a particular focus on underserved communities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="brand"><a href="#initiatives">Explore Our Initiatives</a></Button>
              <Button asChild size="lg" variant="outline-light" className="rounded-sm"><Link to="/contact">Partner With Us</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Students working on laptops with their teacher in a classroom" width={1600} height={1008} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 bg-brand md:block" aria-hidden />
          </div>
        </div>
      </section>

      <section id="initiatives" className="section">
        <div className="container-x">
          <SectionHead eyebrow="Two initiatives" title="Essential skills for the 21st century" />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              { img: coding, to: "/ai-coding-literacy" as const, tag: "Partnership model", title: "AI, Computer Coding & Digital Literacy", text: "Facilitating international partnerships that bring high-quality AI, coding and digital literacy education to school-age students, with curriculum supplied by Logiscool." },
              { img: finance, to: "/financial-literacy" as const, tag: "Under development", title: "Financial Literacy for Life", text: "An age-appropriate concept introducing budgeting, saving, investing and responsible decision-making as an essential life skill for every student." },
            ].map((p) => (
              <article key={p.to} className="group">
                <div className="overflow-hidden">
                  <img src={p.img} alt="" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <span className={p.tag === "Under development" ? "status-tag mt-6" : "eyebrow mt-6 inline-block"}>{p.tag}</span>
                <h3 className="mt-4 text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.text}</p>
                <Link to={p.to} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <SectionHead eyebrow="Delivery model" title="An institutional model built on collaboration" intro="ALFA BLUE is a commercially operated company, not a charity. Our role is to connect the right partners and make programmes workable on the ground." />
          <ul className="divide-y divide-border border-y border-border">
            {delivery.map((d) => (
              <li key={d.who} className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr]">
                <span className="font-display text-xl">{d.who}</span>
                <span className="text-muted-foreground">{d.what}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Results & case studies" title="Programme outcomes will be published here" />
          <p className="placeholder-note mt-8 max-w-2xl">
            [Placeholder] This space is reserved for verified programme results and case studies once available. No figures are shown until they have been independently measured.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
