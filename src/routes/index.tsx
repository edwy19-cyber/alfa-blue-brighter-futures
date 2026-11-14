import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-classroom.jpg";
import coding from "@/assets/coding-students.jpg";
import finance from "@/assets/financial-classroom.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead(
      "Empowering the Next Generation Through Digital and Financial Literacy",
      "ALFA BLUE builds education partnerships that widen access to AI, coding, digital and financial literacy for school-age students.",
    );
    const socialTitle = "ALFA BLUE | Digital & Financial Literacy for the Next Generation";
    const socialDescription = "Partnering with NGOs, schools and sponsors to bring AI, coding and financial literacy to K-12 students in underserved communities.";
    const overrides: Record<string, string> = {
      "og:title": socialTitle,
      "twitter:title": socialTitle,
      "og:description": socialDescription,
      "twitter:description": socialDescription,
    };
    return {
      meta: head.meta.map((m) => {
        const key = ("property" in m ? m.property : "name" in m ? m.name : undefined) as string | undefined;
        return key && key in overrides ? { ...m, content: overrides[key] } : m;
      }),
    };
  },
  component: Index,
});

const delivery = [
  { who: "Curriculum providers", what: "Supply specialist content and platforms under their own licensing terms." },
  { who: "ALFA BLUE", what: "Develops programmes, coordinates partners and facilitates market access." },
  { who: "NGOs & schools", what: "Reach students and deliver locally with authorised educators." },
  { who: "Funders & sponsors", what: "Support programmes by funding NGO delivery partners directly, through CSR and philanthropy." },
];

function Index() {
  return (
    <>
      <section className="bg-deep relative overflow-hidden">
        <div className="container-x grid items-center gap-12 py-16 md:py-24 md:grid-cols-[1.05fr_1fr]">
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
              <Button asChild size="lg" variant="outline-light" className="rounded-sm"><Link to="/contact">Collaborate With Us</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Students working on laptops with their teacher in a classroom" width={1600} height={1008} className="aspect-[4/3] w-full object-cover" />
            <img src="/images/alfa-blue-logo-t2.png" alt="ALFA BLUE" aria-hidden tabIndex={-1} className="absolute -bottom-5 -left-5 hidden h-24 w-24 md:block" />
          </div>
        </div>
      </section>

      <section className="section pb-10">
        <div className="container-x grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Our vision</p>
            <p className="mt-6 font-display text-2xl leading-snug md:text-4xl">To build a brighter, more inclusive future by preparing the next generation with the digital skills and financial literacy they need to thrive.</p>
            <p className="mt-6 text-lg text-muted-foreground">Every young learner should have the confidence to code, create, and take part fully in tomorrow's economy.</p>
          </div>
          <figure>
            <img
              src="/images/teens-dreaming-of-a-greener-future.jpg"
              alt="Illustration of five hopeful teenagers looking up at a green, solar-powered city, with the words: The future belongs to those who believe in the beauty of their dreams."
              width={1672}
              height={941}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
            <figcaption className="mt-4 text-sm text-muted-foreground">— Eleanor Roosevelt</figcaption>
          </figure>
        </div>
      </section>

      <section id="initiatives" className="section pt-10">
        <div className="container-x">
          <SectionHead eyebrow="Two initiatives" title="Essential skills for the 21st century" />
          <div className="mt-14 space-y-16">
            {[
              { img: coding, to: "/ai-coding-literacy" as const, tag: "Partnership model", title: "AI, Computer Coding & Digital Literacy", text: "Facilitating international partnerships that bring high-quality AI, coding and digital literacy education to school-age students, working with international curriculum providers.", note: "In partnership with Logiscool — an international coding and digital-literacy school network whose curriculum and learning platform are certified for pedagogical quality by Education Alliance Finland." },
              { img: finance, to: "/financial-literacy" as const, tag: "ALFA BLUE initiative", title: "Financial Literacy for Life", text: "An ALFA BLUE educational initiative introducing age-appropriate money management, saving, budgeting, investing fundamentals and long-term planning to school students." },
            ].map((p, i) => (
              <article key={p.to} className="group grid items-center gap-10 md:grid-cols-2">
                <div className={i % 2 === 0 ? "md:order-2" : ""}>
                  <span className="eyebrow inline-block">{p.tag}</span>
                  <h3 className="mt-4 text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.text}</p>
                  {"note" in p && p.note && <p className="mt-3 border-l-2 border-brand pl-4 text-sm text-muted-foreground">{p.note}</p>}
                  <Link to={p.to} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={`overflow-hidden ${i % 2 === 0 ? "md:order-1" : ""}`}>
                  <img src={p.img} alt="" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary pb-10">
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

      <CtaBand className="pt-10" />
    </>
  );
}
