import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { EASE } from '@/components/aura/Reveal';
import { cn } from '@/lib/utils';

/**
 * Counts upward to `value` once the stat scrolls into view.
 * Pass `display` to render a non-numeric figure (e.g. "Zero") without animating.
 */
export default function StatCounter({ value = 0, suffix = '', label, display, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className={cn('text-center sm:text-left', className)}>
      <div className="font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
        {display ?? count}
        {suffix}
      </div>
      <div className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}