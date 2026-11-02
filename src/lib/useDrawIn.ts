import { useEffect, useRef } from 'react';

// Arms a "draw in on first view" effect for CSS to pick up: adds `is-armed`
// (start state) and then `is-in` once the element is visible. Nothing runs
// without JS or with prefers-reduced-motion, so the prerendered HTML and
// those visitors see the finished drawing.
export function useDrawIn<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    el.classList.add('is-armed');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
