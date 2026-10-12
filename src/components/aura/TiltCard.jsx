import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { EASE } from '@/components/aura/Reveal';

/**
 * 3D perspective tilt card: subtle rotateX/Y (±4°) on desktop mousemove,
 * a soft specular light sweep across the surface, a 6px hover lift, and a
 * badge that shifts to primary teal on hover.
 */
export default function TiltCard({ index = 0, eyebrow, title, body, footerHref, footerLabel }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [light, setLight] = useState({ x: 50, y: 50 });

  const handleMove = (event) => {
    if (event.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTilt({ rotateX: -(py - 0.5) * 8, rotateY: (px - 0.5) * 8 });
    setLight({ x: px * 100, y: py * 100 });
  };

  const reset = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div className="h-full transition-transform duration-200 ease-micro hover:-translate-y-1.5">
        <div
          ref={ref}
          onPointerMove={handleMove}
          onPointerLeave={reset}
          className="group relative h-full rounded-3xl border border-line/60 bg-card p-7 shadow-aura"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${light.x}% ${light.y}%, hsl(var(--accent) / 0.18), transparent 55%)`,
            }}
          />
          <div style={{ transform: 'translateZ(40px)' }}>
            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
              {eyebrow}
            </span>
            <h3 className="mt-5 font-heading text-xl leading-snug tracking-tight text-foreground">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <a
              href={footerHref}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {footerLabel}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}