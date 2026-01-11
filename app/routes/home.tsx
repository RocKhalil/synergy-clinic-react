import type { Route } from "./+types/home";
import { Instagram } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Synergy Clinic - Coming Soon" },
    {
      name: "description",
      content:
        "Care. Strength. Nutrition. - Synergy Clinic is coming soon with a new website.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Logo */}
          <div className="mb-6 animate-fade-in">
            <div className="w-md mx-auto mb-4">
              <img
                src="/logo.png"
                alt="Synergy Clinic Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in-up text-primary tracking-[0.2em]">
              Healing in Synergy.
            </h1>
          </div>

          {/* Coming Soon Section */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <p className="text-lg md:text-xl max-w-lg mx-auto leading-relaxed text-primary">
              Our new website is on its way.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-green-light animate-fade-in animation-delay-600">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <a
              href="tel:+96178787570"
              className="transition-colors hover:opacity-70 text-primary"
            >
              +961 78 787 570
            </a>
            <a
              href="mailto:info@synergy.clinic"
              className="transition-colors hover:opacity-70 text-primary"
            >
              info@synergy.clinic
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/synergycliniclb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green transition-all hover:scale-110 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
