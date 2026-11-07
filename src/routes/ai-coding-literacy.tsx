import { createFileRoute } from "@tanstack/react-router";
import coding from "@/assets/coding-students.jpg";
import eaf from "@/assets/eaf-certified-badge.png.asset.json";
import { CtaBand, NumberedList, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/ai-coding-literacy")({
  head: () =>
    pageHead(
      "AI, Computer Coding & Digital Literacy",
      "How ALFA BLUE facilitates partnerships that bring AI, coding and digital literacy education to school-age students, working with international curriculum providers.",
    ),
  component: Page,
});

const skills = [
  { title: "AI literacy", text: "Understanding what AI systems do, where they fall short, and how to use them responsibly and critically." },
  { title: "Computer coding", text: "Learning to build working programs, from visual block coding through to text-based languages." },
  { title: "Computational thinking", text: "Breaking problems into steps, recognising patterns and reasoning logically — skills that transfer across subjects." },
  { title: "Creativity", text: "Designing games, animations and digital projects that turn students from consumers into makers." },
  { title: "Digital citizenship", text: "Safe, ethical and informed participation online, including privacy and wellbeing." },
  { title: "Future readiness", text: "Foundations that open doors to further study and careers in an increasingly digital economy." },
];

const roles = [
  { who: "International curriculum providers", text: "Supply the specialist coding, AI and digital literacy curriculum and learning platform, subject to applicable partnership and licensing arrangements. ALFA BLUE does not own the curriculum or operate the platform." },
  { who: "ALFA BLUE (programme developer)", text: "Strategic partnerships, programme development, institutional coordination, market access and facilitation of delivery." },
  { who: "Authorised delivery partners", text: "NGOs, schools and foundations who implement programmes with trained educators, in line with the provider's requirements." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Initiative 01" title="AI, computer coding and digital literacy for every student" intro="Digital skills increasingly shape access to opportunity. We help make high-quality learning available to students who would otherwise be left out." />
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Why it matters" title="More than learning to code" intro="Young people are growing up alongside AI. They need to understand it, question it and create with it." />
          <div className="mt-14"><NumberedList items={skills} /></div>
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <img src={coding} alt="Two students coding together on a laptop" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
          <div>
            <SectionHead eyebrow="Who does what" title="Clear roles, properly licensed" />
            <ul className="mt-10 space-y-8">
              {roles.map((r) => (
                <li key={r.who} className="border-l-2 border-brand pl-6">
                  <h3 className="text-xl">{r.who}</h3>
                  <p className="mt-2 text-muted-foreground">{r.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-6 border border-border bg-card p-6 sm:flex-row sm:items-center">
              <img src={eaf.url} alt="Education Alliance Finland – Certified Pedagogical Quality" loading="lazy" width={1984} height={2048} className="h-auto w-28 shrink-0" />
              <p className="text-sm text-muted-foreground">
                ALFA BLUE works with international curriculum providers to expand access to high-quality AI, coding and digital literacy education. Selected learning solutions used by our curriculum partners have been independently evaluated and certified for pedagogical quality by Education Alliance Finland (EAF).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Implementation" title="How a programme can be delivered" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["Within schools", "Integrated into the timetable or as enrichment, delivered by trained educators."],
              ["Through NGOs", "Community-based programmes reaching students outside formal schooling."],
              ["Sponsored cohorts", "CSR- or foundation-funded places for students from underserved communities."],
            ].map(([t, d]) => (
              <div key={t} className="border-t-2 border-primary pt-6">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
