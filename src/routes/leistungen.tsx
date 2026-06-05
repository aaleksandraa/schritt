import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Flame, Snowflake, Volume2, ShieldAlert, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import waermedaemmungImage from "@/assets/leistungen/Wärmedämmung.jpg";
import kaelteisolierungImage from "@/assets/leistungen/kalte.jpeg";
import schallschutzImage from "@/assets/leistungen/Schallschutz.jpg";
import brandschutzImage from "@/assets/leistungen/brandschutz.jpg";

const TITLE = "Leistungen – Isoliertechnik Wien | SCHRITT KW GmbH";
const DESC =
  "Unsere Leistungen: Wärmedämmung, Kälteisolierung, Schallschutz und Brandschutz in Wien – fachgerecht, normgerecht und termintreu.";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/leistungen" },
    ],
    links: [{ rel: "canonical", href: "/leistungen" }],
  }),
  component: Page,
});

const DETAILS: {
  slug: string;
  icon: LucideIcon;
  title: string;
  image: string;
  lead: string;
  bullets: string[];
}[] = [
  {
    slug: "waermedaemmung",
    icon: Flame,
    title: "Wärmedämmung",
    image: waermedaemmungImage,
    lead: "Optimale Energieeffizienz und nachhaltige Reduzierung von Wärmeverlusten.",
    bullets: [
      "Dämmung von Heizungs- und Warmwasserleitungen",
      "Behälter-, Kessel- und Apparatedämmung",
      "Verkleidung mit Blechmänteln (Alu, verzinkt, Edelstahl)",
      "Energieeinsparung nach aktuellen Normen",
    ],
  },
  {
    slug: "kaelteisolierung",
    icon: Snowflake,
    title: "Kälteisolierung",
    image: kaelteisolierungImage,
    lead: "Professionelle Isolierung von Kälteanlagen, Leitungen und technischen Anlagen.",
    bullets: [
      "Tauwassersichere Dämmsysteme",
      "Kaltwasser- und Klimaleitungen",
      "Kälte- und Tiefkühlanlagen",
      "Industrielle Prozessanlagen",
    ],
  },
  {
    slug: "schallschutz",
    icon: Volume2,
    title: "Schallschutz",
    image: schallschutzImage,
    lead: "Effektive Lösungen zur Reduzierung von Lärm und Schallübertragung.",
    bullets: [
      "Akustische Verkleidungen",
      "Schalldämmung von Lüftungskanälen",
      "Maschinenkapselungen",
      "Wohnbau- und Gewerbeobjekte",
    ],
  },
  {
    slug: "brandschutz",
    icon: ShieldAlert,
    title: "Brandschutz",
    image: brandschutzImage,
    lead: "Sichere und normgerechte Brandschutzlösungen für Gebäude und Industrie.",
    bullets: [
      "Brandschutzisolierung für Lüftungsanlagen",
      "Abschottungen nach ÖNORM",
      "Kabel- und Rohrabschottungen",
      "Dokumentation & Kennzeichnung",
    ],
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Leistungen"
        title="Isoliertechnik aus einer Hand"
        subtitle="Wir planen, liefern und montieren technische Isolierungen für jeden Anwendungsbereich."
      />

      <section className="section-y">
        <div className="container-x grid gap-12">
          {DETAILS.map((s, idx) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid gap-10 lg:grid-cols-2 items-center scroll-mt-28 ${idx % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative overflow-hidden rounded-lg bg-[color:var(--light-grey)] aspect-[5/4]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="absolute left-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-white/90 text-accent shadow-sm backdrop-blur-sm">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <span className="eyebrow">0{idx + 1} · Leistung</span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">{s.title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">{s.lead}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-foreground/85">
                      <Check className="h-5 w-5 text-accent shrink-0" strokeWidth={2.5} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/kontakt" className="btn-primary mt-8">
                  Angebot für {s.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
