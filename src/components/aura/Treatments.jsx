import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll } from 'framer-motion';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import TreatmentCard from '@/components/aura/TreatmentCard';
import { TREATMENTS } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

const PinnedGallery = () => {
  const wrapRef = useRef(null);
  const rowRef = useRef(null);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      const row = rowRef.current;
      if (!row) return;
      const travel = Math.max(0, row.scrollWidth - window.innerWidth);
      x.set(-value * travel);
    });
    return () => unsubscribe();
  }, [scrollYProgress, x]);

  return (
    <div ref={wrapRef} className="relative hidden lg:block" style={{ height: '330vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-9 overflow-hidden">
        <div className="flex items-end justify-between gap-6 px-[6vw]">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            Treatments
          </p>
          <p className="hidden text-xs text-muted-foreground xl:block">
            Keep scrolling — the suite continues
          </p>
        </div>
        <motion.div ref={rowRef} style={{ x }} className="flex gap-6 px-[6vw]">
          {TREATMENTS.map((item, index) => (
            <TreatmentCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function Treatments() {
  const reduced = useReducedMotion();

  return (
    <section id="treatments" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we treat"
          title="Everything a family needs, under one calm roof."
          lead="From a child's first check-up to a root canal at fifty, the same standard applies: diagnose properly, explain clearly, treat gently."
        />
      </div>

      {!reduced && <PinnedGallery />}

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={cn('mt-12 grid gap-5 sm:grid-cols-2', !reduced && 'lg:hidden')}>
          {TREATMENTS.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.07} className="h-full">
              <TreatmentCard item={item} index={index} className="w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}