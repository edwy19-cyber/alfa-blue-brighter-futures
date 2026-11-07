import { createFileRoute } from "@tanstack/react-router";
import finance from "@/assets/financial-classroom.jpg";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/financial-literacy")({
  head: () =>
    pageHead(
      "Financial Literacy for Life",
      "Financial Literacy for Life is an ALFA BLUE educational initiative bringing age-appropriate money management, saving, investing and planning skills to school students.",
    ),
  component: Page,
});

const stages = [
  {
    stage: 1, age: "Ages 6–8", title: "Money and choices",
    objective: "Understand what money is for and make thoughtful choices between alternatives.",
    principles: "Money as a medium of exchange; earning and spending; needs versus wants; scarcity and thoughtful choices.",
    practice: "Use a classroom shop or pocket-money game to choose between alternatives, set a small saving goal and explain a choice.",
  },
  {
    stage: 2, age: "Ages 9–11", title: "Budgeting and saving",
    objective: "Plan simple budgets and see how everyday spending affects savings goals.",
    principles: "Income, expenses, simple budgets, delayed gratification, saving for goals, safe digital payments and basic bank-account concepts.",
    practice: "Plan a monthly allowance and compare prices, identifying how small recurring purchases affect savings.",
  },
  {
    stage: 3, age: "Ages 12–13", title: "Growth and risk",
    objective: "Recognise how money grows over time and why higher returns carry greater uncertainty.",
    principles: "Simple versus compound interest, inflation and purchasing power, credit and borrowing costs, return versus risk, and financial scams.",
    practice: "Compare two savings scenarios using illustrative numbers and discuss why higher promised returns typically involve greater uncertainty.",
  },
  {
    stage: 4, age: "Ages 14–16", title: "Investing fundamentals",
    objective: "Grasp long-term investing concepts and distinguish investing from speculation.",
    principles: "Financial markets at a conceptual level; long-term investing, diversification, volatility, opportunity cost, fees and the distinction between investing and speculation.",
    practice: "Build a hypothetical diversified portfolio and explain its risks without recommending actual securities.",
  },
  {
    stage: 5, age: "Ages 17–18", title: "Planning for independence",
    objective: "Prepare realistic plans for income, spending, saving and long-term financial wellbeing.",
    principles: "Education and career choices, income and taxes, emergency funds, debt management, insurance basics, long-term goals and financial wellbeing.",
    practice: "Prepare a realistic first-job budget and multi-year savings plan, testing alternative income and expense scenarios.",
  },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Initiative 02" title="Financial literacy as an essential life skill" intro="Every student will manage money, whatever career they choose. Practical understanding should begin long before the first payslip." />
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Financial Literacy for Life" title="Practical capabilities for every student" />
            <p className="mt-5 text-lg text-muted-foreground">
              Financial Literacy for Life is an ALFA BLUE educational initiative that introduces age-appropriate financial knowledge and decision-making skills to school students. It covers money management, saving, budgeting, compound growth, investing fundamentals, risk awareness and long-term financial planning, helping young people build practical capabilities regardless of their future careers.
            </p>
          </div>
          <img src={finance} alt="Teacher discussing a simple budget with a group of students" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>
      <section className="section bg-secondary">
        <div className="container-x">
          <SectionHead eyebrow="Learning framework" title="A Progressive Learning Pathway" intro="Five stages that build knowledge step by step. Age ranges are indicative and subject to pedagogical review; examples are adapted to local country and currency." />
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-5">
            {stages.map((s) => (
              <li key={s.title} className="flex flex-col bg-card p-7">
                <span className="eyebrow">Stage {s.stage} · {s.age}</span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm font-medium">{s.objective}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">Principles</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.principles}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">Practice</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.practice}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            The programme is educational only. It does not provide personal investment or financial advice, or recommend any specific securities, products or providers.
          </p>
        </div>
      </section>
      <CtaBand title="Bring financial literacy to your students" text="We welcome conversations with schools, education and finance professionals, and sponsors." />
    </>
  );
}
