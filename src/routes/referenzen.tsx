import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ReferenceGallery } from "@/components/ReferenceGallery";

const TITLE = "Referenzen – Kunden | SCHRITT KW Isoliertechnik Wien";
const DESC =
  "Ausgewählte Kunden und Referenzen aus Gewerbe, Industrie und technischen Anlagen – ausgeführt von SCHRITT KW GmbH in Wien.";

export const Route = createFileRoute("/referenzen")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/referenzen" },
    ],
    links: [{ rel: "canonical", href: "/referenzen" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Referenzen"
        title="Unsere Kunden"
        subtitle="Ein Auszug aus Referenzen, für die wir technische Isolierarbeiten umgesetzt haben."
      />
      <ReferenceGallery heading={false} />
    </SiteLayout>
  );
}
