import { Award, Gem, Clock, Wrench } from "lucide-react";

const ITEMS = [
  { icon: Award, title: "Erfahrung", text: "Langjährige Erfahrung im Bereich Isoliertechnik." },
  { icon: Gem, title: "Qualität", text: "Hochwertige Materialien und professionelle Ausführung." },
  { icon: Clock, title: "Zuverlässigkeit", text: "Termingerechte Umsetzung aller Projekte." },
  {
    icon: Wrench,
    title: "Individuelle Lösungen",
    text: "Maßgeschneiderte Konzepte für jedes Objekt.",
  },
];

export function WhyUs() {
  return (
    <section className="section-y bg-primary text-white relative overflow-hidden">
      <div className="container-x relative">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Warum SCHRITT KW</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Vier gute Gründe für unsere Partnerschaft
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((i, idx) => (
            <div key={i.title} className="relative">
              <div className="text-accent text-6xl font-bold opacity-20 leading-none">
                0{idx + 1}
              </div>
              <i.icon className="h-8 w-8 text-accent -mt-8 relative" />
              <h3 className="mt-5 text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
