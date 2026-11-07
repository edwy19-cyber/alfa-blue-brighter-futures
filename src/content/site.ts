// Central content config. Keep copy here so future Arabic/French versions can mirror this structure.
export const NAV = [
  { to: "/", label: "Home" },
  { to: "/ai-coding-literacy", label: "AI & Coding" },
  { to: "/financial-literacy", label: "Financial Literacy" },
  { to: "/partnerships", label: "Partnerships & Impact" },
  { to: "/about", label: "About & Expertise" },
  { to: "/contact", label: "Contact" },
] as const;

export const SITE_URL = "https://alfablueme.com";

export const LEGAL_NAME = "ALFA BLUE Management Consulting LLC";
export const REGISTERED_ADDRESS = ["16192 Coastal Highway", "Lewes, Delaware 19958", "County of Sussex, USA"] as const;

export function pageHead(title: string, description: string) {
  const full = `${title} | ALFA BLUE`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
