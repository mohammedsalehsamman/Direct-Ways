import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const destinations = [
  { name: "دبي", country: "الإمارات", desc: "مدينة المستقبل — ناطحات السحاب والشواطئ والتسوق الفاخر", gradient: "from-blue-900 via-blue-700 to-cyan-500", icon: "🏙️", tag: "الأكثر طلباً" },
  { name: "مكة المكرمة", country: "السعودية", desc: "أقدس البقاع — رحلة إيمانية لا تُنسى إلى بيت الله الحرام", gradient: "from-amber-900 via-yellow-700 to-amber-500", icon: "🕌", tag: "عمرة وحج" },
  { name: "إسطنبول", country: "تركيا", desc: "حيث يلتقي الشرق والغرب — التاريخ والثقافة والمطبخ الفريد", gradient: "from-red-900 via-red-700 to-orange-500", icon: "🌙", tag: "رحلات عائلية" },
  { name: "ماليزيا", country: "كوالالمبور", desc: "جنة استوائية — غابات مطيرة وأبراج بتروناس وشواطئ خلابة", gradient: "from-green-900 via-emerald-700 to-teal-500", icon: "🌴", tag: "سياحة طبيعية" },
  { name: "باريس", country: "فرنسا", desc: "مدينة النور — برج إيفل والمتاحف والأزياء الراقية", gradient: "from-purple-900 via-purple-700 to-pink-500", icon: "🗼", tag: "رومانسية" },
  { name: "المالديف", country: "المحيط الهندي", desc: "الجنة على الأرض — شعاب مرجانية وفيلات فوق الماء وهدوء مطلق", gradient: "from-teal-900 via-teal-600 to-cyan-400", icon: "🏝️", tag: "شهر عسل" },
  { name: "لندن", country: "المملكة المتحدة", desc: "عاصمة التاريخ والتنوع — متاحف عالمية وأسواق فريدة وحدائق ملكية", gradient: "from-slate-800 via-slate-600 to-blue-500", icon: "🎡", tag: "ثقافة وتسوق" },
  { name: "بانكوك", country: "تايلاند", desc: "المدينة الذهبية — معابد رائعة وأسواق عائمة ومطبخ لا مثيل له", gradient: "from-orange-900 via-orange-700 to-yellow-500", icon: "🛕", tag: "مغامرة" },
];

export default function DestinationsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start" },
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 4000);
    const stopOnInteraction = () => clearInterval(timer);
    emblaApi.on("pointerDown", stopOnInteraction);
    return () => { clearInterval(timer); emblaApi.off("pointerDown", stopOnInteraction); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => { setCanPrev(emblaApi.canScrollPrev()); setCanNext(emblaApi.canScrollNext()); };
    emblaApi.on("select", update);
    update();
  }, [emblaApi]);

  return (
    <section className="py-xl bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-md">
        <div ref={headerRef} className="text-center mb-xl reveal">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">وجهاتنا السياحية</span>
          <h2 className="font-bold text-headline-md text-primary">اكتشف أجمل وجهات العالم</h2>
          <p className="text-on-surface-variant text-body-lg mt-sm max-w-2xl mx-auto">رحلات مصممة بعناية لأكثر الوجهات إثارةً حول العالم</p>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5 touch-pan-y">
              {destinations.map((dest) => (
                <div key={dest.name} className="flex-none w-72 md:w-80">
                  <div className={`relative h-96 rounded-2xl bg-gradient-to-b ${dest.gradient} overflow-hidden group cursor-pointer shadow-xl`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.3)_0%,_transparent_60%)]" />
                    </div>
                    <div className="absolute top-6 right-6 text-5xl filter drop-shadow-lg">{dest.icon}</div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">{dest.tag}</span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <div className="flex items-center gap-1.5 text-white/70 text-sm mb-1">
                        <MapPin className="w-3.5 h-3.5" /><span>{dest.country}</span>
                      </div>
                      <h3 className="text-white font-black text-2xl mb-2">{dest.name}</h3>
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">{dest.desc}</p>
                      <button
                        type="button"
                        aria-label={`استكشف وجهة ${dest.name}`}
                        className="w-full bg-white/15 hover:bg-secondary border border-white/30 hover:border-secondary text-white text-sm font-bold py-2.5 rounded-lg transition-all duration-300 group-hover:bg-secondary"
                      >
                        استكشف الوجهة
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="button" onClick={scrollPrev} disabled={!canPrev} aria-label="السابق"
            className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-1 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 disabled:opacity-30">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button type="button" onClick={scrollNext} disabled={!canNext} aria-label="التالي"
            className="absolute top-1/2 -translate-y-1/2 left-0 translate-x-1 z-10 w-11 h-11 rounded-full bg-white shadow-lg border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-200 disabled:opacity-30">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
