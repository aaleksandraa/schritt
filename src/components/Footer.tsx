import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--anthracite)] text-white/80">
      <div className="container-x grid gap-12 py-16 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logoImage}
            alt="SCHRITT KW Isoliertechnik"
            className="h-14 w-auto mb-4"
            width={140}
            height={56}
          />
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            Ihr Spezialist für professionelle Isoliertechnik in Wien – Kälte-, Wärme-, Schall- und
            Brandschutz aus einer Hand.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/", label: "Startseite" },
              { to: "/ueber-uns", label: "Über Uns" },
              { to: "/leistungen", label: "Leistungen" },
              { to: "/referenzen", label: "Referenzen" },
              { to: "/kontakt", label: "Kontakt" },
              { to: "/impressum", label: "Impressum" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
            Kontakt
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-center gap-3 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                SCHRITT KW GmbH
                <br />
                Leystraße 104/6/35
                <br />
                1200 Wien
              </span>
            </li>
            <li className="flex justify-center gap-3 md:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+436604620390" className="hover:text-accent transition-colors">
                +43 660 4620390
              </a>
            </li>
            <li className="flex justify-center gap-3 md:justify-start">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:office@schritt-kw.at" className="hover:text-accent transition-colors">
                office@schritt-kw.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/55 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} SCHRITT KW GmbH. Alle Rechte vorbehalten.</p>
          <p>UID: ATU81471729 · FN 640179s</p>
        </div>
      </div>
    </footer>
  );
}
