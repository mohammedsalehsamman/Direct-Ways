import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    // Observe the root element
    el.classList.add("reveal");
    observer.observe(el);

    // Also observe direct children with reveal-child class
    const children = el.querySelectorAll<HTMLElement>(".reveal-child");
    for (const child of children) {
      observer.observe(child);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useScrollRevealChildren<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );

    const children = container.querySelectorAll<HTMLElement>(".reveal");
    for (const child of children) {
      observer.observe(child);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
