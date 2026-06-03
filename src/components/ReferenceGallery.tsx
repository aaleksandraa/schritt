import { useState } from "react";
import { X } from "lucide-react";
import refIndustrial from "@/assets/ref-industrial.jpg";
import refHvac from "@/assets/ref-hvac.jpg";
import refCold from "@/assets/ref-cold.jpg";
import refFire from "@/assets/ref-fire.jpg";
import refAcoustic from "@/assets/ref-acoustic.jpg";
import refPipework from "@/assets/ref-pipework.jpg";

const PROJECTS = [
  { img: refIndustrial, title: "Industrieanlage", category: "Wärmedämmung", span: "row-span-2" },
  { img: refHvac, title: "Lüftungsdämmung", category: "Gewerbeobjekt", span: "" },
  { img: refCold, title: "Kälteleitungen", category: "Technische Anlagen", span: "" },
  { img: refAcoustic, title: "Akustikdecke", category: "Schallschutz", span: "row-span-2" },
  { img: refFire, title: "Brandschutzisolierung", category: "Gewerbe", span: "" },
  { img: refPipework, title: "Versorgungstechnik", category: "Industrie", span: "" },
];

export function ReferenceGallery({ heading = true }: { heading?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-y">
      <div className="container-x">
        {heading && (
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Referenzen</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
              Ausgewählte Projekte
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Ein Auszug unserer Arbeiten aus Gewerbe, Industrie, Wohnbau und technischen Anlagen.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-4">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(p.img)}
              className={`relative overflow-hidden rounded-lg group cursor-zoom-in ${p.span}`}
              aria-label={`${p.title} vergrößern`}
            >
              <img
                src={p.img}
                alt={`${p.title} – ${p.category}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs text-accent font-semibold uppercase tracking-wider">
                  {p.category}
                </div>
                <div className="mt-1 text-lg font-bold">{p.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-up"
          onClick={() => setActive(null)}
          role="dialog"
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2"
            onClick={() => setActive(null)}
            aria-label="Schließen"
          >
            <X className="h-8 w-8" />
          </button>
          <img src={active} alt="Projektansicht" className="max-h-[90vh] max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}
