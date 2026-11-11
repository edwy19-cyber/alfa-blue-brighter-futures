import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { SPONSORSHIP_ENQUIRY_TYPE } from "@/routes/how-sponsorship-works";
import { ENQUIRY_TYPES } from "@/lib/enquiry";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the safeguarding policy page linked from the corporate information card", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/safeguarding");

    expect(matches.at(-1)?.routeId).toBe("/safeguarding");
  });

  it("matches the sponsorship page linked from the footer", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/how-sponsorship-works");

    expect(matches.at(-1)?.routeId).toBe("/how-sponsorship-works");
  });

  it("presets a sponsorship enquiry type the contact form actually offers", () => {
    // The contact form ignores an unknown `type` parameter and opens on its default option.
    expect(ENQUIRY_TYPES).toContain(SPONSORSHIP_ENQUIRY_TYPE);
  });
});
