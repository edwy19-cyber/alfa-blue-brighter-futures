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

const SHARE_ORIGIN = "https://alfablueme.com";
const SHARE_IMAGE = `${SHARE_ORIGIN}/og-image.png`;

export function pageHead(title: string, description: string, path = "/") {
  const full = `${title} | ALFA BLUE`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path === "/" ? SHARE_ORIGIN : `${SHARE_ORIGIN}${path}` },
      { property: "og:site_name", content: "ALFA BLUE" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ALFA BLUE logo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
  };
}
