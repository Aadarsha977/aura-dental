import React from 'react';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import { IMAGES, JOURNEY } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Patient comfort"
          title="Four unhurried steps, from hello to aftercare."
          lead="Nothing here is a surprise. You will know what we found, what it costs, and what happens next — before anything begins."
        />

        <Reveal delay={0.1} className="mt-14 overflow-hidden rounded-[2rem] border border-line/60">
          <div className="aspect-[16/6] w-full">
            <Image
              src={IMAGES.instrument}
              alt="A polished dental instrument resting on pale stone"
              fittingType="fill"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <div className="flex items-center gap-4">
                <span className="glass-panel shadow-aura flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm text-primary">
                  {item.step}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-heading text-lg tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}