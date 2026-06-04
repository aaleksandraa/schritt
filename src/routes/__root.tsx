import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoImage from "@/assets/Logo.png";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SCHRITT KW GmbH",
  description:
    "Professionelle Isoliertechnik in Wien – Kälte-, Wärme-, Schall- und Brandschutz für Gewerbe, Industrie und Wohnbau.",
  image: logoImage,
  telephone: "+43 660 4620390",
  email: "office@schritt-kw.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Leystraße 104/6/35",
    addressLocality: "Wien",
    postalCode: "1200",
    addressCountry: "AT",
  },
  areaServed: "Wien und Umgebung",
  vatID: "ATU81471729",
  url: "/",
  priceRange: "€€",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Seite nicht gefunden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Seite konnte nicht geladen werden</h1>
        <p className="mt-2 text-sm text-muted-foreground">Bitte versuchen Sie es erneut.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="btn-outline"
            style={{ color: "var(--color-primary)", borderColor: "var(--color-primary)" }}
          >
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SCHRITT KW GmbH – Isoliertechnik Wien" },
      {
        name: "description",
        content:
          "SCHRITT KW GmbH – Ihr Spezialist für Isoliertechnik in Wien. Wärmedämmung, Kälteisolierung, Schallschutz und Brandschutz für Gewerbe, Industrie und Wohnbau.",
      },
      { name: "author", content: "SCHRITT KW GmbH" },
      { property: "og:site_name", content: "SCHRITT KW GmbH" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_AT" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#2b2b2b" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
