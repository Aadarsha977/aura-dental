import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/aura/Reveal';
import { Image } from '@/components/ui/image';
import { TECH } from '@/components/aura/clinic';

export default function TechnologyShowcase() {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // Subtle 0.3x depth parallax — background drifts slower than the page scroll
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  const active = openIndex !== null ? TECH.cards[openIndex] : null;

  return (
    <section id="technology" ref={ref} className="relative overflow-hidden bg-foreground py-24 sm:py-32">
      {/* Parallax equipment backdrop */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={TECH.backdrop} alt="" fittingType="fill" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/85" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-background/60">
            <span className="h-px w-8 bg-background/30" aria-hidden="true" />
            CUTTING-EDGE HOSPITALITY
          </p>
          <h2 className="text-balance text-[1.75rem] leading-[1.15] tracking-tight text-background sm:text-4xl lg:text-[2.9rem]">
            Medical technology designed to eliminate pain and guesswork.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/70 sm:text-lg">
            Every instrument in the suite exists for one reason — to make your visit quieter, safer, and more precise.
          </p>
        </Reveal>

        {/* Floating glassmorphism cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TECH.cards.map((card, i) => (
            <Reveal key={card.title} className="h-full" delay={i * 0.1}>
              <button
                onClick={() => setOpenIndex(i)}
                className="glass-panel group flex h-full w-full flex-col items-start rounded-[1.75rem] p-7 text-left shadow-aura animate-float"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.short}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Inspect
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Click-to-inspect modal */}
      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-lg rounded-[1.75rem]">
          {active && (
            <>
              <DialogHeader>
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <active.icon className="h-6 w-6" />
                </span>
                <DialogTitle className="text-2xl tracking-tight">{active.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">{active.short}</DialogDescription>
              </DialogHeader>

              <div className="mt-2">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Procedure benefits
                </p>
                <ul className="mt-3 space-y-2">
                  {active.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-secondary p-5">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Clinical safety data
                </p>
                <dl className="mt-3 space-y-3">
                  {active.safety.map((s) => (
                    <div key={s.label} className="flex items-center justify-between gap-4">
                      <dt className="text-sm text-muted-foreground">{s.label}</dt>
                      <dd className="text-right text-sm font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}