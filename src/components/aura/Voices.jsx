import React from 'react';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import { VOICES } from '@/components/aura/clinic';

export default function Voices() {
  return (
    <section id="voices" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="In their words"
          title="The quiet reputation a clinic builds."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {VOICES.map((voice, index) => (
            <Reveal key={voice.name} delay={index * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <span className="font-heading text-3xl leading-none text-primary" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  {voice.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5 text-sm">
                  <span className="font-medium text-foreground">{voice.name}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{voice.meta}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}