import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ReferenceGallery } from "@/components/ReferenceGallery";

const TITLE = "Referenzen – Projekte | SCHRITT KW Isoliertechnik Wien";
const DESC =
  "Ausgewählte Referenzprojekte aus Gewerbe, Industrie, Wohnbau und technischen Anlagen – ausgeführt von SCHRITT KW GmbH in Wien.";

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
        title="Unsere Projekte"
        subtitle="Ein Auszug aus unserer Arbeit für Gewerbe, Industrie, Wohnbau und technische Anlagen."
      />
      <ReferenceGallery heading={false} />
    </SiteLayout>
  );
}
