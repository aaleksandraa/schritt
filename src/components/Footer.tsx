import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/Logo.png";

export function Footer() {
  return (
    <footer className="bg-[color:var(--anthracite)] text-white/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <img
            src={logoImage}
            alt="SCHRITT KW Isoliertechnik"
            className="h-14 w-auto mb-4"
            width={140}
            height={56}
          />
          <p className="text-sm leading-relaxed text-white/65 max-w-xs">
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
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>
                SCHRITT KW GmbH
                <br />
                Leystraße 104/6/35
                <br />
                1200 Wien
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <a href="tel:+436604620390" className="hover:text-accent transition-colors">
                +43 660 4620390
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <a href="mailto:office@schritt-kw.at" className="hover:text-accent transition-colors">
                office@schritt-kw.at
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} SCHRITT KW GmbH. Alle Rechte vorbehalten.</p>
          <p>UID: ATU81471729 · FN 640179s</p>
        </div>
      </div>
    </footer>
  );
}
