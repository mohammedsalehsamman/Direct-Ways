import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBkgUR32H6cD4vmhJ5RWWYLeArF6sMDehc6BaGWnRyCpKyOKSqdUefOrby_l8s5eEtqPPFvKLKIKluIJmZSMQ6AX6mNXavPFnYBLm2sqpXtn8t0exrwSb1D27Zz3X_UX06VrzoS-7_WBDckiRE7Cw1ME2QW1JqaozfkaNCaaPkjM_zTEK6v0ocedfPAVPCfUAxFqZ_6idxlm0mwAwSSx2d_vro-ayysG-V-ct_FVGP0dszXynpCBi6wiwaOFu6Qib6s-ETg4m5eC3I";
const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3AGgRzA8IAMSYKHm4pjlx78k44gUemS-peJXJcBfG48afdTZhk_VlALo2L-RHoSKZkguYTJNv7ZPuV3VqnHZAUjXYhJA7MBKe9fVhrDzO63qkGF-YMZwcLz888EiZet1zlOdlG66N1Vyd4rG8W5rIfP54psvjC9mP6LKVFu4BVMVFHhtBWbnkIH4GuhIg9aI1oWpgVgIq6-BVbv_-X2lz8ZacG8BPb3a_h267PGU3XthoRqJqEBLBOTZtEF5DNCpJQhzN2P8lB8M";
const MAP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpawanVtFpHeaaZ27m6-l8bQ6KYbpUzsoSO4h9BoChhKQ97ip4hE37CfDvsYVEF0_jWlZZFLEH5766MosuMqHJxfZ9v7g7Hb98yXEI_sELJxRFEbhFpdzKrKwkfeHAl5dBrTwYoxBDyReper7RQA-nFUql1hLTSThyKqMG-EgbcaYF34XYVcToP3ML2qfocYaZ5Im5599UrkVnsNx6jnI7FU5aKnlbbgEjbSh7SvB9euU04yJrfVOgPNE8uGMWsDSaoc2MBhbUCVM";

const services = [
  { icon: "flight_takeoff", title: "حجوزات الطيران", desc: "تأمين أفضل الأسعار على الرحلات الدولية والمحلية مع كبرى شركات الطيران العالمية." },
  { icon: "mosque", title: "برامج العمرة والحج", desc: "برامج إيمانية متكاملة تشمل السكن الفاخر والمواصلات لضمان راحتكم في البقاع المقدسة." },
  { icon: "travel_explore", title: "الرحلات السياحية", desc: "جولات سياحية منظمة لأجمل الوجهات العالمية مع مرشدين متخصصين." },
  { icon: "directions_car", title: "خدمات النقل", desc: "أسطول سيارات حديث وخدمات استقبال من المطار لتنقلات مريحة وآمنة." },
  { icon: "description", title: "إصدار التأشيرات", desc: "تسهيل كافة الإجراءات القانونية لإصدار التأشيرات لمختلف دول العالم بسرعة واحترافية." },
  { icon: "hotel", title: "حجوزات الفنادق", desc: "شراكات مع أرقى المنتجعات والفنادق العالمية لضمان أفضل إقامة بأقل تكلفة." },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className ?? ""}`}>{name}</span>;
}

function Index() {
  return (
    <div className="font-arabic-body">
      <Header />
      {/* Hero */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full scale-105"
            style={{ backgroundImage: `url('${HERO_IMG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-md max-w-4xl mx-auto">
          <h1 className="font-arabic-headline font-black text-display-lg-mobile md:text-display-lg text-white drop-shadow-lg mb-md leading-tight">
            رحلتك تبدأ معنا: اكتشف العالم مع دايركت وايز
          </h1>
          <p className="text-body-lg text-white/90 mb-lg max-w-2xl mx-auto leading-loose">
            نقدم لك تجارب سفر استثنائية تجمع بين الفخامة والراحة، لتصنع ذكريات لا تُنسى في أجمل بقاع الأرض.
          </p>
          <div className="flex flex-col sm:flex-row-reverse justify-center gap-md">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-sm bg-secondary text-on-secondary-container font-bold px-lg py-sm hover:bg-secondary/90 transition-colors"
            >
              اكتشف خدماتنا
              <Icon name="arrow_back" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-sm border border-white/60 text-white font-bold px-lg py-sm hover:bg-white/10 transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-xl bg-white">
        <div className="max-w-container-max mx-auto px-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="order-2 lg:order-1 mb-md">
              <div className="relative">
                <div className="aspect-square bg-surface-container-high overflow-hidden shadow-2xl border-8 border-white">
                  <img className="w-full h-full object-cover" src={ABOUT_IMG} alt="فريق دايركت وايز" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-secondary-container p-lg shadow-xl hidden md:block">
                  <span className="block font-arabic-headline font-black text-primary text-headline-md">+15</span>
                  <span className="text-label-md text-primary font-bold">عاماً من الخبرة</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-md">
              <span className="text-secondary font-arabic-headline font-bold tracking-widest block mb-xs">من نحن؟</span>
              <h2 className="font-arabic-headline font-bold text-headline-md text-primary">رواد السياحة في الخليج العربي</h2>
              <p className="text-body-lg text-on-surface-variant leading-loose">
                تتميز دايركت وايز بخبرة واسعة في تنظيم الرحلات السياحية المتكاملة. ننتشر عبر فروعنا في دولة الإمارات العربية المتحدة (دبي) والمملكة العربية السعودية (الرياض)، لنكون الأقرب لعملائنا في كل وقت.
              </p>
              <p className="text-body-lg text-on-surface-variant leading-loose">
                يضم فريقنا نخبة من المتخصصين الملتزمين بتقديم أعلى معايير الجودة والمرونة، مع التركيز التام على خدمة العملاء وتلبية كافة تطلعاتهم الشخصية والمهنية في عالم السفر.
              </p>
              <div className="flex flex-wrap gap-lg pt-md border-t border-outline-variant">
                <div className="flex items-center gap-sm">
                  <Icon name="verified_user" className="text-secondary !text-4xl" />
                  <span className="font-arabic-headline text-label-md text-primary font-bold">موثوقية تامة</span>
                </div>
                <div className="flex items-center gap-sm">
                  <Icon name="support_agent" className="text-secondary !text-4xl" />
                  <span className="font-arabic-headline text-label-md text-primary font-bold">دعم 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-md">
          <div className="text-center mb-xl">
            <span className="text-secondary font-arabic-headline font-bold block mb-xs">خدماتنا</span>
            <h2 className="font-arabic-headline font-bold text-headline-md text-primary">حلول سفر متكاملة صُممت لأجلك</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-lg border border-outline-variant/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-secondary"
              >
                <Icon name={s.icon} className="text-primary !text-5xl mb-md block" />
                <h3 className="font-arabic-headline font-bold text-headline-sm text-primary mb-sm">{s.title}</h3>
                <p className="text-body-md text-on-surface-variant leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-xl bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
            <div className="space-y-lg">
              <h2 className="font-arabic-headline font-bold text-display-lg-mobile md:text-headline-md">تواصل معنا اليوم</h2>
              <p className="text-body-lg text-on-primary-container">
                نحن متواجدون لخدمتك في فروعنا بالإمارات والسعودية. فريقنا جاهز للرد على استفساراتك.
              </p>
              <div className="space-y-md">
                {[
                  { href: "https://wa.me/971507046772", icon: "call", label: "واتساب (الإمارات)", val: "+971 50 704 6772" },
                  { href: "mailto:info@directwaystravel.com", icon: "mail", label: "البريد الإلكتروني", val: "info@directwaystravel.com" },
                  { href: "https://www.instagram.com/directwaystravel", icon: "photo_camera", label: "إنستغرام", val: "@directwaystravel" },
                  { href: "https://t.me/directwaystravel", icon: "send", label: "تيليغرام", val: "@directwaystravel" },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="flex items-center gap-md p-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <Icon name={c.icon} className="text-secondary-fixed !text-3xl" />
                    <div>
                      <p className="text-label-md opacity-70">{c.label}</p>
                      <p className="text-headline-sm font-bold">{c.val}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white/5 p-lg border border-white/10">
              <h3 className="font-arabic-headline font-bold text-headline-sm mb-md">مواقعنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="p-md bg-white/10">
                  <p className="font-bold text-secondary-fixed mb-xs">دبي، الإمارات</p>
                  <p className="text-body-md">شارع الشيخ زايد، برج المدينة، المكتب 402</p>
                </div>
                <div className="p-md bg-white/10">
                  <p className="font-bold text-secondary-fixed mb-xs">الرياض، السعودية</p>
                  <p className="text-body-md">حي العليا، طريق الملك فهد، مركز العليا التجاري</p>
                </div>
              </div>
              <div className="mt-md aspect-video bg-white/10 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  src={MAP_IMG}
                  alt="خريطة مواقعنا"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-primary px-lg py-sm text-label-md border border-secondary">عرض الخريطة التفاعلية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-on-primary/80 border-t border-white/10 py-lg">
        <div className="max-w-container-max mx-auto px-md text-center text-body-md">
          © {new Date().getFullYear()} دايركت وايز للسفر والسياحة. جميع الحقوق محفوظة.
        </div>
      </footer>

      {/* Floating actions */}
      <div className="fixed bottom-md left-md flex flex-col gap-sm z-50">
        <a
          href="https://t.me/directwaystravel"
          title="تيليغرام"
          className="bg-white text-primary rounded-full border border-outline-variant shadow-xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14"
        >
          <Icon name="send" className="!text-3xl" />
        </a>
        <a
          href="https://wa.me/971507046772"
          title="واتساب"
          className="bg-white text-primary rounded-full border border-outline-variant shadow-xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14"
        >
          <Icon name="chat" className="!text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/directwaystravel"
          title="إنستغرام"
          className="bg-white text-primary rounded-full border border-outline-variant shadow-xl hover:scale-110 transition-transform flex items-center justify-center w-14 h-14"
        >
          <Icon name="photo_camera" className="!text-3xl" />
        </a>
      </div>
    </div>
  );
}
