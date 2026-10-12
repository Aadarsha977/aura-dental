import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

const STEPS = [
  {
    no: '1',
    title: 'Zero-Gag Digital Impressions',
    body: 'No messy putty; our 3D scanner takes 6,000 photos per second to map your mouth in 90 seconds.',
    image: IMAGES.instrument,
    alt: 'A 3D intraoral scanner capturing a digital impression',
  },
  {
    no: '2',
    title: 'Predictive Smile Preview',
    body: 'See your exact before-and-after smile simulation in photorealistic 3D before treatment begins.',
    image: IMAGES.clinician,
    alt: 'A clinician reviewing a 3D smile simulation on screen',
  },
  {
    no: '3',
    title: 'Micro-Precise Execution',
    body: 'Same-day crowns and gentle laser sculpting with minimal anesthesia and zero recovery downtime.',
    image: IMAGES.architecture,
    alt: 'The Aura treatment suite prepared for precision milling',
  },
];

const OPACITY_STOPS = [
  { input: [0, 0.3, 0.36], output: [1, 1, 0] },
  { input: [0.3, 0.36, 0.63, 0.69], output: [0, 1, 1, 0] },
  { input: [0.63, 0.69, 1], output: [0, 1, 1] },
];

const SCALE_STOPS = [
  { input: [0, 0.33], output: [0.98, 1] },
  { input: [0.33, 0.66], output: [0.98, 1] },
  { input: [0.66, 1], output: [0.98, 1] },
];

export default function PrecisionShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [step, setStep] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setStep(v < 0.34 ? 0 : v < 0.67 ? 1 : 2);
  });

  const opacities = [
    useTransform(scrollYProgress, OPACITY_STOPS[0].input, OPACITY_STOPS[0].output),
    useTransform(scrollYProgress, OPACITY_STOPS[1].input, OPACITY_STOPS[1].output),
    useTransform(scrollYProgress, OPACITY_STOPS[2].input, OPACITY_STOPS[2].output),
  ];
  const scales = [
    useTransform(scrollYProgress, SCALE_STOPS[0].input, SCALE_STOPS[0].output),
    useTransform(scrollYProgress, SCALE_STOPS[1].input, SCALE_STOPS[1].output),
    useTransform(scrollYProgress, SCALE_STOPS[2].input, SCALE_STOPS[2].output),
  ];

  return (
    <section id="precision" ref={ref} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* progress rail */}
        <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
          <ol className="flex flex-col gap-2.5">
            {STEPS.map((s, i) => (
              <li
                key={s.no}
                className={`h-12 w-1 rounded-full transition-colors duration-300 ${
                  step >= i ? 'bg-accent shadow-halo' : 'bg-muted-foreground/25'
                }`}
              />
            ))}
          </ol>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-8 sm:px-12 md:grid-cols-2 md:gap-16">
          {/* text panel */}
          <div className="relative">
            <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The 3-Step Precision Journey
            </p>
            <div className="relative h-64 sm:h-72 md:h-80">
              {STEPS.map((s, i) => (
                <motion.div key={s.no} style={{ opacity: opacities[i] }} className="absolute inset-0">
                  <span className="font-heading text-5xl leading-none text-accent/30">{s.no}</span>
                  <h3 className="mt-3 font-heading text-2xl leading-tight tracking-tight text-foreground sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* image panel */}
          <div className="relative h-56 w-full overflow-hidden rounded-[2rem] border border-line/60 md:h-[28rem]">
            {STEPS.map((s, i) => (
              <motion.div key={s.no} style={{ opacity: opacities[i], scale: scales[i] }} className="absolute inset-0">
                <Image src={s.image} alt={s.alt} fittingType="fill" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}