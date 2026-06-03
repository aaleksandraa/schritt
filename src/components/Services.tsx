import { Link } from "@tanstack/react-router";
import { Flame, Snowflake, Volume2, ShieldAlert, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES: { icon: LucideIcon; title: string; text: string; slug: string }[] = [
  {
    icon: Flame,
    title: "Wärmedämmung",
    text: "Optimale Energieeffizienz und nachhaltige Reduzierung von Wärmeverlusten an Rohrleitungen, Behältern und Anlagen.",
    slug: "waermedaemmung",
  },
  {
    icon: Snowflake,
    title: "Kälteisolierung",
    text: "Professionelle Isolierung von Kälteanlagen, Kaltwasserleitungen und technischen Anlagen – tauwassersicher ausgeführt.",
    slug: "kaelteisolierung",
  },
  {
    icon: Volume2,
    title: "Schallschutz",
    text: "Effektive Lösungen zur Reduzierung von Lärm und Schallübertragung in Gewerbe, Industrie und Wohnbau.",
    slug: "schallschutz",
  },
  {
    icon: ShieldAlert,
    title: "Brandschutz",
    text: "Sichere und normgerechte Brandschutzisolierungen für Lüftungs- und Versorgungsleitungen nach aktuellen Vorschriften.",
    slug: "brandschutz",
  },
];

export function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section-y bg-[color:var(--light-grey)]">
      <div className="container-x">
        {heading && (
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Unsere Leistungen</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
              Isoliertechnik aus einer Hand
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Vom ersten Beratungstermin bis zur fachgerechten Montage – wir liefern technische
              Isolierungen auf höchstem Qualitätsniveau.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/leistungen"
              hash={s.slug}
              className="group relative bg-white p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
              <div className="flex items-center gap-4 pr-8">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              <div className="mt-6 text-sm font-semibold text-accent inline-flex items-center gap-1">
                Mehr erfahren <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
