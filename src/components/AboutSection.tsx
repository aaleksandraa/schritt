import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import refPipework from "@/assets/ref-pipework.jpg";
import refHvac from "@/assets/ref-hvac.jpg";

const POINTS = [
  "Kälte- und Wärmeschutz zur Optimierung der Energiebilanz",
  "Schallschutz für mehr Komfort und Lebensqualität",
  "Brandschutz nach aktuellen gesetzlichen Vorschriften",
  "Fachgerechte Montage durch erfahrene Spezialisten",
];

const QUALITIES = [
  "Termintreue",
  "Saubere Arbeit",
  "Hohe Qualitätsstandards",
  "Persönliche Beratung",
];

export function AboutSection() {
  return (
    <section className="section-y">
      <div className="container-x grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={refPipework}
            alt="Industrielle Rohrisolierung in Wien"
            loading="lazy"
            width={1024}
            height={1024}
            className="rounded-lg w-full object-cover aspect-[4/5]"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          />
          <img
            src={refHvac}
            alt="Montage einer Lüftungsdämmung"
            loading="lazy"
            width={1024}
            height={1024}
            className="hidden md:block absolute -bottom-10 -right-8 w-2/3 rounded-lg border-4 border-white object-cover aspect-square"
            style={{ boxShadow: "var(--shadow-elevated)" }}
          />
        </div>

        <div>
          <span className="eyebrow">Über Uns</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
            Qualität, Sicherheit und Effizienz
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Als inhabergeführtes Unternehmen in Wien stehen wir für maßgeschneiderte Lösungen im
            Bereich der Isoliertechnik. Egal ob Gewerbeobjekt oder Wohnbau – wir bieten Ihnen
            umfassenden Schutz aus einer Hand.
          </p>

          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-accent/15 text-accent inline-flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-secondary rounded-lg border-l-4 border-accent">
            <p className="text-sm font-semibold text-primary mb-3">Unser Anspruch:</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {QUALITIES.map((q) => (
                <span key={q} className="text-sm text-foreground/80 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link to="/kontakt" className="btn-primary">
              Unverbindliches Angebot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
