import React from 'react';
import { motion } from 'framer-motion';

/** Apple-style deceleration — content entries. */
export const EASE = [0.16, 1, 0.3, 1];
/** Tactile, immediate — micro-interactions. */
export const EASE_MICRO = [0.25, 1, 0.5, 1];

/**
 * Reveals on entry and reverses gracefully on the way back up,
 * so scrolling upward rewinds the state instead of snapping.
 */
export default function Reveal({ children, className, delay = 0, y = 26, duration = 0.6 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}