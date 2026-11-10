import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHero } from "@/components/site/Blocks";
import { pageHead } from "@/content/site";
import policy from "@/content/safeguarding-policy.md?raw";

export const Route = createFileRoute("/safeguarding")({
  head: () =>
    pageHead(
      "Safeguarding & Child Protection Policy",
      "ALFA BLUE's Safeguarding & Child Protection Policy and Partner Standards: how we protect children through the partners, programmes and sponsors we work with.",
      "/safeguarding",
    ),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Policy" title="Safeguarding & Child Protection Policy" intro="Version 0.2 — Draft for review · Nov 10, 2026" />
      <section className="container-x max-w-4xl py-16">
        <div className="space-y-4 text-base leading-relaxed text-foreground/85">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: (p) => <h2 className="font-display pt-8 text-2xl text-foreground md:text-3xl" {...p} />,
              ul: (p) => <ul className="list-disc space-y-1.5 pl-6" {...p} />,
              ol: (p) => <ol className="list-decimal space-y-1.5 pl-6" {...p} />,
              strong: (p) => <strong className="font-semibold text-foreground" {...p} />,
              a: ({ href, ...p }) => (
                <a href={href} className="text-primary underline underline-offset-4" {...p} />
              ),
              table: (p) => (
                <div className="overflow-x-auto rounded-lg border border-border">
                  <table className="w-full text-left text-sm" {...p} />
                </div>
              ),
              th: (p) => <th className="bg-secondary px-4 py-3 font-semibold text-foreground" {...p} />,
              td: (p) => <td className="border-t border-border px-4 py-3 align-top" {...p} />,
            }}
          >
            {policy}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
}
