import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Synergy Clinic - Care. Strength. Nutrition." },
    {
      name: "description",
      content:
        "Synergy Clinic - Your holistic health partner combining physical well-being, nourishment, and support.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Empty landing page */}
    </div>
  );
}
