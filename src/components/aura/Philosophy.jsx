import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '@/components/aura/SectionHeading';
import StatCounter from '@/components/aura/StatCounter';
import { IMAGES } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

const STATS = [
  { value: 100, suffix: '%', label: 'Painless Digital Injections' },
  { value: 15, suffix: '+ Years', label: 'Average Specialist Experience' },
  { display: 'Zero', label: 'Wait-Time Guarantee' },
];

export default function Philosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 20%'] });
  // Rectangular mask expands from the centre outward as the lounge scrolls into view.
  const clip = useTransform(scrollYProgress, [0, 1], ['inset(0 50% 0 50%)', 'inset(0 0% 0 0%)']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="philosophy" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="We replaced dental dread with deliberate serenity."
            lead="Traditional dental visits are rushed and overwhelming. We designed Aura Dental from the ground up to reverse that experience: soundproof treatment suites, noise-canceling headphones, ceiling-mounted entertainment, and gentle dentists who listen before they touch."
          />
          <motion.div
            ref={ref}
            style={{ clipPath: clip }}
            className="overflow-hidden rounded-[2.25rem] border border-line/60"
          >
            <motion.div style={{ scale }} className="aspect-[4/5] w-full sm:aspect-[3/4]">
              <Image
                src={IMAGES.lounge}
                alt="The Aura arrival lounge — calm, soft, and uncluttered"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3 sm:gap-8">
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}