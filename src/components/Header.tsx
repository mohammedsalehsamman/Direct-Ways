import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#offers", label: "العروض" },
  { href: "#contact", label: "اتصل بنا" },
];

function DirectWaysLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Icon mark */}
      <div className="relative flex-shrink-0">
        <svg
          width={compact ? 48 : 56}
          height={compact ? 48 : 56}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer D-shape */}
          <path
            d="M6 4 L24 4 C40 4 52 14 52 28 C52 42 40 52 24 52 L6 52 Z"
            fill="#1a2456"
          />
          {/* Inner cutout */}
          <path
            d="M13 12 L23 12 C35 12 44 19 44 28 C44 37 35 44 23 44 L13 44 Z"
            fill="#2a3870"
          />
          {/* Core cutout */}
          <path
            d="M18 20 L22 20 C29 20 35 23.5 35 28 C35 32.5 29 36 22 36 L18 36 Z"
            fill="#1a2456"
          />
          {/* Airplane silhouette */}
          <g transform="translate(14, 17) rotate(-10)">
            <path
              d="M4 11 L22 7 C24 6.5 25 7.5 24 9 L18 13 L20 20 L16 19 L14 14 L8 16 L9 19 L6 18 L5 14 L2 13 Z"
              fill="white"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-arabic-headline font-black tracking-wide"
          style={{
            fontSize: compact ? "1.05rem" : "1.2rem",
            color: "#1a2456",
            letterSpacing: "0.03em",
          }}
        >
          دايركت وايز
        </span>
        <span
          className="font-bold tracking-widest uppercase"
          style={{
            fontSize: compact ? "0.65rem" : "0.72rem",
            color: "#b8962e",
            letterSpacing: "0.18em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Direct Ways
        </span>
        <span
          className="tracking-wider uppercase"
          style={{
            fontSize: "0.52rem",
            color: "#b8962e",
            opacity: 0.85,
            letterSpacing: "0.12em",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Travel &amp; Tourism
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ["home", "about", "services", "offers", "contact"];
      for (const id of sections.slice().reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg shadow-black/8 border-b border-outline-variant/30"
            : "bg-white/95 backdrop-blur-md"
        }`}
        style={{ minHeight: scrolled ? 68 : 80 }}
      >
        <div className="max-w-container-max mx-auto px-md h-full">
          <div
            className="flex items-center justify-between w-full transition-all duration-300"
            style={{ height: scrolled ? 68 : 80 }}
          >
            {/* Book Now — left side (LTR visual left = RTL document right via flex-row-reverse) */}
            <div className="flex items-center gap-3">
              {/* Book button */}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary font-arabic-headline font-bold px-5 py-2.5 text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: 18 }}>
                  airplane_ticket
                </span>
                احجز الآن
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-primary/5 transition-colors"
                aria-label="القائمة"
              >
                <span
                  className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>
            </div>

            {/* Nav — center */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative font-arabic-headline font-semibold text-sm px-4 py-2 transition-colors duration-200 group ${
                      isActive
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 right-0 left-0 mx-auto h-0.5 bg-secondary transition-all duration-300 ${
                        isActive ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"
                      }`}
                      style={{ borderRadius: 2 }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Logo — right side (RTL = visually right) */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex-shrink-0"
            >
              <DirectWaysLogo compact={scrolled} />
            </a>
          </div>
        </div>

        {/* Gold accent line */}
        <div
          className="absolute bottom-0 inset-x-0 h-px transition-opacity duration-300"
          style={{
            background: "linear-gradient(to left, transparent, #b8962e55, #b8962e, #b8962e55, transparent)",
            opacity: scrolled ? 1 : 0,
          }}
        />
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel — slides from right */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined text-primary" style={{ fontSize: 22 }}>close</span>
            </button>
            <DirectWaysLogo compact />
          </div>

          {/* Drawer links */}
          <nav className="flex-1 flex flex-col py-4 overflow-y-auto">
            {navLinks.map((link, i) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`flex items-center justify-end gap-4 px-6 py-4 font-arabic-headline font-semibold text-base transition-all duration-200 border-b border-outline-variant/20 ${
                    isActive
                      ? "text-primary bg-secondary/10 border-r-4 border-r-secondary"
                      : "text-on-surface-variant hover:text-primary hover:bg-primary/4"
                  }`}
                  style={{
                    animationDelay: `${i * 50}ms`,
                    borderRightWidth: isActive ? 4 : 0,
                    borderRightColor: isActive ? "#b8962e" : "transparent",
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Drawer footer */}
          <div className="p-6 border-t border-outline-variant/30">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-arabic-headline font-bold py-3 text-base hover:bg-primary/90 transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: 20 }}>
                airplane_ticket
              </span>
              احجز الآن
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
