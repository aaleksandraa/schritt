import type { ReactNode } from "react";
import { Building2, Hash, Mail, MapPin, Phone } from "lucide-react";

const MAP_SRC =
  "https://www.google.com/maps?q=Leystra%C3%9Fe%20104%2F6%2F35%2C%201200%20Wien%2C%20Austria&output=embed";

export function ContactSection({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section-y bg-[color:var(--light-grey)]">
      <div className="container-x">
        {heading && (
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Kontakt</span>
            <h2 className="mt-3 text-3xl font-bold text-primary md:text-5xl">
              Direkt erreichbar in Wien
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir melden uns zeitnah zu Ihrem
              Projekt.
            </p>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="bg-primary p-8 text-white">
            <h3 className="text-2xl font-bold">SCHRITT KW GmbH</h3>
            <ul className="mt-8 space-y-5 text-white/85">
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Adresse">
                Leystraße 104/6/35
                <br />
                1200 Wien, Österreich
              </ContactRow>
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Telefon">
                <a href="tel:+436604620390" className="hover:text-accent">
                  +43 660 4620390
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5" />} label="E-Mail">
                <a href="mailto:office@schritt-kw.at" className="hover:text-accent">
                  office@schritt-kw.at
                </a>
              </ContactRow>
              <ContactRow icon={<Building2 className="h-5 w-5" />} label="Firmendaten">
                UID: ATU81471729
                <br />
                Firmenbuchnummer: FN 640179s
              </ContactRow>
              <ContactRow icon={<Hash className="h-5 w-5" />} label="Steuernummer">
                12 912/3576
              </ContactRow>
            </ul>
          </div>

          <div className="min-h-[420px] overflow-hidden border border-border bg-white">
            <iframe
              title="Google Maps Standort SCHRITT KW GmbH"
              src={MAP_SRC}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-accent/20 text-accent">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-white/55">{label}</div>
        <div className="mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
