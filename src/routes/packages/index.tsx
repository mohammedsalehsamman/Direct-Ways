import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Users, Star, ArrowLeft, Filter, Home } from "lucide-react";
import Header from "../../components/Header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";

export const Route = createFileRoute("/packages/")({ component: PackagesPage });

const allPackages = [
  {
    id: "umrah-ramadan",    category: "umrah",   title: "عمرة رمضان الفاخرة",
    desc: "باقة متكاملة تشمل الإقامة في فندق 5 نجوم قريب من الحرم مع وجبات ومواصلات.",
    price: "٣٬٩٩٩", oldPrice: "٥٬٢٠٠", duration: "١٠ أيام", persons: "٢ شخص",
    rating: 4.9, badge: "خصم ٢٣%", gradient: "from-amber-700 to-yellow-600", icon: "🕌",
    includes: ["فندق ٥ نجوم", "وجبات يومية", "مواصلات", "مرشد ديني"],
  },
  {
    id: "umrah-plus",       category: "umrah",   title: "عمرة + زيارة المدينة",
    desc: "برنامج روحاني شامل يجمع بين أداء العمرة وزيارة المدينة المنورة والمقامات.",
    price: "٢٬٨٩٩", duration: "٨ أيام", persons: "شخص واحد",
    rating: 4.8, badge: "مميز", gradient: "from-amber-800 to-amber-600", icon: "🕋",
    includes: ["فندق ٤ نجوم", "الإفطار", "مواصلات", "زيارات دينية"],
  },
  {
    id: "turkey-tour",      category: "tourism", title: "جولة تركيا السياحية",
    desc: "استكشف إسطنبول وأنطاليا وكابادوكيا مع مرشد سياحي عربي وإقامة مريحة.",
    price: "٢٬٧٩٩", duration: "٧ أيام", persons: "٢ شخص",
    rating: 4.8, badge: "الأكثر مبيعاً", gradient: "from-red-800 to-orange-600", icon: "🌙",
    includes: ["فندق ٤ نجوم", "الإفطار", "مواصلات", "مرشد عربي", "رحلة بالون"],
  },
  {
    id: "malaysia-family",  category: "tourism", title: "ماليزيا للعائلات",
    desc: "رحلة عائلية ممتعة تشمل كوالالمبور ولنكاوي مع أنشطة وترفيه للأطفال.",
    price: "٤٬١٩٩", duration: "٨ أيام", persons: "٤ أشخاص",
    rating: 4.7, gradient: "from-green-800 to-emerald-600", icon: "🌴",
    includes: ["فندق ٤ نجوم", "الإفطار", "مواصلات", "تذاكر مدينة ألعاب"],
  },
  {
    id: "maldives-honeymoon", category: "hotels", title: "شهر عسل المالديف",
    desc: "فيلا فوق الماء في أحد أفخم منتجعات المالديف مع إفطار وعشاء على الشاطئ.",
    price: "٦٬٤٩٩", oldPrice: "٧٬٩٩٩", duration: "٦ ليالٍ", persons: "شخصان",
    rating: 5.0, badge: "حصري", gradient: "from-teal-700 to-cyan-500", icon: "🏝️",
    includes: ["فيلا فوق الماء", "وجبات كاملة", "سبا", "رحلة غوص"],
  },
  {
    id: "dubai-luxury",     category: "hotels",  title: "دبي الفاخرة ٥ نجوم",
    desc: "إقامة في أحد أرقى فنادق دبي مع جولة سياحية وعشاء في مطعم دوار.",
    price: "٣٬٤٩٩", oldPrice: "٤٬٢٠٠", duration: "٤ ليالٍ", persons: "٢ شخص",
    rating: 4.9, badge: "خصم ١٦%", gradient: "from-blue-900 to-blue-600", icon: "🏙️",
    includes: ["فندق ٥ نجوم", "الإفطار", "جولة مدينة", "عشاء فاخر"],
  },
];

const tabs = [
  { value: "all",     label: "جميع الباقات" },
  { value: "umrah",   label: "عمرة وحج" },
  { value: "tourism", label: "رحلات سياحية" },
  { value: "hotels",  label: "فنادق وإقامة" },
];

function PackageCard({ pkg }: { pkg: (typeof allPackages)[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className={`relative h-48 bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}>
        <span className="text-8xl filter drop-shadow-lg">{pkg.icon}</span>
        {pkg.badge && (
          <span className="absolute top-3 left-3 bg-secondary text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full">
            {pkg.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
          <span className="text-white text-xs font-bold">{pkg.rating}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-headline-sm text-primary mb-2">{pkg.title}</h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{pkg.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {pkg.includes.map((item) => (
            <span key={item} className="text-xs bg-surface-container-low text-on-surface-variant px-2.5 py-1 rounded-full border border-outline-variant/40">
              ✓ {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-5 mt-auto">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{pkg.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{pkg.persons}</span>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-black text-2xl text-primary">{pkg.price}</span>
              <span className="text-xs text-on-surface-variant">د.إ</span>
            </div>
            {pkg.oldPrice && (
              <span className="text-xs text-on-surface-variant line-through">{pkg.oldPrice} د.إ</span>
            )}
          </div>
          <Link
            to="/"
            hash="contact"
            className="flex items-center gap-1.5 bg-primary text-on-primary text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            احجز الآن <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PackagesPage() {
  return (
    <div className="min-h-screen bg-surface font-arabic-body">
      <Header />

      {/* Page header */}
      <section className="pt-32 pb-16 bg-primary text-on-primary text-center px-md">
        <div className="flex items-center justify-center gap-2 text-secondary text-sm mb-3">
          <Link to="/" className="hover:underline">الرئيسية</Link>
          <span>/</span>
          <span>الباقات السياحية</span>
        </div>
        <h1 className="font-black text-display-lg-mobile md:text-headline-md mb-3">
          جميع باقاتنا السياحية
        </h1>
        <p className="text-on-primary/80 text-body-lg max-w-xl mx-auto">
          اختر من بين مجموعة متنوعة من الباقات المصممة لكل الميزانيات والاحتياجات
        </p>
      </section>

      {/* Packages list */}
      <section className="py-xl max-w-container-max mx-auto px-md">
        <Tabs defaultValue="all">
          <div className="flex items-center gap-3 mb-xl flex-wrap">
            <Filter className="w-5 h-5 text-on-surface-variant" />
            <TabsList className="flex gap-2 bg-transparent h-auto flex-wrap">
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
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPackages.map((p) => <PackageCard key={p.id} pkg={p} />)}
            </div>
          </TabsContent>
          {(["umrah", "tourism", "hotels"] as const).map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPackages.filter((p) => p.category === cat).map((p) => <PackageCard key={p.id} pkg={p} />)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA */}
      <section className="py-xl bg-primary text-center px-md">
        <h2 className="font-bold text-headline-sm text-on-primary mb-4">لم تجد ما تبحث عنه؟</h2>
        <p className="text-on-primary/80 mb-6">تواصل معنا وسنصمم لك باقة خاصة تناسب احتياجاتك وميزانيتك</p>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 bg-secondary text-on-secondary-container font-bold px-8 py-3 hover:bg-secondary/90 transition-colors"
        >
          تواصل معنا الآن <ArrowLeft className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
