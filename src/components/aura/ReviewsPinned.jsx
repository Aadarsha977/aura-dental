import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from '@/components/aura/SectionHeading';
import Reveal from '@/components/aura/Reveal';

const REVIEWS = [
  {
    quote:
      'I avoided the dentist for 8 years out of sheer panic. Dr. Vance and the team treated me with zero judgment, complete kindness, and I felt nothing during my entire procedure.',
    name: 'Sarah K.',
  },
  {
    quote:
      'The 3D scan before my veneers let me see exactly what my teeth would look like. No surprises, just perfection. Truly the Apple store of dentistry.',
    name: 'Marcus T.',
  },
  {
    quote:
      'Noise-canceling headphones, ceiling TVs, and zero wait time. I actually look forward to my appointments now.',
    name: 'David R.',
  },
];

const STARS = 5;

function ReviewCard({ review, index, total, progress }) {
  const center = total > 1 ? index / (total - 1) : 0.5;
  const margin = 0.16;
  const scale = useTransform(
    progress,
    [center - margin, center, center + margin],
    [0.95, 1, 0.95],
    { clamp: true },
  );
  const opacity = useTransform(
    progress,
    [center - margin, center, center + margin],
    [0.45, 1, 0.45],
    { clamp: true },
  );
  const blur = useTransform(
    progress,
    [center - margin, center, center + margin],
    [2, 0, 2],
    { clamp: true },
  );
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.article
      style={{ scale, opacity, filter }}
      className="flex w-[86vw] shrink-0 flex-col justify-center px-4 sm:w-[640px] sm:px-8"
    >
      <div className="mx-auto w-full max-w-xl rounded-[2rem] border border-line/60 bg-card p-8 shadow-aura sm:p-10">
        <div className="flex gap-1 text-accent" aria-label={`${STARS} out of 5 stars`}>
          {Array.from({ length: STARS }).map((_, s) => (
            <Star key={s} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
          “{review.quote}”
        </p>
        <p className="mt-6 text-sm font-semibold tracking-wide text-primary">
          {review.name}
        </p>
      </div>
    </motion.article>
  );
}

export default function ReviewsPinned() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        setMaxX(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const pinned = maxX > 0 && !prefersReduced;
  const sectionHeight = pinned ? `${REVIEWS.length * 100}vh` : 'auto';

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      {pinned ? (
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <Reveal className="pointer-events-none absolute left-0 right-0 top-16 z-10 flex justify-center">
            <div className="pointer-events-auto">
              <SectionHeading
                eyebrow="PATIENT EXPERIENCES"
                title="What our patients feel during their visits."
                align="center"
              />
            </div>
          </Reveal>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full items-center pl-[7vw] pr-[7vw]"
          >
            {REVIEWS.map((r, i) => (
              <ReviewCard
                key={r.name}
                review={r}
                index={i}
                total={REVIEWS.length}
                progress={scrollYProgress}
              />
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <SectionHeading
              eyebrow="PATIENT EXPERIENCES"
              title="What our patients feel during their visits."
              lead="Real words from patients who walked in anxious and walked out smiling."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.1} className="h-full">
                  <article className="flex h-full flex-col rounded-[1.75rem] border border-line/60 bg-card p-8 shadow-aura">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: STARS }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-foreground">
                      “{r.quote}”
                    </p>
                    <p className="mt-5 text-sm font-semibold text-primary">{r.name}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}