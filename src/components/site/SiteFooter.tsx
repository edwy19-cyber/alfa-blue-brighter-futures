import { Link } from "@tanstack/react-router";
import { openCookieSettings } from "@/components/site/CookieBanner";
import { LEGAL_NAME, NAV, REGISTERED_ADDRESS } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="ALFA BLUE – Home" className="inline-block max-w-full bg-background p-4">
            <img src="/images/alfa-blue-h-logo.png" alt="" className="h-auto w-full max-w-[240px]" width={1920} height={641} />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Empowering the Next Generation Through Digital and Financial Literacy. A commercially operated
            education and programme-development company.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.filter((n) => n.to !== "/safeguarding").map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 hover:text-primary-foreground">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-primary-foreground/70">
          <p className="eyebrow">Company</p>
          <p className="mt-4 font-semibold text-primary-foreground/90">{LEGAL_NAME}</p>
          <p className="mt-2 text-xs uppercase tracking-wider">Registered address</p>
          <address className="not-italic">
            {REGISTERED_ADDRESS.map((l) => <span key={l} className="block">{l}</span>)}
          </address>
          <p className="mt-3"><a href="mailto:ReachUs@alfablueme.com" className="text-primary-foreground/80 hover:text-primary-foreground">ReachUs@alfablueme.com</a></p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
          <div className="flex gap-4"><Link to="/privacy" className="underline-offset-4 hover:text-primary-foreground hover:underline">Privacy Statement</Link><Link to="/safeguarding" className="underline-offset-4 hover:text-primary-foreground hover:underline">Safeguarding</Link><button type="button" onClick={openCookieSettings} className="underline-offset-4 hover:text-primary-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">Cookie settings</button></div>
        </div>
      </div>
    </footer>
  );
}
