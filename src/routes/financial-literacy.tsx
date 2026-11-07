import { createFileRoute } from "@tanstack/react-router";
import finance from "@/assets/financial-classroom.jpg";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/financial-literacy")({
  head: () =>
    pageHead(
      "Financial Literacy for Life",
      "An age-appropriate financial literacy concept for children and teenagers, currently under development by ALFA BLUE with education and finance professionals.",
    ),
  component: Page,
});

const stages = [
  { age: "Ages 7–10", title: "Money basics", topics: "What money is, needs and wants, earning, simple saving goals." },
  { age: "Ages 10–13", title: "Budgeting & saving", topics: "Planning a budget, delayed gratification, introducing interest." },
  { age: "Ages 13–15", title: "Growth & risk", topics: "Compound interest, inflation, the relationship between risk and return." },
  { age: "Ages 15–18", title: "Planning for independence", topics: "Investment fundamentals, borrowing and credit, long-term financial planning, responsible decisions." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Initiative 02" title="Financial literacy as an essential life skill" intro="Every student will manage money, whatever career they choose. Practical understanding should begin long before the first payslip.">
        <span className="status-tag mt-8 bg-primary-foreground/10 text-primary-foreground">Under development — not yet an operational or accredited curriculum</span>
      </PageHero>
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Why school age" title="Habits form early" intro="Attitudes to money take shape in childhood. Teaching the fundamentals at school gives every student — not only those whose families discuss finance at home — a fair foundation." />
          </div>
          <img src={finance} alt="Teacher discussing a simple budget with a group of students" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Proposed framework" title="A progressive learning pathway" intro="An indicative structure, subject to refinement with education and finance professionals." />
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-4">
            {stages.map((s, i) => (
              <li key={s.title} className="bg-card p-7">
                <span className="eyebrow">{s.age}</span>
                <h3 className="mt-3 text-xl">{i + 1}. {s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.topics}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            The programme is educational only. It does not provide financial advice or recommend any specific securities, products or providers.
          </p>
        </div>
      </section>
      <CtaBand title="Help shape the programme" text="We are inviting education and finance professionals, schools and sponsors to contribute to its development." />
    </>
  );
}
