import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="bg-deep">
      <div className="container-x py-20 md:py-28 fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">{intro}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function CtaBand({ title = "Discuss a collaboration", text = "We welcome conversations with NGOs, foundations, CSR teams, schools and education professionals." }: { title?: string; text?: string }) {
  return (
    <section className="section border-t border-border bg-secondary">
      <div className="container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="rule" />
          <h2 className="mt-6 text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/contact">Discuss a Collaboration</Link></Button>
          <Button asChild size="lg" variant="outline" className="rounded-sm"><Link to="/contact">Collaborate With Us</Link></Button>
        </div>
      </div>
    </section>
  );
}

export function NumberedList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <li key={it.title} className="bg-card p-8">
          <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-xl">{it.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
