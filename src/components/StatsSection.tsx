import { useEffect, useRef, useState } from "react";
import { Plane, Users, Globe, Star } from "lucide-react";

const stats = [
  { icon: Plane,  value: 15,   suffix: "+",  label: "عاماً من الخبرة",   delay: "reveal-delay-1" },
  { icon: Users,  value: 5000, suffix: "+",  label: "عميل سعيد",          delay: "reveal-delay-2" },
  { icon: Globe,  value: 50,   suffix: "+",  label: "وجهة سياحية",        delay: "reveal-delay-3" },
  { icon: Star,   value: 98,   suffix: "%",  label: "نسبة رضا العملاء",   delay: "reveal-delay-4" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  delay,
  active,
}: (typeof stats)[0] & { active: boolean }) {
  const count = useCountUp(value, 1600, active);

  return (
    <div className={`reveal ${delay} flex flex-col items-center gap-3 px-8 py-10`}>
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-1">
        <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
      </div>
      <div className="text-5xl font-black text-gold-gradient tabular-nums">
        {count.toLocaleString("ar-u-nu-latn")}
        <span className="text-3xl">{suffix}</span>
      </div>
      <p className="text-on-primary/80 text-base font-semibold text-center">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          // Trigger reveal on children
          el.querySelectorAll<HTMLElement>(".reveal").forEach((child) => {
            child.classList.add("visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary py-16 overflow-hidden">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-x-reverse divide-white/10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
