import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";

const TITLE = "Kontakt – SCHRITT KW GmbH | Isoliertechnik Wien";
const DESC =
  "Kontaktieren Sie SCHRITT KW GmbH in Wien – wir freuen uns auf Ihre Anfrage zu Isoliertechnik, Wärmedämmung, Kälteisolierung, Schallschutz und Brandschutz.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Projekt"
        subtitle="Unverbindliches Angebot, persönliche Beratung – wir sind für Sie da."
      />
      <ContactSection heading={false} />
    </SiteLayout>
  );
}
