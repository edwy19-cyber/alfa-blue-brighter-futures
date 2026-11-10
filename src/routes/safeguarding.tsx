import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { LEGAL_NAME, pageHead, REGISTERED_ADDRESS } from "@/content/site";

export const Route = createFileRoute("/safeguarding")({
  head: () =>
    pageHead(
      "Safeguarding",
      "How ALFA BLUE Management Consulting LLC protects the welfare and safety of the children and young people reached through the education programmes it develops and coordinates.",
      "/safeguarding",
    ),
  component: Page,
});

const roles = [
  {
    party: "ALFA BLUE",
    responsibility:
      "Programme design and coordination, partner identification and due diligence, quality oversight, and reporting to sponsors. We generally do not employ or supervise the teachers who deliver classes, and we do not run our own teaching centres.",
  },
  {
    party: "Delivery partners",
    responsibility:
      "Schools, NGOs and curriculum providers who teach and supervise students day to day. They hold their own child-protection policies, vetting practice, reporting duties under local law, parental consent arrangements and on-site safety.",
  },
  {
    party: "Where we work directly with students",
    responsibility:
      "When ALFA BLUE staff or contractors work directly with students, we take on the same duties as a delivery partner for that activity, including vetting, supervision and reporting.",
  },
];

const safeguards = [
  {
    area: "Vetting and engagement",
    requirement:
      "Anyone with regular direct contact with students, including our own staff and contractors, must hold appropriate background screening where the law of the country of delivery allows or requires it, and must be engaged under written terms before starting.",
  },
  {
    area: "Code of conduct",
    requirement:
      "No one working on our programmes should be alone with a child out of the sight of other adults. Physical contact, private messaging, gifts and one-to-one meetings follow the delivery partner's code of conduct.",
  },
  {
    area: "Adult coverage",
    requirement:
      "A responsible adult must be present and contactable throughout every session, and sessions should be held where they are visible or actively supervised.",
  },
  {
    area: "Consent and imagery",
    requirement:
      "Written consent from a parent or guardian before photographing, filming or publishing a student's image, name or work. We do not publish imagery that could reveal a child's location, school or daily routine.",
  },
  {
    area: "Student data",
    requirement:
      "Personal data about students is collected and held by the school, delivery partner or curriculum provider under their own terms and applicable child-protection laws, as set out in our Privacy Statement. We ask for the minimum information needed and never ask for identifying student data in an enquiry.",
  },
  {
    area: "Partner due diligence",
    requirement:
      "Before an introduction or agreement, we ask a partner about its safeguarding policy, vetting practice, reporting route and insurance, and we record the answers.",
  },
  {
    area: "Venues and travel",
    requirement:
      "Safe premises, suitable adult-to-student ratios, and clear arrival, dismissal and travel arrangements where a partner organises them.",
  },
  {
    area: "Voice and feedback",
    requirement:
      "Children, parents and staff must have a way to raise a concern that does not depend on the person they are worried about.",
  },
];

const reportingSteps = [
  {
    title: "If a child is in immediate danger",
    text: "Contact the police or emergency services in the country where the child is, then tell us as soon as you are able.",
  },
  {
    title: "Tell us what you know",
    text: 'Email ReachUs@alfablueme.com with the subject line "Safeguarding". Say who the concern is about, where and when it happened, what you saw or heard, and what you have already done. Do not investigate or question the child yourself.',
  },
  {
    title: "What we do",
    text: "We acknowledge a report within two working days. Our Managing Partner reviews it and may contact the delivery partner organisation, the relevant child-protection authority, or both.",
  },
  {
    title: "How you hear back",
    text: "We tell the person who reported the concern what has been decided, subject to confidentiality and any legal process, and we keep a written record of the matter and its outcome.",
  },
];

function DataTable({ head, rows }: { head: [string, string]; rows: string[][] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="border border-border bg-secondary p-3 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (
                <td key={i} className="border border-border p-3 align-top text-muted-foreground">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-border py-10 first:border-0 first:pt-0">
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Safeguarding"
        intro={`Effective date: 10 Nov 2026. This policy explains how ${LEGAL_NAME} protects the welfare and safety of the children and young people reached through the education programmes we develop, coordinate and represent.`}
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <Section id="commitment" title="1. Our commitment and scope">
            <p>
              ALFA BLUE develops education programmes and partnerships that widen access to AI, coding, digital and financial literacy for school-age students, including students in underserved communities. Our programmes reach children and young people from about age 6 to 18, so protecting their welfare is a condition of our work, not an addition to it.
            </p>
            <p>
              Every child and young person taking part in a programme we develop or coordinate has the right to learn in an environment where they are safe, respected and heard. We seek to prevent harm, to take concerns seriously, and to respond to them promptly and openly.
            </p>
            <p>
              This policy applies to our staff, contractors and advisers, and to the programmes we develop, coordinate or represent. It sits alongside our <Link to="/privacy" className="text-primary underline underline-offset-4">Privacy Statement</Link> and our partner agreements.
            </p>
          </Section>

          <Section id="who" title="2. Who this policy covers">
            <p>We ask the following people and organisations to work to this policy, or to an equivalent of their own that meets the requirements in section 4:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Our team and advisers</strong>, including anyone engaged by ALFA BLUE on a contract or advisory basis.</li>
              <li><strong className="text-foreground">Partner organisations</strong> we introduce, coordinate with or represent, such as NGOs, schools, foundations, sponsors and curriculum providers.</li>
              <li><strong className="text-foreground">Educators, mentors, volunteers and technical staff</strong> who work with students on our programmes.</li>
              <li><strong className="text-foreground">Visitors to programme sites</strong>, including sponsor representatives on a site visit.</li>
            </ul>
            <p>Working with us on a programme is offered on the understanding that safeguarding requirements are met. Where a partner's own policy is stronger, theirs applies.</p>
          </Section>

          <Section id="roles" title="3. Our role and our partners' role">
            <p>Most teaching is done by others. Being clear about who is responsible for what keeps children safe.</p>
            <DataTable head={["Who", "Responsibility"]} rows={roles.map((r) => [r.party, r.responsibility])} />
          </Section>

          <Section id="prevention" title="4. Preventing harm: what we require">
            <p>We build these requirements into programme design, partner selection and agreements.</p>
            <DataTable head={["Area", "What we require"]} rows={safeguards.map((s) => [s.area, s.requirement])} />
          </Section>

          <Section id="reporting" title="5. Raising a concern">
            <p>
              If you are worried about a child's safety, tell us. You do not need proof, and you do not need to be sure you are right. Reports are taken seriously, handled confidentially, and passed only to those who need to know. We do not tolerate retaliation against anyone who raises a concern in good faith, even if it turns out to be unfounded. We cannot promise absolute confidentiality where a child's safety or the law requires disclosure.
            </p>
            <ol className="mt-6 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
              {reportingSteps.map((step, i) => (
                <li key={step.title} className="bg-card p-6">
                  <span className="font-display text-2xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
            <p>
              You can also raise a concern directly with the delivery partner organisation running the class, or with the child-protection authority in the country where the child lives. If you would rather not contact us, use whichever route you are most comfortable with.
            </p>
          </Section>

          <Section id="allegations" title="6. Allegations involving people working on our programmes">
            <p>
              Where a concern involves a named adult, that person is removed from contact with students while the matter is reviewed, and the delivery partner organisation and any relevant authority are informed. We record the outcome, and we review whether our own screening, supervision or partner checks should change as a result.
            </p>
          </Section>

          <Section id="online" title="7. Online and digital safety">
            <p>
              Our programmes use online learning platforms and moderated student communities. We require that student-facing platforms are supervised, that contact between adults and students happens only through the platform's monitored channels, and that open chat and image sharing are disabled or supervised for younger learners. We ask partners not to publish student work alongside identifying details such as a school name, location or face. Our own website does not collect data from students, and its contact form is intended for adults representing organisations.
            </p>
          </Section>

          <Section id="review" title="8. Training, records and review">
            <p>
              We brief our team and contractors on this policy when they start work with us, and we keep a written record of safeguarding concerns and how they were handled. We review this policy at least every two years, and sooner after a serious incident or a change in applicable law.
            </p>
          </Section>

          <Section id="contact" title="9. Contact">
            <p>For safeguarding questions, concerns or a copy of this policy, please contact:</p>
            <address className="not-italic">
              <p className="font-semibold text-foreground">{LEGAL_NAME}</p>
              <p>Attn: Safeguarding</p>
              {REGISTERED_ADDRESS.map((l) => <span key={l} className="block">{l}</span>)}
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:ReachUs@alfablueme.com" className="font-medium text-primary underline-offset-4 hover:underline">
                  ReachUs@alfablueme.com
                </a>
              </p>
            </address>
          </Section>
        </div>
      </section>
    </>
  );
}
