import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import ActionButton from '@/components/aura/ActionButton';
import HeroHeadline from '@/components/aura/HeroHeadline';
import HeroTrustChips from '@/components/aura/HeroTrustChips';
import StudioTour from '@/components/aura/StudioTour';
import { IMAGES, whatsappHref } from '@/components/aura/clinic';
import { EASE } from '@/components/aura/Reveal';
import { Image } from '@/components/ui/image';

const HEADLINE = 'Dentistry designed around calmness, precision, and your confidence.';
const SUBHEAD =
  'Experience anxiety-free dental care backed by 3D optical scanning, biomimetic restoration, and a clinic atmosphere designed to feel like a boutique sanctuary.';

const SPRING = { stiffness: 55, damping: 18, mass: 0.5 };

export default function Hero() {
  const sectionRef = useRef(null);
  const [tourOpen, setTourOpen] = useState(false);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 34]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const easedX = useSpring(mouseX, SPRING);
  const easedY = useSpring(mouseY, SPRING);
  // The featured visual drifts 1.5% against the cursor; the tool card drifts with it for depth.
  const frameX = useTransform(easedX, [-1, 1], ['1.5%', '-1.5%']);
  const frameY = useTransform(easedY, [-1, 1], ['1.5%', '-1.5%']);
  const toolX = useTransform(easedX, [-1, 1], [-11, 11]);
  const toolY = useTransform(easedY, [-1, 1], [-8, 8]);

  const handlePointer = (event) => {
    if (event.pointerType !== 'mouse' || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-background to-background" />
        <div className="absolute -left-32 top-6 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:gap-12 lg:min-h-screen lg:gap-20 lg:pb-28 lg:pt-36">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            className="glass-panel shadow-aura inline-flex items-center rounded-full px-3.5 py-2"
          >
            <span className="text-[0.66rem] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Painless Precision • Advanced Digital Dentistry
            </span>
          </motion.div>

          <HeroHeadline
            text={HEADLINE}
            className="mt-7 text-[2.2rem] leading-[1.08] tracking-tight text-foreground sm:text-[2.7rem] md:text-[2.4rem] lg:text-[3.4rem]"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.78, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {SUBHEAD}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.94, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:flex-col xl:flex-row"
          >
            <span className="relative inline-flex w-full sm:w-auto">
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-accent/40"
                animate={{ opacity: [0, 0.75, 0], scale: [0.97, 1.05, 1.05] }}
                transition={{ duration: 1.8, times: [0, 0.4, 1], repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
              />
              <ActionButton
                href={whatsappHref('Hello Aura, I would like to schedule my first visit.')}
                external
                className="relative w-full sm:w-auto"
              >
                Schedule Your First Visit
              </ActionButton>
            </span>

            <button
              type="button"
              onClick={() => setTourOpen(true)}
              className="glass-panel shadow-aura inline-flex w-full items-center justify-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-medium text-foreground transition-all duration-200 ease-micro hover:-translate-y-0.5 hover:bg-glass/90 sm:w-auto"
            >
              <Play className="h-4 w-4 text-primary" />
              Take Virtual Studio Tour
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.08, ease: EASE }}
            className="mt-8"
          >
            <HeroTrustChips />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <motion.div
              style={{ x: frameX, y: frameY }}
              className="shadow-aura overflow-hidden rounded-[2.25rem] border border-line/60"
            >
              <div className="aspect-[4/5] w-full sm:aspect-[16/11] md:aspect-[4/5]">
                <Image
                  src={IMAGES.architecture}
                  alt="The Aura suite in daylight — an uncluttered treatment room"
                  fittingType="fill"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              style={{ x: toolX, y: toolY }}
              className="absolute -bottom-8 left-4 w-36 sm:w-44 md:-left-6 md:w-40 lg:-left-10 lg:w-48"
            >
              <div className="glass-panel shadow-aura rounded-3xl p-2.5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={IMAGES.instrument}
                    alt="A polished dental instrument on a sterile tray"
                    fittingType="fill"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-2.5 block px-1 pb-0.5 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Milled in-house, same day
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block"
        animate={{ opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </section>
  );
}