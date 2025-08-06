import CardDetailsPage from "@/pages/CardDetailsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <CardDetailsPage />
  );
}