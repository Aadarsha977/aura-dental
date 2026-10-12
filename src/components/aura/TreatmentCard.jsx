import React from 'react';
import { cn } from '@/lib/utils';

export default function TreatmentCard({ item, index, className }) {
  const Icon = item.icon;
  return (
    <article
      className={cn(
        'glass-panel shadow-aura flex h-full w-[19rem] shrink-0 flex-col rounded-3xl p-7 transition-transform duration-200 ease-micro hover:-translate-y-1 sm:w-[21rem]',
        className,
      )}
    >
      <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-6 font-heading text-xl tracking-tight text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      <p className="mt-6 border-t border-border pt-4 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        {item.meta}
      </p>
    </article>
  );
}