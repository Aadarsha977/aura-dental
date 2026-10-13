import React from 'react';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import TreatmentCard from '@/components/aura/TreatmentCard';
import { TREATMENTS } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function Treatments() {
  return (
    <section id="treatments" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we treat"
          title="Everything a family needs, under one calm roof."
          lead="From a child's first check-up to a root canal at fifty, the same standard applies: diagnose properly, explain clearly, treat gently."
        />

        {/* 3-column desktop grid with compact, balanced layout */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((item, index) => {
            const isEmergency = index === TREATMENTS.length - 1;
            return (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.08}
                className={cn('h-full', isEmergency && 'sm:col-span-2 lg:col-span-3')}
              >
                <TreatmentCard
                  item={item}
                  index={index}
                  isEmergency={isEmergency}
                  className="w-full"
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}