import { ReactNode } from 'react';
import { m, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  once?: boolean;
  margin?: string;
}

// Thin scroll-reveal wrapper: pass the same className the wrapped element
// already had so this replaces it in place, with no extra DOM nesting.
function Reveal({
  children,
  className,
  delay = 0,
  x = 0,
  y = 16,
  scale = 1,
  once = true,
  margin = '-100px',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}

export default Reveal;
