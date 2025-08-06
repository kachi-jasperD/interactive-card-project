import ThankYouPage from "@/pages/ThankYouPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/confirmed")({
  component: Confirmed,
});

function Confirmed() {
  return <ThankYouPage />;
}
