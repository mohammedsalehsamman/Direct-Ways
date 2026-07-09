import { useScrollReveal } from "../hooks/use-scroll-reveal";

export default function OffersSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="offers" className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-md">
        <div ref={headerRef} className="text-center reveal">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">عروضنا الحصرية</span>
          <h2 className="font-bold text-headline-md text-primary">أفضل العروض السياحية لهذا الموسم</h2>
          <p className="text-on-surface-variant text-body-lg mt-sm max-w-2xl mx-auto">تنظيم باقات سياحية مميزة حسب الطلب</p>
        </div>
      </div>
    </section>
  );
}
