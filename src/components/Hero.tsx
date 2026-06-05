import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export function Hero({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <section className="relative flex min-h-screen min-h-svh w-full items-center overflow-hidden bg-white">
        <img
          src={heroImage}
          alt="Professionelle Isoliertechnik â€“ industrielle Anlage mit WÃ¤rmedÃ¤mmung"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="container-x relative z-10 flex max-w-4xl flex-col items-center py-28 text-center text-primary md:py-32">
          <span className="eyebrow text-brand-blue animate-fade-up">
            <ShieldCheck className="h-4 w-4" />
            Isoliertechnik Â· Wien
          </span>
          <h1
            className="mt-5 text-4xl font-bold leading-[1.05] animate-fade-up md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Professionelle <span className="text-brand-blue">Isoliertechnik</span> in Wien
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            KÃ¤lte-, WÃ¤rme-, Schall- und Brandschutz fÃ¼r Gewerbe, Industrie und Wohnbau.
            MaÃŸgeschneiderte LÃ¶sungen aus einer Hand.
          </p>
          <div
            className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/kontakt" className="btn-primary">
              Angebot anfragen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/35 bg-white/70 px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 animate-fade-up md:grid-cols-4"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { v: "20+", l: "Jahre Erfahrung" },
              { v: "500+", l: "Projekte" },
              { v: "100%", l: "Termintreue" },
              { v: "Wien", l: "& Umgebung" },
            ].map((s) => (
              <div key={s.l} className="border-t-2 border-brand-blue px-3 pt-3 text-center">
                <div className="text-2xl font-bold text-primary md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen min-h-svh w-full flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Professionelle Isoliertechnik – industrielle Anlage mit Wärmedämmung"
        className="absolute inset-0 h-full w-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgb(8 8 8 / 0.94) 0%, rgb(20 20 20 / 0.78) 60%, rgb(8 8 8 / 0.72) 100%)",
        }}
      />

      <div className="container-x relative z-10 flex max-w-4xl flex-col items-center py-28 text-center text-white md:py-32">
        <span className="eyebrow text-brand-blue animate-fade-up">
          <ShieldCheck className="h-4 w-4" />
          Isoliertechnik · Wien
        </span>
        <h1
          className="mt-5 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Professionelle <span className="text-brand-blue">Isoliertechnik</span> in Wien
        </h1>
        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 animate-fade-up md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Kälte-, Wärme-, Schall- und Brandschutz für Gewerbe, Industrie und Wohnbau.
          Maßgeschneiderte Lösungen aus einer Hand.
        </p>
        <div
          className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/kontakt" className="btn-primary">
            Angebot anfragen <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/leistungen" className="btn-outline">
            Leistungen ansehen
          </Link>
        </div>

        <div
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 animate-fade-up md:grid-cols-4"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { v: "2", l: "Jahre Erfahrung" },
            { v: "20+", l: "Projekte" },
            { v: "100%", l: "Termintreue" },
            { v: "Wien", l: "& Umgebung" },
          ].map((s) => (
            <div key={s.l} className="border-t-2 border-brand-blue px-3 pt-3 text-center">
              <div className="text-2xl md:text-3xl font-bold">{s.v}</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
