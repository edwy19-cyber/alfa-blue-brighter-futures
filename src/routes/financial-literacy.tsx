import { createFileRoute } from "@tanstack/react-router";
import literacyStudents from "@/assets/financial-literacy-students.jpg";
import { CtaBand, PageHero, SectionHead } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";

export const Route = createFileRoute("/financial-literacy")({
  head: () =>
    pageHead(
      "Financial Literacy for Life",
      "Financial Literacy for Life is an ALFA BLUE educational initiative bringing age-appropriate money management, saving, investing and planning skills to school students.", "/financial-literacy"
    ),
  component: Page,
});

const gapStats = [
  {
    figure: "1 in 3",
    text: "adults worldwide are financially literate, meaning around 3.5 billion adults lack an understanding of basic financial concepts such as interest, inflation and risk diversification.",
    source: "S&P Global FinLit Survey (World Bank, Gallup, GFLEC)",
    href: "https://gflec.org/initiatives/sp-global-finlit-survey-2/",
  },
  {
    figure: "18%",
    text: "of 15-year-old students in OECD countries lack basic proficiency in financial literacy; in six of the 20 countries and economies assessed, more than 40% of students perform at or below the lowest level.",
    source: "OECD PISA 2022 Results, Volume IV",
    href: "https://www.oecd.org/en/topics/sub-issues/student-financial-literacy.html",
  },
  {
    figure: "Age 7",
    text: "by this age, most children have formed core money habits, such as planning ahead and delaying gratification, that they carry into adulthood.",
    source: "University of Cambridge for the UK Money Advice Service, 2013",
    href: "https://www.yourmoney.com/investing/adult-money-habits-are-set-by-the-age-of-seven",
  },
];

const research = [
  {
    title: "Financial education works.",
    text: "A meta-analysis of 76 randomised experiments with over 160,000 participants in 33 countries found that financial education improves both financial knowledge and behaviours such as saving, with effects similar to other successful education programmes.",
    source: "Kaiser, Lusardi, Menkhoff & Urban, 2022",
    href: "https://doi.org/10.1016/j.jfineco.2021.09.022",
  },
  {
    title: "Greater lifetime wealth.",
    text: "Financial knowledge accounts for an estimated 30–40% of inequality in retirement wealth.",
    source: "Lusardi, Michaud & Mitchell, 2017",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5445941",
  },
  {
    title: "Better decisions as young adults.",
    text: "After personal finance education became a high-school requirement in three US states, young adults had higher credit scores and lower loan delinquency than peers in comparable states.",
    source: "Brown, Collins, Schmeiser & Urban, US Federal Reserve, 2014",
    href: "https://www.federalreserve.gov/econres/feds/state-mandated-financial-education-and-the-credit-behavior-of-young-adults.htm",
  },
  {
    title: "Smarter saving, investing and borrowing.",
    text: "Financially literate adults are more likely to save, invest and diversify, to pay their credit cards in full, and less likely to become over-indebted.",
    source: "Klapper & Lusardi, 2020",
    href: "https://doi.org/10.1111/fima.12283",
  },
];

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

const inclusionStats = [
  {
    figure: "79%",
    text: "of adults worldwide had an account in 2024, up from 51% in 2011.",
  },
  {
    figure: "1.3 billion",
    text: "adults still have no account; half of them live in just eight economies, including Egypt, India, Nigeria and Pakistan.",
  },
  {
    figure: "40%",
    text: "of adults in low- and middle-income countries saved formally in 2024, the fastest rise in a decade.",
  },
  {
    figure: "900 million",
    text: "adults without an account already own a mobile phone, a ready channel for digital financial services.",
  },
];

const inclusionTable = [
  { indicator: "Adults with an account, worldwide", earlier: "51% (2011)", now: "79%" },
  { indicator: "Adults with an account, low- and middle-income countries", earlier: "42% (2011)", now: "75%" },
  { indicator: "Women with an account, low- and middle-income countries", earlier: "37% (2011)", now: "73%" },
  { indicator: "Adults who saved formally, low- and middle-income countries", earlier: "24% (2021)", now: "40%" },
  { indicator: "Adults without an account, worldwide", earlier: "–", now: "1.3 billion" },
];

const literacyFirst = [
  {
    text: "Access without understanding leaves people exposed. Research across more than 140 economies found that only around half of adults in major emerging economies who use a credit card or borrow from a financial institution are financially literate.",
    source: "Klapper & Lusardi, 2020",
    href: "https://doi.org/10.1111/fima.12283",
  },
  {
    text: "Used well, financial services change lives. In Kenya, access to mobile money is estimated to have lifted around 2% of households out of extreme poverty, with the largest gains for households headed by women.",
    source: "Suri & Jack, Science, 2016",
    href: "https://www.science.org/doi/10.1126/science.aah5309",
  },
  {
    text: "Young people are already financial users. About 60% of 15-year-olds in OECD countries have a bank account or payment card, so learning to manage money safely cannot wait until adulthood.",
    source: "OECD PISA 2022",
    href: "https://www.oecd.org/en/topics/sub-issues/student-financial-literacy.html",
  },
];

const inclusionQuotes = [
  {
    quote: "Financial literacy is now also recognised as a life skill for the 21st century.",
    source: "OECD, PISA 2022 Results, Volume IV (2024)",
    href: "https://www.oecd.org/en/publications/pisa-2022-results-volume-iv_5a849c2a-en/full-report/component-2.html",
  },
  {
    quote: "The financial education of our daughters and sons represents the most effective path…",
    source: "H.M. Queen Máxima of the Netherlands, UN Secretary-General's Special Advocate, Global Money Week 2021",
    href: "https://unsgsa.org/speeches/unsgsa-queen-maxima-virtual-opening-remarks-global-money-week-2021",
  },
];

const advanced = [
  { title: "Stock market simulation games.", text: "Students manage a virtual portfolio using real market data, experiencing diversification, volatility and long-term investing without risking real money." },
  { title: "Real-world case studies.", text: "Students analyse real household, business and market situations to understand how financial decisions, good and bad, play out over time." },
  { title: "Competitions and challenges.", text: "Inter-school financial literacy and investment challenges that reward sound reasoning, teamwork and risk awareness, not just returns." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Initiative 02" title="Financial literacy as an essential life skill" intro="Every student will manage money, whatever career they choose. Practical understanding should begin long before the first payslip." />

      <section className="section">
        <div className="container-x grid items-center gap-14 md:grid-cols-2">
          <div>
            <SectionHead eyebrow="Financial Literacy for Life" title="Practical capabilities for every student" />
            <p className="mt-5 text-lg text-muted-foreground">
              Financial Literacy for Life is an ALFA BLUE educational initiative that introduces age-appropriate financial knowledge and decision-making skills to school students. It covers money management, saving, budgeting, compound growth, investing fundamentals, risk awareness and long-term financial planning, helping young people build practical capabilities regardless of their future careers.
            </p>
          </div>
          <img src="/images/boardroom-charts-review.jpg" alt="Professionals reviewing programme charts together in a boardroom" loading="lazy" width={1672} height={941} className="aspect-[4/3] w-full object-cover" />
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-x">
          <SectionHead
            eyebrow="Why it matters"
            title="Early financial literacy builds stable lives and stronger economies"
            intro="Most people make their biggest financial decisions — saving, borrowing, investing and planning for retirement — without ever having been taught how. Research shows that financial knowledge gained early pays off over a lifetime."
          />
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {gapStats.map((s) => (
              <div key={s.source} className="flex flex-col bg-card p-8">
                <span className="font-display text-4xl text-brand">{s.figure}</span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                  {s.source}
                </a>
              </div>
            ))}
          </div>
          <h3 className="mt-16 text-2xl md:text-3xl">What the research shows</h3>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-6">
            {research.map((r, i) => (
              <div key={r.title} className={`flex flex-col bg-card p-8 lg:col-span-2${i === 3 ? " lg:col-start-2" : ""}${i === research.length - 1 ? " md:col-span-2 lg:col-span-2" : ""}`}>
                <h4 className="text-lg">{r.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                  {r.source}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl border-l-2 border-brand pl-6 text-lg font-medium">
            When young people learn to save, plan and invest wisely, they make fewer costly financial mistakes, build more secure futures and contribute to more stable, resilient economies.
          </p>
        </div>
      </section>

      <section className="section border-t border-border">
        <div className="container-x">
          <SectionHead
            eyebrow="From literacy to inclusion"
            title="Financial literacy today, financial inclusion tomorrow"
            intro="Our mission is financial literacy: giving children the knowledge, skills and confidence to manage money well. Financial inclusion – the ability to use useful, affordable financial services such as payments, savings, credit and insurance, delivered responsibly – is the long-term outcome that literacy makes possible. Access to financial services is growing fast; the knowledge to use them well must grow with it."
          />

          <h3 className="mt-14 text-2xl md:text-3xl">The inclusion picture</h3>
          <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {inclusionStats.map((s) => (
              <div key={s.figure} className="flex flex-col bg-card p-8">
                <span className="font-display text-4xl text-brand">{s.figure}</span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a href="https://www.worldbank.org/en/news/press-release/2025/07/16/mobile-phone-technology-powers-saving-surge-in-developing-economies" target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                  World Bank, Global Findex 2025
                </a>
              </div>
            ))}
          </div>

          <h3 className="mt-16 text-2xl md:text-3xl">Financial inclusion at a glance</h3>
          <div className="mt-8 overflow-x-auto border border-border">
            <table className="w-full min-w-[36rem] border-collapse bg-card text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold">Indicator</th>
                  <th className="p-4 font-semibold">Earlier</th>
                  <th className="p-4 font-semibold">2024</th>
                </tr>
              </thead>
              <tbody>
                {inclusionTable.map((row) => (
                  <tr key={row.indicator} className="border-b border-border last:border-b-0">
                    <td className="p-4">{row.indicator}</td>
                    <td className="p-4 text-muted-foreground">{row.earlier}</td>
                    <td className="p-4 font-semibold">{row.now}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Source:{" "}
            <a href="https://www.worldbank.org/en/publication/globalfindex" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">
              World Bank, Global Findex Database 2025
            </a>{" "}
            (data for 2024)
          </p>

          <div className="mt-16 grid items-center gap-14 md:grid-cols-2">
            <div>
              <h3 className="text-2xl md:text-3xl">Why inclusion starts with literacy</h3>
              <div className="mt-6 space-y-6">
                {literacyFirst.map((p) => (
                  <p key={p.source} className="text-muted-foreground">
                    {p.text}{" "}
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                      {p.source}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <img src={literacyStudents} alt="Secondary school students planning a budget on a tablet" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {inclusionQuotes.map((q) => (
              <figure key={q.source} className="flex flex-col bg-card p-8">
                <blockquote className="font-display text-xl leading-relaxed">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-auto pt-5">
                  <a href={q.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-wider text-primary underline-offset-4 hover:underline">
                    {q.source}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 max-w-3xl border-l-2 border-brand pl-6 text-lg font-medium">
            We teach financial literacy in the classroom today, so that tomorrow's adults can take part fully and safely in the financial system.
          </p>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl">A state-of-the-art programme for every stage of K-12</h3>
            <p className="mt-4 text-muted-foreground">
              ALFA BLUE is developing a state-of-the-art financial literacy programme that grows with each student from the early primary years to the end of secondary school. It is designed for every student, whatever career path they later choose — because everyone will earn, spend, save, borrow and plan for the future. Each stage builds on the last, using age-appropriate, hands-on and game-based learning adapted to the local country and currency.
            </p>
          </div>
          <div className="mt-14">
            <SectionHead eyebrow="Learning framework" title="A Progressive Learning Pathway" intro="Five stages that build knowledge step by step. Age ranges are indicative and subject to pedagogical review; examples are adapted to local country and currency." />
          </div>
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
          <div className="mt-14 border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl">Advanced learning experiences</h3>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              At the advanced stages, students apply what they have learned to realistic, engaging challenges.
            </p>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {advanced.map((a) => (
                <li key={a.title} className="border-l-2 border-brand pl-5">
                  <p className="font-semibold">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
            The programme is educational only. It does not provide personal investment or financial advice, or recommend any specific securities, products or providers.
          </p>
        </div>
      </section>

      <CtaBand title="Bring financial literacy to your students" text="We welcome conversations with schools, education and finance professionals, and sponsors." />
    </>
  );
}
