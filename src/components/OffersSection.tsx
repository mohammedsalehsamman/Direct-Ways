import { useState } from "react";
import { Clock, Users, Star, ArrowLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

type Category = "all" | "umrah" | "tourism" | "hotels";

type Offer = {
  id: string;
  category: Exclude<Category, "all">;
  title: string;
  desc: string;
  price: string;
  oldPrice?: string;
  duration: string;
  persons: string;
  rating: number;
  badge?: string;
  badgeColor: string;
  gradient: string;
  icon: string;
};

const offers: Offer[] = [
  {
    id: "umrah-ramadan",
    category: "umrah",
    title: "عمرة رمضان الفاخرة",
    desc: "باقة متكاملة تشمل الإقامة في فندق 5 نجوم قريب من الحرم مع وجبات ومواصلات.",
    price: "٣٬٩٩٩", oldPrice: "٥٬٢٠٠",
    duration: "١٠ أيام", persons: "٢ شخص", rating: 4.9,
    badge: "خصم ٢٣%", badgeColor: "bg-red-500",
    gradient: "from-amber-700 to-yellow-600", icon: "🕌",
  },
  {
    id: "turkey-tour",
    category: "tourism",
    title: "جولة تركيا السياحية",
    desc: "استكشف إسطنبول وأنطاليا وكابادوكيا مع مرشد سياحي عربي وإقامة مريحة.",
    price: "٢٬٧٩٩",
    duration: "٧ أيام", persons: "٢ شخص", rating: 4.8,
    badge: "الأكثر مبيعاً", badgeColor: "bg-secondary",
    gradient: "from-red-800 to-orange-600", icon: "🌙",
  },
  {
    id: "maldives-honeymoon",
    category: "hotels",
    title: "شهر عسل المالديف",
    desc: "فيلا فوق الماء في أحد أفخم منتجعات المالديف مع إفطار وعشاء على الشاطئ.",
    price: "٦٬٤٩٩", oldPrice: "٧٬٩٩٩",
    duration: "٦ ليالٍ", persons: "شخصان", rating: 5.0,
    badge: "حصري", badgeColor: "bg-purple-600",
    gradient: "from-teal-700 to-cyan-500", icon: "🏝️",
  },
  {
    id: "malaysia-family",
    category: "tourism",
    title: "ماليزيا للعائلات",
    desc: "رحلة عائلية ممتعة تشمل كوالالمبور ولنكاوي مع أنشطة وترفيه للأطفال.",
    price: "٤٬١٩٩",
    duration: "٨ أيام", persons: "٤ أشخاص", rating: 4.7,
    badgeColor: "bg-green-600",
    gradient: "from-green-800 to-emerald-600", icon: "🌴",
  },
  {
    id: "dubai-luxury",
    category: "hotels",
    title: "دبي الفاخرة ٥ نجوم",
    desc: "إقامة في برج خليفة أو نخلة جميرا مع جولة سياحية وعشاء في مطعم دوار.",
    price: "٣٬٤٩٩", oldPrice: "٤٬٢٠٠",
    duration: "٤ ليالٍ", persons: "٢ شخص", rating: 4.9,
    badge: "خصم ١٦%", badgeColor: "bg-red-500",
    gradient: "from-blue-900 to-blue-600", icon: "🏙️",
  },
  {
    id: "umrah-plus",
    category: "umrah",
    title: "عمرة + زيارة المدينة",
    desc: "برنامج روحاني شامل يجمع بين أداء العمرة وزيارة المدينة المنورة والمقامات.",
    price: "٢٬٨٩٩",
    duration: "٨ أيام", persons: "شخص واحد", rating: 4.8,
    badge: "مميز", badgeColor: "bg-secondary",
    gradient: "from-amber-800 to-amber-600", icon: "🕋",
  },
];

const tabs: { value: Category; label: string }[] = [
  { value: "all",     label: "جميع العروض" },
  { value: "umrah",   label: "عمرة وحج" },
  { value: "tourism", label: "سياحية" },
  { value: "hotels",  label: "فنادق" },
];

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="reveal bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className={`relative h-44 bg-gradient-to-br ${offer.gradient} flex items-center justify-center`}>
        <span className="text-7xl filter drop-shadow-lg">{offer.icon}</span>
        {offer.badge && (
          <span className={`absolute top-3 left-3 ${offer.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
            {offer.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          <span className="text-white text-xs font-bold">{offer.rating}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-headline-sm text-primary mb-2">{offer.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">{offer.desc}</p>
        <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-4">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{offer.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{offer.persons}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-black text-2xl text-primary">{offer.price}</span>
              <span className="text-xs text-on-surface-variant">د.إ</span>
            </div>
            {offer.oldPrice && (
              <span className="text-xs text-on-surface-variant line-through">{offer.oldPrice} د.إ</span>
            )}
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="flex items-center gap-1.5 bg-primary text-on-primary text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            احجز الآن <ArrowLeft className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function FilteredGrid({ category }: { category: Exclude<Category, "all"> }) {
  const filtered = offers.filter((o) => o.category === category);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((o) => <OfferCard key={o.id} offer={o} />)}
    </div>
  );
}

export default function OffersSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="offers" className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-md">
        <div ref={headerRef} className="text-center mb-xl reveal">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">عروضنا الحصرية</span>
          <h2 className="font-bold text-headline-md text-primary">أفضل العروض السياحية لهذا الموسم</h2>
          <p className="text-on-surface-variant text-body-lg mt-sm max-w-xl mx-auto">باقات سياحية مميزة بأسعار تنافسية لا تُفوَّت</p>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="flex justify-center mb-xl gap-2 bg-transparent h-auto flex-wrap">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="px-5 py-2 text-sm font-semibold rounded-full border border-outline-variant data-[state=active]:bg-primary data-[state=active]:text-on-primary data-[state=active]:border-primary transition-all"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((o) => <OfferCard key={o.id} offer={o} />)}
            </div>
          </TabsContent>
          <TabsContent value="umrah"><FilteredGrid category="umrah" /></TabsContent>
          <TabsContent value="tourism"><FilteredGrid category="tourism" /></TabsContent>
          <TabsContent value="hotels"><FilteredGrid category="hotels" /></TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
