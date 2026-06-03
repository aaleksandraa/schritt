import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/AboutSection";
import { WhyUs } from "@/components/WhyUs";
import { AboutGallery } from "@/components/AboutGallery";

const TITLE = "Über Uns – SCHRITT KW GmbH | Isolierfirma Wien";
const DESC =
  "Inhabergeführte Isolierfirma in Wien. Erfahren, zuverlässig, persönlich – maßgeschneiderte Isoliertechnik für Gewerbe, Industrie und Wohnbau.";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Über Uns"
        title="Qualität, Sicherheit und Effizienz aus Wien"
        subtitle="Wir sind Ihr Partner für professionelle Isoliertechnik in Wien und Umgebung."
      />
      <AboutSection />
      <WhyUs />
      <AboutGallery />
    </SiteLayout>
  );
}
