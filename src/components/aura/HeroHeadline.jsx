import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE } from '@/components/aura/Reveal';

export default function HeroHeadline({ text, className }) {
  const words = text ? text.split(' ') : [];

  return (
    <h1 className={cn('text-balance font-normal tracking-tight font-serif', className)}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.04, delayChildren: 0.15 }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.28em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: EASE },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </h1>
  );
}
