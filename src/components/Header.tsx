import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/Logo.png";

const NAV = [
  { to: "/", label: "Startseite" },
  { to: "/ueber-uns", label: "Über Uns" },
  { to: "/leistungen", label: "Leistungen" },
  { to: "/referenzen", label: "Referenzen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === "/";
  const solidHeader = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "border-b border-border bg-white/95 text-primary shadow-sm backdrop-blur-md"
          : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="SCHRITT KW Startseite">
          <img
            src={logoImage}
            alt="SCHRITT KW Isoliertechnik"
            className="h-12 w-auto"
            width={120}
            height={48}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-4 py-2 text-sm font-medium transition-colors relative group ${
                solidHeader
                  ? "text-primary/75 hover:text-primary"
                  : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: `px-4 py-2 text-sm font-semibold ${
                  solidHeader ? "text-primary" : "text-white"
                }`,
              }}
            >
              {item.label}
              <span className="absolute inset-x-4 bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+436604620390"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              solidHeader ? "text-primary/75 hover:text-primary" : "text-white/85 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            +43 660 4620390
          </a>
          <Link to="/kontakt" className="btn-primary">
            Angebot anfragen
          </Link>
        </div>

        <button
          aria-label="Menü öffnen"
          aria-expanded={open}
          className={`lg:hidden p-2 ${solidHeader ? "text-primary" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-medium text-primary/85"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              Angebot anfragen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
