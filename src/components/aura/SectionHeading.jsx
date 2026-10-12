import React from 'react';
import Reveal from '@/components/aura/Reveal';
import { cn } from '@/lib/utils';

export default function SectionHeading({ eyebrow, title, lead, className, align = 'left' }) {
  return (
    <Reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-5 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground',
            align === 'center' && 'justify-center',
          )}
        >
          {align === 'left' && <span className="h-px w-8 bg-border" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-[1.75rem] leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {lead && (
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      )}
    </Reveal>
  );
}