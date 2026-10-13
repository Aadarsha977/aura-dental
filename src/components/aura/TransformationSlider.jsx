import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';
import SectionHeading from '@/components/aura/SectionHeading';
import Reveal from '@/components/aura/Reveal';
import { Image } from '@/components/ui/image';
import { TRANSFORMATIONS } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function TransformationSlider() {
  const [activeCase, setActiveCase] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const pos = useMotionValue(50);
  const posSpring = useSpring(pos, { stiffness: 500, damping: 35, mass: 0.4 });

  const clipBefore = useTransform(posSpring, (v) => `inset(0 ${100 - v}% 0 0)`);
  const handleLeft = useTransform(posSpring, (v) => `${v}%`);

  const active = TRANSFORMATIONS[activeCase];

  const onPointerDown = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((e.clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    pos.set(pct);
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      let pct = ((e.clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      pos.set(pct);
    };
    const onEnd = () => setIsDragging(false);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
    };
  }, [isDragging, pos]);

  // Preload all case images on mount so transitions are instant
  useEffect(() => {
    TRANSFORMATIONS.forEach((c) => {
      const imgBefore = new window.Image();
      imgBefore.src = c.before;
      const imgAfter = new window.Image();
      imgAfter.src = c.after;
    });
  }, []);

  // reset divider when switching cases
  useEffect(() => {
    pos.set(50);
  }, [activeCase, pos]);

  const meta = [
    { label: 'Patient', value: active.patient },
    { label: 'Concern', value: active.concern },
    { label: 'Solution', value: active.solution },
    { label: 'Timeframe', value: active.timeframe },
  ];

  return (
    <section id="transformations" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="REAL PATIENT TRANSFORMATIONS"
          title="Visible changes, natural smiles."
          lead="Drag the divider across each case to see the difference our care makes — real patients, real outcomes."
        />

        {/* Case selector tabs */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-2">
            {TRANSFORMATIONS.map((c, i) => (
              <button
                key={c.tab}
                onClick={() => setActiveCase(i)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
                  i === activeCase
                    ? 'bg-primary text-primary-foreground shadow-halo'
                    : 'glass-panel text-muted-foreground hover:text-foreground',
                )}
              >
                {c.tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Comparison slider */}
        <Reveal className="mt-8">
          <div
            ref={containerRef}
            onPointerDown={onPointerDown}
            style={{ touchAction: 'pan-y' }}
            className={cn(
              'relative aspect-[16/10] w-full select-none overflow-hidden rounded-[2rem] border border-line/60 bg-card',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
          >
            {/* Pre-rendered stacked cases for zero-lag instant transitions */}
            {TRANSFORMATIONS.map((c, i) => (
              <div
                key={c.tab}
                className={cn(
                  'pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out',
                  i === activeCase ? 'opacity-100 z-10' : 'opacity-0 z-0'
                )}
              >
                {/* After (base layer, right half) */}
                <div className="absolute inset-0">
                  <Image src={c.after} alt={c.afterLabel} fittingType="fill" className="h-full w-full object-cover" />
                </div>

                {/* Before (clipped, left half) */}
                <motion.div style={{ clipPath: clipBefore }} className="absolute inset-0">
                  <Image src={c.before} alt={c.beforeLabel} fittingType="fill" className="h-full w-full object-cover" />
                </motion.div>
              </div>
            ))}

            {/* Labels */}
            <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
              {active.beforeLabel}
            </span>
            <span className="pointer-events-none absolute right-4 top-4 z-20 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground backdrop-blur-sm">
              {active.afterLabel}
            </span>

            {/* Drag handle */}
            <motion.div
              style={{ left: handleLeft }}
              className="pointer-events-none absolute top-0 z-30 h-full w-0.5 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-aura ring-1 ring-black/5">
                <ChevronsLeftRight className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Case metadata card */}
        <Reveal className="mt-8">
          <div className="glass-panel grid gap-6 rounded-[1.75rem] p-8 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">{m.label}</p>
                <p className="mt-2 text-sm font-medium text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}