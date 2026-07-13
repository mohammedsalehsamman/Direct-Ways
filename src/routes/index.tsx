import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plane, Building2, Globe, Car, FileText, Hotel,
  ShieldCheck, HeadphonesIcon, Phone, Mail,
  Instagram, MapPin, ArrowLeft,
} from "lucide-react";

import Header from "../components/Header";
import StatsSection from "../components/StatsSection";
import DestinationsSection from "../components/DestinationsSection";
import OffersSection from "../components/OffersSection";
import MapSection from "../components/MapSection";
import { useScrollReveal, useScrollRevealChildren } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({ component: Index });

/* ─── Data ─── */
const ABOUT_IMG = "/%D9%85%D9%86%20%D9%86%D8%AD%D9%86.jpeg";

const services = [
  { icon: Plane,     title: "حجوزات الطيران",      desc: "تأمين أفضل الأسعار على الرحلات الدولية والمحلية مع كبرى شركات الطيران العالمية." },
  { icon: Globe,     title: "الرحلات السياحية",     desc: "جولات سياحية منظمة لأجمل الوجهات العالمية مع مرشدين متخصصين." },
  { icon: Car,       title: "خدمات النقل",          desc: "أسطول سيارات حديث وخدمات استقبال من المطار لتنقلات مريحة وآمنة." },
  { icon: FileText,  title: "المساعدة في إصدار التأشيرات",      desc: "تسهيل كافة الإجراءات لإصدار التأشيرات لمختلف دول العالم بسرعة واحترافية." },
  { icon: Hotel,     title: "حجوزات الفنادق",       desc: "شراكات مع أرقى المنتجعات والفنادق العالمية لضمان أفضل إقامة بأقل تكلفة." },
];

const contactLinks = [
  { href: "https://wa.me/971507046772",               Icon: Phone,     label: "واتساب (الإمارات)", val: "+971 50 704 6772" },
  { href: "mailto:info@directwaystravel.com",         Icon: Mail,      label: "البريد الإلكتروني", val: "info@directwaystravel.com" },
  { href: "https://www.instagram.com/directwaystravel", Icon: Instagram, label: "إنستغرام",         val: "@directwaystravel" },
  { href: "tel:+97124439016",                          Icon: Phone,     label: "الهاتف الأرضي",     val: "+971 2 443 9016" },
];

const partners = [
  "طيران الإمارات", "الاتحاد للطيران", "فلاي دبي",
  "العربية للطيران", "الخطوط السعودية", "طيران الخليج",
  "ماليزيا إيرلاينز", "تركيش إيرلاينز",
];

const footerLinks = [
  { label: "الرئيسية",   href: "#home" },
  { label: "من نحن",     href: "#about" },
  { label: "خدماتنا",   href: "#services" },
  { label: "العروض",     href: "#offers" },
  { label: "اتصل بنا",  href: "#contact" },
];

/* ─── Components ─── */
function ScrollSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return <div ref={ref} className={className}>{children}</div>;
}

function Index() {
  const servicesGridRef = useScrollRevealChildren<HTMLDivElement>();

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-arabic-body">
      <Header />

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute -inset-1 z-0">
          <div className="hero-bg w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-md max-w-4xl mx-auto">
          <p className="text-secondary font-bold tracking-widest text-sm uppercase mb-4">
            دايركت وايز للسفر والسياحة
          </p>
          <h1 className="font-black text-display-lg-mobile md:text-display-lg text-white drop-shadow-lg mb-md leading-tight">
            رحلتك تبدأ معنا: اكتشف العالم مع دايركت وايز
          </h1>
          <p className="text-body-lg text-white/90 mb-lg max-w-2xl mx-auto leading-loose">
            نقدم لك تجارب سفر استثنائية تجمع بين الفخامة والراحة، لتصنع ذكريات لا تُنسى في أجمل بقاع الأرض.
          </p>
          <div className="flex flex-col sm:flex-row-reverse justify-center gap-md">
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); handleScroll("#services"); }}
              className="inline-flex items-center justify-center gap-sm bg-secondary text-on-secondary-container font-bold px-lg py-sm hover:bg-secondary/90 transition-colors"
            >
              اكتشف خدماتنا
              <ArrowLeft className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleScroll("#contact"); }}
              className="inline-flex items-center justify-center gap-sm border border-white/60 text-white font-bold px-lg py-sm hover:bg-white/10 transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase">مرر للأسفل</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── About ── */}
      <section id="about" className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <ScrollSection className="order-2 lg:order-1 mb-md reveal">
              <div className="relative">
                <div className="aspect-square bg-surface-container-high overflow-hidden shadow-2xl border-8 border-white">
                  <img className="w-full h-full object-cover" src={ABOUT_IMG} alt="فريق دايركت وايز" loading="lazy" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary-container p-lg shadow-xl hidden md:block">
                  <span className="block font-black text-headline-md text-primary">+15</span>
                  <span className="text-label-md text-primary font-bold">عاماً من الخبرة</span>
                </div>
              </div>
            </ScrollSection>
            <ScrollSection className="order-1 lg:order-2 space-y-md reveal reveal-delay-2">
              <span className="text-secondary font-bold tracking-widest block mb-xs">من نحن؟</span>
              <h2 className="font-bold text-headline-md text-primary">متخصصون في حلول السياحة والسفر للأفراد والشركات</h2>
              <p className="text-body-lg text-on-surface-variant leading-loose">
                تتميز دايركت وايز بخبرة واسعة في عالم السياحة والسفر المتكامل انطلاقاً من دولة الإمارات العربية المتحدة - أبوظبي.
              </p>
              <p className="text-body-lg text-on-surface-variant leading-loose">
                يضم فريقنا نخبة من المتخصصين الملتزمين بتقديم أعلى معايير الجودة والمرونة، مع التركيز التام على خدمة العملاء وتلبية كافة تطلعاتهم الشخصية والمهنية في عالم السفر.
              </p>
              <div className="flex flex-wrap gap-lg pt-md border-t border-outline-variant">
                <div className="flex items-center gap-sm">
                  <ShieldCheck className="w-9 h-9 text-secondary" strokeWidth={1.5} />
                  <span className="text-label-md text-primary font-bold">موثوقية عالية</span>
                </div>
                <div className="flex items-center gap-sm">
                  <HeadphonesIcon className="w-9 h-9 text-secondary" strokeWidth={1.5} />
                  <span className="text-label-md text-primary font-bold">دعم 24/7</span>
                </div>
              </div>
            </ScrollSection>
          </div>
        </div>
      </section>

      {/* ── Destinations ── */}
      <DestinationsSection />

      {/* ── Services ── */}
      <section id="services" className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-md">
          <ScrollSection className="text-center mb-xl reveal">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">خدماتنا</span>
            <h2 className="font-bold text-headline-md text-primary">حلول سفر متكاملة صُممت لأجلك</h2>
          </ScrollSection>
          <div ref={servicesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} bg-white p-lg border border-outline-variant/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-secondary`}
              >
                <s.icon className="w-12 h-12 text-primary mb-md" strokeWidth={1.5} />
                <h3 className="font-bold text-headline-sm text-primary mb-sm">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offers ── */}
      <OffersSection />

      {/* ── Map ── */}
      <MapSection />

      {/* ── Partners ── */}
      <section className="py-10 bg-white border-y border-outline-variant/30 overflow-hidden">
        <div className="max-w-container-max mx-auto px-md mb-6 text-center">
          <p className="text-on-surface-variant text-sm font-semibold tracking-widest uppercase">
            شركاؤنا من كبرى شركات الطيران العالمية
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[...partners, ...partners, ...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex-none flex items-center justify-center px-10 py-3 mx-2 border border-outline-variant/30 rounded-full min-w-max"
              >
                <Plane className="w-4 h-4 text-secondary ml-2" />
                <span className="text-primary font-bold text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-xl bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-md">
          <ScrollSection className="text-center mb-xl reveal">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">تواصل معنا</span>
            <h2 className="font-bold text-display-lg-mobile md:text-headline-md">تواصل معنا اليوم</h2>
            <p className="text-on-primary/80 text-body-md md:text-body-lg mt-sm">
              نحن متواجدون لخدمتكم وفريقنا جاهز للرد على استفساراتكم.
            </p>
          </ScrollSection>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-md">
            {contactLinks.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-md p-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <c.Icon className="w-7 h-7 text-secondary flex-shrink-0" strokeWidth={1.5} />
                <div className="min-w-0 flex-1">
                  <p className="text-label-md opacity-70">{c.label}</p>
                  <p dir="ltr" className="text-body-md md:text-headline-sm font-bold text-right break-words">{c.val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary border-t border-white/10">
        {/* Gold separator */}
        <div className="h-px header-gold-line" />

        <div className="max-w-container-max mx-auto px-md py-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            {/* Brand */}
            <div className="space-y-md">
              <div className="bg-white rounded-md p-2 inline-block">
                <img
                  src="/logo.jpg"
                  alt="دايركت وايز للسفر والسياحة - Direct Ways Travel & Tourism"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-on-primary/70 text-sm leading-relaxed">
                وكالة سفر وسياحة رائدة في الإمارات بخبرة أكثر من 15 عاماً. نجعل أحلامك السياحية حقيقة.
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://www.instagram.com/directwaystravel", Icon: Instagram, label: "إنستغرام" },
                  { href: "https://wa.me/971507046772",                 Icon: Phone,     label: "واتساب" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                  >
                    <s.Icon className="w-4 h-4 text-on-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-bold text-on-primary mb-md text-sm uppercase tracking-widest">روابط سريعة</h4>
              <ul className="space-y-2">
                {footerLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => { e.preventDefault(); handleScroll(l.href); }}
                      className="text-on-primary/70 hover:text-secondary text-sm transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact summary */}
            <div>
              <h4 className="font-bold text-on-primary mb-md text-sm uppercase tracking-widest">تواصل معنا</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-on-primary/70 text-sm">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span dir="ltr">+971 50 704 6772</span>
                </li>
                <li className="flex items-center gap-3 text-on-primary/70 text-sm">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>info@directwaystravel.com</span>
                </li>
                <li className="flex items-start gap-3 text-on-primary/70 text-sm">
                  <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>أبوظبي - الإمارات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-md">
          <div className="max-w-container-max mx-auto px-md flex flex-col sm:flex-row-reverse items-center justify-between gap-2 text-xs text-on-primary/50">
            <span>© {new Date().getFullYear()} دايركت وايز للسفر والسياحة. جميع الحقوق محفوظة.</span>
            <span>صُمّم باحترافية لخدمتكم</span>
          </div>
        </div>
      </footer>

      {/* ── Floating actions ── */}
      <div className="fixed bottom-md left-md flex flex-col gap-sm z-50">
        <a
          href="https://wa.me/971507046772"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="واتساب"
          className="bg-white rounded-full border border-outline-variant shadow-xl hover:scale-110 transition-all flex items-center justify-center w-14 h-14"
        >
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/directwaystravel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="إنستغرام"
          className="bg-white text-primary rounded-full border border-outline-variant shadow-xl hover:scale-110 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all flex items-center justify-center w-14 h-14"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
