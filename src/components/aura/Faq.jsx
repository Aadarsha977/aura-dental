import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal, { EASE } from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import { FAQS } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Questions"
            title="The things patients ask us first."
            lead="If your question is not here, the fastest answer is a phone call."
          />
        </div>

        <Reveal delay={0.1}>
          <div className="divide-y divide-border">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base tracking-tight text-foreground sm:text-lg">
                      {item.q}
                    </span>
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/70 text-accent transition-colors duration-300 ease-micro group-hover:border-accent">
                      <Plus
                        className={cn(
                          'h-4 w-4 transition-transform duration-500 ease-reveal',
                          isOpen && 'rotate-45',
                        )}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}