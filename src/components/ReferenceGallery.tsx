import dsSmithLogo from "@/assets/reference/ds-logo-color.svg";
import lindnerLogo from "@/assets/reference/lindner_logo_white.svg";
import mewaLogo from "@/assets/reference/mewa.jpg";
import ottakringerLogo from "@/assets/reference/ottakringer.svg";
import voeslauerLogo from "@/assets/reference/voslauer.svg";

const CLIENTS = [
  {
    name: "DS Smith Packaging Austria GmbH",
    logo: dsSmithLogo,
    darkLogoPanel: false,
    text: "Technische Dämmarbeiten an Produktions- und Versorgungsleitungen. Die Ausführung erfolgte sauber koordiniert und abgestimmt auf den laufenden Betrieb.",
  },
  {
    name: "Ottakringer Brauerei",
    logo: ottakringerLogo,
    darkLogoPanel: false,
    text: "Isolierung von Anlagenbereichen und Rohrleitungen im Brauereiumfeld. Der Fokus lag auf effizienter Montage und widerstandsfähigen Oberflächen.",
  },
  {
    name: "MEWA Textil-Service GmbH",
    logo: mewaLogo,
    darkLogoPanel: false,
    text: "Dämmung technischer Leitungen und Anlagen zur Unterstützung energieeffizienter Prozesse. Die Umsetzung erfolgte nach Projektvorgabe und Terminplan.",
  },
  {
    name: "Vöslauer Mineralwasser",
    logo: voeslauerLogo,
    darkLogoPanel: false,
    text: "Wärme- und Kälteisolierung an gebäudetechnischen Anlagen. Montiert wurden langlebige Dämmaufbauten für einen zuverlässigen Betrieb.",
  },
  {
    name: "Lindner GmbH",
    logo: lindnerLogo,
    darkLogoPanel: true,
    text: "Brandschutz- und Isolierarbeiten in technischen Bereichen. Die Arbeiten wurden gewerkeübergreifend koordiniert und normgerecht ausgeführt.",
  },
];

export function ReferenceGallery({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section-y">
      <div className="container-x">
        {heading && (
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Referenzen</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
              Kunden, die uns vertrauen
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Ein Auszug ausgewählter Kunden aus Gewerbe, Industrie und technischer
              Gebäudeausrüstung.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CLIENTS.map((client) => (
            <article
              key={client.name}
              className="rounded-lg border border-border bg-white p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className={`flex h-32 items-center justify-center rounded-md border border-border px-8 ${
                  client.darkLogoPanel ? "bg-primary" : "bg-white"
                }`}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  loading="lazy"
                  className="max-h-16 w-full max-w-[240px] object-contain"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary">{client.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{client.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
