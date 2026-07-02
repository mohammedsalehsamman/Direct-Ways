import { useState, useEffect } from "react";
import { Ticket, X, Menu } from "lucide-react";

const navLinks = [
  { href: "#home",     label: "الرئيسية" },
  { href: "#about",    label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#offers",   label: "العروض" },
  { href: "#contact",  label: "اتصل بنا" },
];

function DirectWaysLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative flex-shrink-0">
        <svg
          width={compact ? 44 : 52}
          height={compact ? 44 : 52}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 4 L24 4 C40 4 52 14 52 28 C52 42 40 52 24 52 L6 52 Z" fill="#1a2456" />
          <path d="M13 12 L23 12 C35 12 44 19 44 28 C44 37 35 44 23 44 L13 44 Z" fill="#2a3870" />
          <path d="M18 20 L22 20 C29 20 35 23.5 35 28 C35 32.5 29 36 22 36 L18 36 Z" fill="#1a2456" />
          <g transform="translate(14,17) rotate(-10)">
            <path
              d="M4 11 L22 7 C24 6.5 25 7.5 24 9 L18 13 L20 20 L16 19 L14 14 L8 16 L9 19 L6 18 L5 14 L2 13 Z"
              fill="white"
              opacity="0.95"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={compact ? "logo-name logo-name-compact" : "logo-name"}>
          دايركت وايز
        </span>
        <span className="logo-sub">Direct Ways</span>
        <span className="logo-tagline">Travel &amp; Tourism</span>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["home", "about", "services", "offers", "contact"];
      for (const id of [...sections].reverse()) {
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-white shadow-lg shadow-black/8 border-b border-outline-variant/30"
            : "h-20 bg-white/96 backdrop-blur-md"
        }`}
      >
        <div className="max-w-container-max mx-auto px-md h-full flex items-center justify-between">

          {/* Left: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-5 py-2.5 text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-md"
            >
              <Ticket className="w-4 h-4 text-secondary" />
              احجز الآن
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={menuOpen ? "true" : "false"}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-primary/5 transition-colors"
            >
              {menuOpen
                ? <X className="w-6 h-6 text-primary" />
                : <Menu className="w-6 h-6 text-primary" />
              }
            </button>
          </div>

          {/* Center: desktop nav */}
          <nav aria-label="القائمة الرئيسية" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id      = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-semibold text-sm px-4 py-2 transition-colors duration-200 group ${
                    isActive ? "text-primary" : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 right-0 left-0 mx-auto h-0.5 bg-secondary rounded-full transition-all duration-300 ${
                      isActive ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            aria-label="دايركت وايز للسفر والسياحة — الصفحة الرئيسية"
            className="flex-shrink-0"
          >
            <DirectWaysLogo compact={scrolled} />
          </a>
        </div>

        {/* Gold accent line */}
        <div
          className={`absolute bottom-0 inset-x-0 h-px header-gold-line transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}
        />
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen ? "true" : "false"}
      >
        <div
          className={`absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/30">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="إغلاق القائمة"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
            <DirectWaysLogo compact />
          </div>

          <nav aria-label="القائمة الجانبية" className="flex-1 flex flex-col py-4">
            {navLinks.map((link) => {
              const id      = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-end px-6 py-4 font-semibold text-base transition-all duration-200 border-b border-outline-variant/20 border-r-4 ${
                    isActive
                      ? "text-primary bg-secondary/10 border-r-secondary"
                      : "text-on-surface-variant hover:text-primary hover:bg-primary/4 border-r-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="p-6 border-t border-outline-variant/30">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary font-bold py-3 text-base hover:bg-primary/90 transition-colors shadow-md"
            >
              <Ticket className="w-5 h-5 text-secondary" />
              احجز الآن
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
