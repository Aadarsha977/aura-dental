import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import { APPROACH, IMAGES } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

export default function Approach() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.07, 1]);

  return (
    <section id="approach" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal className="overflow-hidden rounded-[2rem] border border-line/60 bg-card">
            <motion.div style={{ scale }} className="aspect-[4/5] w-full">
              <Image
                src={IMAGES.clinician}
                alt="A clinician at Aura, photographed in the treatment room"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </Reveal>
          <Reveal delay={0.12} className="mt-6 max-w-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A quiet room, an unhurried hour, and a clinician who explains before she begins — the
              whole of our approach, in one sentence.
            </p>
          </Reveal>
        </div>

        <div>
          <SectionHeading
            eyebrow="Technology"
            title="Technology you can see, comfort you can feel."
            lead="Anxiety in dentistry is usually a memory of being surprised. We removed the surprises: what we find, what it costs, and what happens next are all shown to you first."
          />
          <div className="mt-12">
            {APPROACH.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.06}
                  className="border-t border-border py-7 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}