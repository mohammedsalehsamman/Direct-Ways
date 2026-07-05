import { MapPin, Clock, Phone } from "lucide-react";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

const ADDRESS = "شارع البحار، الحصن، المركزية غرب، أبوظبي، الإمارات العربية المتحدة";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK = "https://maps.app.goo.gl/oKkLGp4C1gnwYzcc6";

export default function MapSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-xl bg-white">
      <div className="max-w-container-max mx-auto px-md">
        <div ref={ref} className="text-center mb-xl reveal">
          <span className="text-secondary font-bold tracking-widest text-sm uppercase block mb-xs">موقعنا</span>
          <h2 className="font-bold text-headline-md text-primary">زورونا في مكتبنا بأبوظبي</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
          <div className="lg:col-span-2 h-80 lg:h-[420px] overflow-hidden border border-outline-variant/40 shadow-md">
            <iframe
              title="موقع دايركت وايز على الخريطة"
              src={MAP_EMBED_SRC}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="bg-surface-container-low p-lg flex flex-col justify-center gap-md">
            <div className="flex items-start gap-sm">
              <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-body-md text-on-surface-variant leading-loose">{ADDRESS}</p>
            </div>
            <div className="flex items-center gap-sm">
              <Clock className="w-6 h-6 text-secondary flex-shrink-0" strokeWidth={1.5} />
              <p className="text-body-md text-on-surface-variant">٩ص – ٦م (يومياً عدا السبت والأحد)</p>
            </div>
            <div className="flex items-center gap-sm">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0" strokeWidth={1.5} />
              <a href="tel:+971507046772" dir="ltr" className="text-body-md text-primary font-bold hover:text-secondary transition-colors">
                +971 50 704 6772
              </a>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-sm inline-flex items-center justify-center gap-sm bg-primary text-on-primary font-bold px-lg py-sm hover:bg-primary/90 transition-colors"
            >
              فتح في خرائط جوجل
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
