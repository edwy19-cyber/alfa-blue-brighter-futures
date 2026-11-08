import { createFileRoute } from "@tanstack/react-router";
import coding from "@/assets/coding-students.jpg";
import eaf from "@/assets/eaf-certified-badge.png.asset.json";
import { CtaBand, NumberedList, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/ai-coding-literacy")({
  head: () =>
    pageHead(
      "AI, Computer Coding & Digital Literacy",
      "In partnership with Logiscool, ALFA BLUE brings EAF-certified AI, coding and digital literacy education to school-age students through NGO, school and sponsor partnerships.",
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

const stats = [
  {
    figure: "2 in 3",
    text: "school-age children worldwide (1.3 billion aged 3–17) have no internet connection at home. In low-income countries, fewer than 1 in 20 do, compared with nearly 9 in 10 in high-income countries.",
    source: "UNICEF & ITU, 2020",
    href: "https://www.unicef.org/press-releases/two-thirds-worlds-school-age-children-have-no-internet-access-home-new-unicef-itu",
  },
  {
    figure: "40%",
    text: "of primary schools worldwide are connected to the internet, rising to 50% of lower-secondary and 65% of upper-secondary schools.",
    source: "UNESCO Global Education Monitoring Report, 2023",
    href: "https://gem-report-2023.unesco.org/",
  },
  {
    figure: "23% vs 94%",
    text: "of people use the internet in low-income countries, compared with high-income countries. Of the 2.2 billion people still offline, 96% live in low- and middle-income countries.",
    source: "ITU Facts and Figures, 2025",
    href: "https://www.itu.int/en/mediacentre/Pages/PR-2025-11-17-facts-and-figures.aspx",
  },
  {
    figure: "2 in 3",
    text: "countries now offer or plan to offer computer science in schools, but students in African countries have the least access, often because schools lack electricity.",
    source: "Stanford HAI AI Index, 2025",
    href: "https://hai.stanford.edu/ai-index/2025-ai-index-report/education",
  },
];

const platformPoints = [
  { title: "Learning by creating.", text: "Students build their own games, animations and apps, which keeps motivation high and turns them from consumers into makers." },
  { title: "A clear pathway for ages 6 to 18.", text: "A modular curriculum covering more than 20 topics, from first coding steps and digital literacy to Python, AI and robotics." },
  { title: "Adapted to every learner.", text: "Content adjusts to each student's age, level and pace, so no one is left behind or held back." },
  { title: "Independently certified quality.", text: "Curriculum and platform certified for pedagogical quality by Education Alliance Finland." },
  { title: "A safe learning community.", text: "Through the MyLogiscool portal, students share projects, inspire each other and earn recognition in a moderated environment." },
  { title: "Supported educators.", text: "Teachers and instructors receive structured training, lesson materials and ongoing support." },
  { title: "Recognised internationally.", text: "Awards include the European Franchise Federation's Best International Brand, and the company was a BETT Awards finalist." },
];

const roles = [
  {
    who: "Curriculum partner: Logiscool",
    text: "Logiscool supplies the specialist coding, AI and digital literacy curriculum and the Scoolcode learning platform, under its partnership and licensing arrangements with ALFA BLUE. ALFA BLUE does not own the curriculum or operate the platform.",
    link: true,
  },
  { who: "ALFA BLUE (programme developer)", text: "Strategic partnerships, programme development, institutional coordination, market access and facilitation of delivery." },
  { who: "Authorised delivery partners", text: "NGOs, schools and foundations who implement programmes with trained educators, in line with the provider's requirements." },
];

const delivery = [
  { title: "Within schools", text: "Integrated into the timetable or offered as after-school enrichment, taught by trained educators using a certified curriculum, with progress tracked on the learning platform." },
  { title: "Through NGOs", text: "Community programmes that reach students outside formal schooling, delivered by trusted local organisations with our coordination and quality oversight." },
  { title: "Sponsored cohorts", text: "CSR- and foundation-funded places for students from communities with limited access, with transparent reporting to sponsors." },
  { title: "Online and blended learning", text: "Live online classes and blended formats extend programmes to rural and remote areas where specialist teachers are scarce." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Initiative 01" title="AI, computer coding and digital literacy for every student" intro="Digital skills increasingly shape access to opportunity. We help make high-quality learning available to students who would otherwise be left out." />

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Why it matters" title="More than learning to code" intro="Young people are growing up alongside AI. They need to understand it, question it and create with it." />

          <div className="mt-14 border border-border bg-secondary p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl">The digital learning gap</h3>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Access to digital learning is still very unequal. Children in low-income countries and rural areas are the least likely to learn the coding and AI skills that increasingly shape opportunity.
            </p>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s) => (
                <div key={s.source} className="flex flex-col bg-card p-7">
                  <span className="font-display text-4xl text-brand">{s.figure}</span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                    {s.source}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-3xl font-medium">
              Closing this gap is why we bring certified, high-quality coding and AI education to communities that would otherwise be left out.
            </p>
          </div>

          <div className="mt-14"><NumberedList items={skills} /></div>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="text-2xl md:text-3xl">The learning platform behind our programmes</h3>
              <p className="mt-5 text-muted-foreground">
                Our coding and digital literacy programmes run on Logiscool's Scoolcode platform, built specifically for teaching young people. Students progress at their own pace through three stages: visual block coding, a "mix mode" that shows blocks and real code side by side, and finally text-based languages such as Python and C#. The result is a smooth transition from first steps to genuine programming.
              </p>
            </div>
            <div>
              <h4 className="eyebrow">What sets it apart</h4>
              <ul className="mt-6 space-y-5">
                {platformPoints.map((p) => (
                  <li key={p.title} className="border-l-2 border-brand pl-5">
                    <p className="font-semibold">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
                  {"link" in r && r.link && (
                    <a href="https://www.logiscool.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-primary underline-offset-4 hover:underline">
                      Visit logiscool.com
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10 border border-border bg-card p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <img src={eaf.url} alt="Education Alliance Finland – Certified Pedagogical Quality" loading="lazy" width={1984} height={2048} className="h-auto w-28 shrink-0" />
                <div>
                  <h3 className="text-xl">In partnership with Logiscool</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    ALFA BLUE works in partnership with{" "}
                    <a href="https://www.logiscool.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">Logiscool</a>,
                    an international coding and digital-literacy education network founded in 2014. Logiscool's curriculum and its Scoolcode learning platform have been independently evaluated and certified for pedagogical quality by Education Alliance Finland (EAF), an evaluator that applies criteria developed with Finnish education researchers.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Taught to students aged 6 to 18, Logiscool's programmes are delivered in more than 30 countries across five continents, through over 360 locations and to more than 320,000 students to date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHead eyebrow="Implementation" title="How a programme can be delivered" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {delivery.map((d) => (
              <div key={d.title} className="border-t-2 border-primary pt-6">
                <h3 className="text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="border border-border bg-secondary p-8">
              <h3 className="text-xl">Global reach</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Our curriculum partner's programmes are delivered in more than 30 countries across five continents. Each programme is adapted to the local language, context and school calendar, so proven content can be introduced quickly and responsibly in new markets.
              </p>
            </div>
            <div className="border border-border bg-secondary p-8">
              <h3 className="text-xl">Expertise and partners</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Programmes are designed and reviewed with education specialists, including experts holding doctoral degrees in education, pedagogy and learning technology. We seek to work with established international and local NGOs, foundations and education authorities to reach the students who need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
