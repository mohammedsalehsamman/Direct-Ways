import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const testimonials = [
  { name: "أحمد الشمري",    origin: "الرياض، السعودية",   initials: "أش", rating: 5, text: "تجربة رائعة مع دايركت وايز! نظّموا لنا رحلة العمرة بكل تفاصيلها باحترافية عالية. الفندق كان ممتازاً والمواصلات منظّمة. سأعود بالتأكيد.", service: "عمرة رمضان", avatarColor: "bg-amber-600" },
  { name: "منى الزهراني",   origin: "جدة، السعودية",      initials: "مز", rating: 5, text: "أفضل وكالة سفر تعاملت معها في حياتي. الرحلة إلى ماليزيا كانت حلماً حقيقياً — الأنشطة والفنادق والمرشد السياحي، كل شيء كان على أعلى مستوى.", service: "رحلة ماليزيا", avatarColor: "bg-emerald-600" },
  { name: "خالد المنصوري",  origin: "دبي، الإمارات",       initials: "خم", rating: 5, text: "باقة شهر العسل في المالديف كانت مثالية تماماً. الفيلا فوق الماء والخدمة والجمال الطبيعي — لن أنسى هذه التجربة ما حييت. شكراً دايركت وايز!", service: "شهر عسل المالديف", avatarColor: "bg-teal-600" },
  { name: "فاطمة العبدالله", origin: "أبوظبي، الإمارات",   initials: "فع", rating: 5, text: "سافرنا مع العائلة إلى إسطنبول وكانت رحلة لا تُنسى. الأطفال استمتعوا جداً والبرنامج السياحي كان متنوعاً ومناسباً للجميع. شكراً جزيلاً!", service: "رحلة تركيا العائلية", avatarColor: "bg-purple-600" },
  { name: "عبدالرحمن الحربي", origin: "الكويت",            initials: "عح", rating: 5, text: "تأشيرة أوروبا كانت تقلقني كثيراً، لكن فريق دايركت وايز أنجزوها في وقت قياسي ودون أي متاعب. خدمة احترافية من الدرجة الأولى.", service: "تأشيرة شنغن", avatarColor: "bg-blue-600" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} من 5 نجوم`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "center" },
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    const stop = () => clearInterval(timer);
    emblaApi.on("pointerDown", stop);
    return () => { clearInterval(timer); emblaApi.off("pointerDown", stop); };
  }, [emblaApi]);

  return (
    <section className="py-xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-md">
        <div ref={headerRef} className="text-center mb-xl reveal">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">آراء عملائنا</span>
          <h2 className="font-bold text-headline-md text-primary">ماذا يقول عملاؤنا عنّا؟</h2>
          <p className="text-on-surface-variant text-body-lg mt-sm max-w-xl mx-auto">آلاف العملاء السعداء يثقون بدايركت وايز لتنظيم رحلاتهم</p>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6 touch-pan-y">
              {testimonials.map((t) => (
                <div key={t.name} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <div className="bg-white rounded-2xl p-7 shadow-md border border-outline-variant/30 h-full flex flex-col relative">
                    <Quote className="absolute top-5 left-5 w-8 h-8 text-secondary/20 fill-secondary/10" aria-hidden="true" />
                    <Stars count={t.rating} />
                    <p className="text-on-surface-variant text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/30">
                      <Avatar className="w-11 h-11">
                        <AvatarFallback className={`${t.avatarColor} text-white font-bold text-sm`}>{t.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-primary text-sm">{t.name}</p>
                        <p className="text-on-surface-variant text-xs">{t.origin}</p>
                      </div>
                      <span className="mr-auto text-xs bg-secondary/10 text-secondary font-semibold px-2.5 py-1 rounded-full">{t.service}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button type="button" onClick={scrollPrev} aria-label="الشهادة السابقة"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button type="button" onClick={scrollNext} aria-label="الشهادة التالية"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
