import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  eyebrow,
  subtitle,
}: {
  title: string;
  eyebrow: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white pt-32 pb-16 text-primary">
      <div className="container-x relative">
        <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Startseite
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary/80">{eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
