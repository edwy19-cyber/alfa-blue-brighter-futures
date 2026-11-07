import { Link } from "@tanstack/react-router";
import mark from "@/assets/alfa-blue-mark.png.asset.json";
import { NAV } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={mark.url} alt="" className="h-10 w-10" width={40} height={40} />
            <span className="font-display text-xl tracking-wide">ALFA BLUE</span>
          </div>
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
          <p className="mt-4">ALFA BLUE Management Consulting</p>
          <p>[Registered address — to be confirmed]</p>
          <p>[Company registration number — to be confirmed]</p>
          <p className="mt-3">alfablueme.com</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} ALFA BLUE Management Consulting. All rights reserved.</p>
          <p>Logiscool is a trademark of its respective owner. [Legal notice &amp; privacy policy — to be provided]</p>
        </div>
      </div>
    </footer>
  );
}
