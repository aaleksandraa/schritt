import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Gauge,
  ShieldAlert,
  Snowflake,
  Volume2,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ReferenceGallery } from "@/components/ReferenceGallery";
import { ContactSection } from "@/components/ContactSection";
import heroImage from "@/assets/hero.jpg";

const TITLE = "Startseite 3 | SCHRITT KW GmbH";
const DESC =
  "Alternative Startseite fuer SCHRITT KW GmbH mit Split-Hero, heller Gestaltung und direktem Fokus auf Isoliertechnik.";

const SERVICES = [
  {
    icon: Flame,
    title: "Waermedaemmung",
    text: "Fachgerechte Daemmung fuer Rohrleitungen, Anlagen und technische Raeume.",
  },
  {
    icon: Snowflake,
    title: "Kaelteisolierung",
    text: "Tauwassersichere Loesungen fuer Kaelteanlagen und Kaltwasserleitungen.",
  },
  {
    icon: Volume2,
    title: "Schallschutz",
    text: "Spuerbar weniger Schalluebertragung in Gewerbe, Industrie und Wohnbau.",
  },
  {
    icon: ShieldAlert,
    title: "Brandschutz",
    text: "Normgerechte Isolierungen fuer Lueftungs- und Versorgungsleitungen.",
  },
];

const PROCESS = ["Besichtigung", "Materialkonzept", "Montage", "Abnahme"];

export const Route = createFileRoute("/startseite3")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/startseite3" },
    ],
    links: [{ rel: "canonical", href: "/startseite3" }],
  }),
  component: Startseite3,
});

function Startseite3() {
  return (
    <SiteLayout>
      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <span className="eyebrow text-brand-blue">
              <Gauge className="h-4 w-4" />
              Praezise Isoliertechnik
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-primary md:text-6xl">
              Technische Daemmung fuer Gebaeude, Gewerbe und Industrie.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SCHRITT KW plant und montiert Waerme-, Kaelte-, Schall- und Brandschutzloesungen
              sauber, termintreu und passend zu Ihrem Objekt.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/kontakt" className="btn-primary">
                Projekt anfragen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/leistungen"
                className="inline-flex items-center justify-center rounded-md border border-primary/20 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                Leistungen
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {["Wien & Umgebung", "Fachgerechte Montage", "Direkte Beratung"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-blue" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-5 right-8 z-10 bg-white px-5 py-4 shadow-[0_18px_45px_-25px_rgb(43_43_43_/_0.55)]">
              <div className="text-3xl font-bold text-brand-blue">500+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Projekte
              </div>
            </div>
            <img
              src={heroImage}
              alt="Professionelle Isoliertechnik an industriellen Anlagen"
              className="h-[420px] w-full object-cover object-center md:h-[560px]"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="section-y bg-[color:var(--light-grey)]">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <span className="eyebrow">Kompetenzen</span>
              <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
                Vier Bereiche, ein sauberer Ablauf.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  to="/leistungen"
                  className="group border border-border bg-white p-6 transition-colors hover:border-brand-blue"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-white transition-colors group-hover:bg-brand-blue">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <span className="eyebrow text-brand-blue">Ablauf</span>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">Vom Objektcheck zur Abnahme.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {PROCESS.map((step, index) => (
                <div key={step} className="border-t border-white/20 pt-4">
                  <div className="text-sm font-bold text-brand-blue">0{index + 1}</div>
                  <div className="mt-2 text-sm font-semibold">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReferenceGallery />
      <ContactSection />
    </SiteLayout>
  );
}
