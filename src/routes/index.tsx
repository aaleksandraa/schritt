import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { ReferenceGallery } from "@/components/ReferenceGallery";
import { ContactSection } from "@/components/ContactSection";

const TITLE = "Isoliertechnik Wien | SCHRITT KW GmbH – Wärme-, Kälte-, Schall- & Brandschutz";
const DESC =
  "Isoliertechnik in Wien: Wärmedämmung, Kälteisolierung, Schallschutz und Brandschutz aus einer Hand. SCHRITT KW GmbH – Ihr Partner für Gewerbe, Industrie & Wohnbau.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "Isoliertechnik Wien, Wärmedämmung Wien, Kälteisolierung Wien, Schallschutz Wien, Brandschutz Wien, Isolierfirma Wien",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <Services />
      <WhyUs />
      <ReferenceGallery />
      <ContactSection />
    </SiteLayout>
  );
}
