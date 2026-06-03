import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { ReferenceGallery } from "@/components/ReferenceGallery";
import { ContactSection } from "@/components/ContactSection";

const TITLE = "Startseite 2 | SCHRITT KW GmbH";
const DESC =
  "Alternative Startseite fuer SCHRITT KW GmbH mit heller Hero-Sektion und professioneller Isoliertechnik in Wien.";

export const Route = createFileRoute("/startseite2")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/startseite2" },
    ],
    links: [{ rel: "canonical", href: "/startseite2" }],
  }),
  component: Startseite2,
});

function Startseite2() {
  return (
    <SiteLayout>
      <Hero variant="light" />
      <AboutSection />
      <Services />
      <WhyUs />
      <ReferenceGallery />
      <ContactSection />
    </SiteLayout>
  );
}
