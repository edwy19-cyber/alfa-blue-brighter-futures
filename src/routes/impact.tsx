import { createFileRoute, redirect } from "@tanstack/react-router";

// /impact was replaced by /approach; keep the old address working.
export const Route = createFileRoute("/impact")({
  beforeLoad: () => {
    throw redirect({ to: "/approach", statusCode: 301 });
  },
});
