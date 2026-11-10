import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container-x flex h-28 items-center justify-between gap-6 md:h-32">
        <Link to="/" aria-label="ALFA BLUE – Home" className="shrink-0">
          <img src="/images/alfa-blue-header-logo.png" alt="" className="h-auto max-h-[98px] w-auto md:max-h-28" width={1130} height={1392} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.slice(1, 6).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Button asChild variant="default" size="sm" className="rounded-sm px-4">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border py-3 font-medium last:border-0">
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
