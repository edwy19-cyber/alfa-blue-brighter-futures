import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "@/content/site";

// Sub-pages that belong to a main tab: viewing one of these highlights its parent tab.
const SECTION_PARENTS: Record<string, string> = {
  "/approach": "/partnerships",
  "/impact": "/partnerships",
  "/how-sponsorship-works": "/partnerships",
  "/sponsor": "/partnerships",
  "/safeguarding": "/about",
};

// The four main tabs, in order, followed by the "Collaborate With Us" button.
const TABS = NAV.slice(1, 5);

function isActiveTab(tabTo: string, pathname: string) {
  if (pathname === tabTo) return true;
  return SECTION_PARENTS[pathname] === tabTo;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-x flex h-28 items-center justify-between gap-4 md:h-32">
        <Link to="/" aria-label="ALFA BLUE – Home" className="shrink-0">
          <img src="/images/alfa-blue-header-logo.png" alt="" className="h-auto max-h-[98px] w-auto md:max-h-28" width={1130} height={1392} />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {TABS.map((n) => {
            const active = isActiveTab(n.to, pathname);
            return (
              <Link
                key={n.to}
                to={n.to}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded-sm bg-primary px-3 py-2 text-[13px] font-semibold text-primary-foreground"
                    : "rounded-sm px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                }
              >
                {n.label}
              </Link>
            );
          })}
          <Button asChild variant="default" size="sm" className="ml-2 rounded-sm px-4">
            <Link to="/contact">Collaborate With Us</Link>
          </Button>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {NAV.map((n) => {
              const active = isActiveTab(n.to, pathname) || pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "border-b border-border bg-primary px-3 py-3 font-semibold text-primary-foreground last:border-0"
                      : "border-b border-border px-3 py-3 font-medium transition-colors hover:bg-secondary last:border-0"
                  }
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
