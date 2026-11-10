import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";
import { LEGAL_NAME, pageHead, REGISTERED_ADDRESS } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead(
      "Privacy Statement",
      "How ALFA BLUE Management Consulting LLC collects, uses, shares and protects personal data on this website and in its business relationships.", "/privacy"
    ),
  component: Page,
});

const dataCategories = [
  { category: "Identity and contact data", examples: "Name, job title, company, email, telephone, postal address", source: "You, your organisation" },
  { category: "Engagement data", examples: "Correspondence, meeting notes, mandate and engagement terms, invoicing details", source: "You, your organisation" },
  { category: "Due diligence data", examples: "Identity documents and beneficial ownership information required for know-your-customer (KYC) and anti-money-laundering checks", source: "You, public registers, screening providers" },
  { category: "Enquiry data", examples: "Enquiry type and message sent through our contact form, and your confirmation that you are 18 or over and acting for an organisation", source: "You, via the Website" },
  { category: "Technical data", examples: "IP address, browser type, device information, pages visited, access times", source: "Automatically, via the Website" },
  { category: "Marketing preferences", examples: "Subscriptions and communication preferences", source: "You" },
];

const purposes = [
  { purpose: "Responding to enquiries and communicating with you", basis: "Legitimate interests in running our business; steps prior to entering a contract" },
  { purpose: "Developing and coordinating education programmes and consulting services", basis: "Performance of a contract" },
  { purpose: "Introducing and coordinating curriculum providers, delivery partners and sponsors", basis: "Legitimate interests in developing education partnerships" },
  { purpose: "KYC, anti-money-laundering and sanctions checks", basis: "Compliance with legal obligations" },
  { purpose: "Invoicing, accounting and record-keeping", basis: "Performance of a contract; legal obligations" },
  { purpose: "Operating, securing and improving the Website", basis: "Legitimate interests" },
  { purpose: "Sending news and insights", basis: "Consent, which you may withdraw at any time" },
  { purpose: "Establishing or defending legal claims", basis: "Legitimate interests" },
];

const rights = [
  "request access to the personal data we hold about you;",
  "request correction of inaccurate or incomplete data;",
  "request deletion of your data;",
  "restrict or object to our processing, including for direct marketing;",
  "receive your data in a portable format;",
  "withdraw consent at any time, without affecting earlier processing.",
];

function DataTable({ head, rows }: { head: [string, string, string] | [string, string]; rows: string[][] }) {
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
      <PageHero eyebrow="Legal" title="Privacy Statement" intro={`Effective date: 08 Nov 2026. This statement explains how ${LEGAL_NAME} collects, uses, shares and protects personal data.`} />
      <section className="section">
        <div className="container-x max-w-4xl">
          <Section id="who-we-are" title="1. Who we are and scope">
            <p>
              {LEGAL_NAME} ("ALFA BLUE", "we", "us" or "our") is a limited liability company registered in the State of Delaware, United States, with its registered address at {REGISTERED_ADDRESS.join(", ")}. We develop education programmes and partnerships that widen access to AI, coding, digital and financial literacy for school-age students, and provide related management consulting services.
            </p>
            <p>
              This Privacy Statement explains how we collect, use, share and protect personal data when you visit our website www.alfablueme.com (the "Website"), contact us, or engage with us as a representative of a partner organisation (such as an NGO, school, foundation, sponsor or curriculum provider), expert collaborator, client or other business contact. ALFA BLUE is the data controller for the personal data described here.
            </p>
            <p>
              We process personal data in accordance with the EU General Data Protection Regulation (GDPR), the Swiss Federal Act on Data Protection (FADP) and other applicable data protection laws, to the extent they apply to our activities.
            </p>
          </Section>

          <Section id="data-we-collect" title="2. Personal data we collect">
            <p>We collect only the personal data we need for the purposes set out in section 3.</p>
            <DataTable
              head={["Category", "Examples", "Source"]}
              rows={dataCategories.map((d) => [d.category, d.examples, d.source])}
            />
            <p>We do not knowingly collect special categories of personal data (such as health data or religious beliefs). Please do not send us such data unless we specifically request it.</p>
            <p>We do not collect personal data about students through the Website. Where a programme involves student data, it is collected and processed by the school, delivery partner or curriculum provider under their own privacy terms and applicable child-protection laws.</p>
          </Section>

          <Section id="how-we-use" title="3. How we use personal data and legal bases">
            <p>We use personal data only where we have a lawful basis to do so.</p>
            <DataTable
              head={["Purpose", "Legal basis"]}
              rows={purposes.map((p) => [p.purpose, p.basis])}
            />
            <p>We do not sell personal data, and we do not use it for automated decision-making that produces legal or similarly significant effects.</p>
          </Section>

          <Section id="sharing" title="4. Sharing and international transfers">
            <p>We share personal data only where necessary, and only with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Service providers</strong> acting on our instructions, such as our website platform and host (Lovable), email, CRM, accounting and identity-screening providers, bound by confidentiality and data protection terms.</li>
              <li><strong className="text-foreground">Professional advisers</strong>, including lawyers, auditors, notaries and tax advisers.</li>
              <li><strong className="text-foreground">Programme partners</strong>, such as curriculum providers, NGOs, schools and sponsors, where you or your organisation have agreed to an introduction or collaboration.</li>
              <li><strong className="text-foreground">Authorities, courts and regulators</strong>, where required by law or to protect our legal rights.</li>
              <li><strong className="text-foreground">A successor entity</strong>, in the event of a merger, reorganisation or sale of our business.</li>
            </ul>
            <p>
              As a US-registered company serving clients in Switzerland, the European Economic Area and elsewhere, we may transfer personal data to countries whose laws may not provide an equivalent level of protection. Where we do so, we rely on adequacy decisions (including the EU-US and Swiss-US Data Privacy Frameworks where applicable), the European Commission's Standard Contractual Clauses as recognised by the Swiss authorities, or other safeguards permitted by law. You may request a copy of the relevant safeguards by contacting us.
            </p>
          </Section>

          <Section id="retention" title="5. Retention and security">
            <p>We keep personal data only as long as necessary for the purposes for which it was collected. As a guide:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Client engagement and accounting records: up to 10 years after the end of the engagement, in line with Swiss and US record-keeping obligations.</li>
              <li>KYC and anti-money-laundering records: at least 10 years after the end of the business relationship, or longer if required by law.</li>
              <li>Enquiries that do not lead to an engagement: up to 2 years.</li>
              <li>Website technical data: up to 13 months.</li>
            </ul>
            <p>
              We apply appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration or disclosure. These include access controls, encryption in transit, secure hosting and confidentiality obligations for staff and service providers. No transmission over the internet is completely secure, however, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section id="your-rights" title="6. Your rights">
            <p>Subject to applicable law, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              {rights.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <p>To exercise these rights, contact us using the details in section 8. We will respond within one month, and may need to verify your identity first.</p>
            <p>You also have the right to lodge a complaint with a supervisory authority. In Switzerland this is the Federal Data Protection and Information Commissioner (FDPIC); in the EEA, the data protection authority of your country of residence or work.</p>
          </Section>

          <Section id="cookies" title="7. Cookies">
            <p>Our Website uses strictly necessary cookies to function and, with your consent, analytics cookies to understand how visitors use it. We do not use advertising or cross-site tracking cookies.</p>
            <DataTable
              head={["Type", "Purpose", "Consent needed"]}
              rows={[
                ["Strictly necessary", "Core site functions and security", "No"],
                ["Analytics", "Visitor statistics via our website platform, Lovable", "Yes"],
              ]}
            />
            <p>You can manage your choices through our cookie banner at any time, or block cookies in your browser settings. Blocking necessary cookies may affect how the Website works.</p>
          </Section>

          <Section id="other-terms" title="8. Other terms and contact">
            <p><strong className="text-foreground">Third-party links.</strong> The Website may link to other websites. We are not responsible for their privacy practices and encourage you to read their privacy statements.</p>
            <p><strong className="text-foreground">Children.</strong> Our programmes benefit school students, but the Website and its contact form are intended for adult representatives of organisations. We do not knowingly collect personal data from anyone under 18 through the Website.</p>
            <p><strong className="text-foreground">Changes to this statement.</strong> We may update this Privacy Statement from time to time. The current version will always be posted on the Website with its effective date. Material changes will be highlighted.</p>
            <p><strong className="text-foreground">Contact us.</strong> For questions about this Privacy Statement or to exercise your rights, please contact:</p>
            <address className="not-italic">
              <p className="font-semibold text-foreground">{LEGAL_NAME}</p>
              <p>Attn: Privacy</p>
              {REGISTERED_ADDRESS.map((l) => <span key={l} className="block">{l}</span>)}
              <p className="mt-2">Email: <a href="mailto:ReachUs@alfablueme.com" className="font-medium text-primary underline-offset-4 hover:underline">ReachUs@alfablueme.com</a></p>
            </address>
          </Section>
        </div>
      </section>
    </>
  );
}
