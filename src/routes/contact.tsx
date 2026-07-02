import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, Send, Instagram, MapPin, Clock, ExternalLink } from "lucide-react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const offices = [
  {
    city: "دبي، الإمارات العربية المتحدة",
    addr: "شارع الشيخ زايد، برج المدينة، المكتب 402",
    hours: "الأحد – الخميس: ٩ص – ٦م",
    phone: "+971 50 704 6772",
    mapsUrl: "https://maps.google.com/?q=Sheikh+Zayed+Road+Dubai",
    gradient: "from-blue-700 to-cyan-600",
    flag: "🇦🇪",
  },
  {
    city: "الرياض، المملكة العربية السعودية",
    addr: "حي العليا، طريق الملك فهد، مركز العليا التجاري",
    hours: "الأحد – الخميس: ٩ص – ٦م",
    phone: "+966 55 000 0000",
    mapsUrl: "https://maps.google.com/?q=Olaya+District+Riyadh",
    gradient: "from-green-700 to-emerald-600",
    flag: "🇸🇦",
  },
];

const contactLinks = [
  { href: "https://wa.me/971507046772",                 Icon: Phone,     label: "واتساب — الإمارات",   val: "+971 50 704 6772",           color: "text-green-500" },
  { href: "mailto:info@directwaystravel.com",           Icon: Mail,      label: "البريد الإلكتروني",    val: "info@directwaystravel.com",  color: "text-blue-500"  },
  { href: "https://www.instagram.com/directwaystravel", Icon: Instagram,  label: "إنستغرام",             val: "@directwaystravel",          color: "text-pink-500"  },
  { href: "https://t.me/directwaystravel",              Icon: Send,      label: "تيليغرام",             val: "@directwaystravel",          color: "text-sky-500"   },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-surface font-arabic-body">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-on-primary text-center px-md">
        <div className="flex items-center justify-center gap-2 text-secondary text-sm mb-3">
          <Link to="/" className="hover:underline">الرئيسية</Link>
          <span>/</span>
          <span>اتصل بنا</span>
        </div>
        <h1 className="font-black text-display-lg-mobile md:text-headline-md mb-3">
          تواصل معنا
        </h1>
        <p className="text-on-primary/80 text-body-lg max-w-xl mx-auto">
          فريقنا جاهز لمساعدتك في تخطيط رحلتك المثالية — تواصل معنا الآن
        </p>
      </section>

      <div className="max-w-container-max mx-auto px-md py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">

          {/* Left: info */}
          <div className="space-y-lg">

            {/* Contact channels */}
            <div>
              <h2 className="font-bold text-headline-sm text-primary mb-md">وسائل التواصل</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactLinks.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/40 hover:border-secondary hover:shadow-md transition-all group"
                  >
                    <div className={`w-11 h-11 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors`}>
                      <c.Icon className={`w-5 h-5 ${c.color}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant mb-0.5">{c.label}</p>
                      <p className="font-bold text-primary text-sm">{c.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Offices */}
            <div>
              <h2 className="font-bold text-headline-sm text-primary mb-md">فروعنا</h2>
              <div className="space-y-4">
                {offices.map((office) => (
                  <div key={office.city} className="bg-white rounded-xl border border-outline-variant/40 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-l ${office.gradient}`} />
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{office.flag}</span>
                        <h3 className="font-bold text-primary">{office.city}</h3>
                      </div>
                      <div className="space-y-2 text-sm text-on-surface-variant">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span>{office.addr}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span dir="ltr">{office.phone}</span>
                        </div>
                      </div>
                      <a
                        href={office.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-secondary text-sm font-semibold hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        افتح في خرائط Google
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 className="font-bold text-headline-sm text-primary mb-md">أرسل لنا رسالة</h2>
            <div className="bg-primary rounded-2xl p-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
