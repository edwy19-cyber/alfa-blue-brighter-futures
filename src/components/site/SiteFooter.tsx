import { Link } from "@tanstack/react-router";
import logo from "@/assets/alfa-blue-logo-horizontal.png.asset.json";
import { LEGAL_NAME, NAV, REGISTERED_ADDRESS } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" aria-label="ALFA BLUE home" className="inline-block bg-background p-4">
            <img src={logo.url} alt="ALFA BLUE" className="h-auto w-full max-w-[220px]" width={1920} height={540} />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
            Empowering the Next Generation Through Digital and Financial Literacy. A commercially operated
            education and programme-development company.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
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
          <p className="mt-3">alfablueme.com</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
          <Link to="/privacy" className="underline-offset-4 hover:text-primary-foreground hover:underline">Privacy Statement</Link>
        </div>
      </div>
    </footer>
  );
}
