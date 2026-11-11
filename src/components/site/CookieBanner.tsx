import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "alfablue-cookie-consent";
const TWELVE_MONTHS = 365 * 24 * 60 * 60 * 1000;
const OPEN_EVENT = "alfablue:open-cookie-settings";

export type Consent = "accepted" | "rejected";

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { choice: Consent; at: number };
    if (Date.now() - v.at > TWELVE_MONTHS) return null;
    return v.choice;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// No consent-gated analytics script is bundled in the site code. Add any future
// analytics loader here so it only runs after "Accept analytics".
function loadAnalytics() {}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (c === "accepted") loadAnalytics();
    if (!c) setOpen(true);
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  const choose = (choice: Consent) => {
    localStorage.setItem(KEY, JSON.stringify({ choice, at: Date.now() }));
    if (choice === "accepted") loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;
  const btn =
    "min-w-[11rem] flex-1 sm:flex-none px-5 py-2.5 text-sm font-semibold border-2 border-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground";
  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/20 bg-deep text-primary-foreground shadow-lg"
    >
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm">
          We use strictly necessary cookies to run this website and, with your consent, analytics cookies to understand
          how it is used. You can change your choice at any time.{" "}
          <Link to="/privacy" className="font-semibold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
            Privacy Statement
          </Link>
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => choose("accepted")} className={`${btn} bg-primary-foreground text-foreground`}>
            Accept
          </button>
          <button type="button" onClick={() => choose("rejected")} className={`${btn} bg-primary-foreground text-foreground`}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
