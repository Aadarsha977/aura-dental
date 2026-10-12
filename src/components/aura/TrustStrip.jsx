import React from 'react';
import Reveal from '@/components/aura/Reveal';
import { PROMISES } from '@/components/aura/clinic';

export default function TrustStrip() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-10">
          {PROMISES.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="border-t border-border pt-5">
              <p className="font-heading text-lg tracking-tight text-foreground">{item.title}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}