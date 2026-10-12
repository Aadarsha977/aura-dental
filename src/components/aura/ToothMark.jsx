import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Minimal geometric tooth monogram: a rounded crown fusing into two roots.
 * Decorative — the wordmark or the surrounding link carries the name.
 */
export default function ToothMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn('shrink-0', className)} fill="currentColor">
      <rect x="3.2" y="3.6" width="17.6" height="11.2" rx="4.8" />
      <rect x="6.4" y="12" width="4.6" height="8.4" rx="2.3" />
      <rect x="13" y="12" width="4.6" height="8.4" rx="2.3" />
    </svg>
  );
}