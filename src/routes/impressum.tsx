import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

const TITLE = "Impressum – SCHRITT KW GmbH";
const DESC = "Impressum der SCHRITT KW GmbH mit Angaben gemäß § 5 ECG, § 14 UGB und Mediengesetz.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Page,
});

const SECTIONS = [
  {
    title: "Kontakt",
    items: ["Telefon: +43 660 4620390", "E-Mail: office@schritt-kw.at"],
  },
  {
    title: "Unternehmensdaten",
    items: [
      "Geschäftsführer: Marijo Petric",
      "Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)",
      "Firmenbuchnummer: FN 640179s",
      "Firmenbuchgericht: Handelsgericht Wien",
      "UID-Nummer: ATU81471729",
      "Steuernummer: 12 912/3576",
    ],
  },
  {
    title: "Unternehmensgegenstand",
    text: "Wärme-, Kälte-, Schall- und Brandschutzisolierungen sowie sämtliche damit verbundenen Dienstleistungen.",
  },
  {
    title: "Zuständige Gewerbebehörde",
    text: "Magistratisches Bezirksamt Wien",
  },
  {
    title: "Mitgliedschaft",
    text: "Mitglied der Wirtschaftskammer Wien",
  },
  {
    title: "Anwendbare Rechtsvorschriften",
    items: ["Gewerbeordnung (GewO)", "Abrufbar unter: https://www.ris.bka.gv.at"],
  },
  {
    title: "Haftung für Inhalte",
    text: "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen.",
  },
  {
    title: "Urheberrecht",
    text: "Sämtliche Inhalte dieser Website (Texte, Bilder, Grafiken und sonstige Dateien) unterliegen dem Urheberrecht. Jede Verwendung, Vervielfältigung oder Verbreitung bedarf der ausdrücklichen schriftlichen Zustimmung der SCHRITT KW GmbH.",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Impressum"
        title="Impressum"
        subtitle="Angaben gemäß § 5 ECG, § 14 UGB und Mediengesetz"
      />

      <section className="section-y">
        <div className="container-x max-w-4xl">
          <div className="rounded-lg border border-border bg-white p-6 md:p-10">
            <h2 className="text-2xl font-bold text-primary">SCHRITT KW GmbH</h2>
            <p className="mt-5 leading-relaxed text-foreground/85">
              Leystraße 104/6/35
              <br />
              1200 Wien
              <br />
              Österreich
            </p>

            <div className="mt-10 grid gap-8">
              {SECTIONS.map((section) => (
                <section key={section.title}>
                  <h3 className="text-lg font-bold text-primary">{section.title}</h3>
                  {section.text && (
                    <p className="mt-3 leading-relaxed text-foreground/85">{section.text}</p>
                  )}
                  {section.items && (
                    <ul className="mt-3 space-y-2 text-foreground/85">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
