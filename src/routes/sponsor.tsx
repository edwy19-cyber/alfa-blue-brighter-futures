import { createFileRoute, redirect } from "@tanstack/react-router";

// /sponsor was replaced by /how-sponsorship-works; keep the old address working.
export const Route = createFileRoute("/sponsor")({
  beforeLoad: () => {
    throw redirect({ to: "/how-sponsorship-works", statusCode: 301 });
  },
});
