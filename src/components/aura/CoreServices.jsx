import React from 'react';
import SectionHeading from '@/components/aura/SectionHeading';
import TiltCard from '@/components/aura/TiltCard';

const SERVICES = [
  {
    eyebrow: 'Wellness',
    title: 'Preventative & Holistic Wellness',
    body: 'Comprehensive cleanings, biomimetic sealants, oral microbiome balancing.',
  },
  {
    eyebrow: 'Implants',
    title: '3D Guided Dental Implants',
    body: 'Permanent, natural replacements mapped with sub-millimeter surgical guides.',
  },
  {
    eyebrow: 'Cosmetic',
    title: 'Cosmetic Porcelain Veneers',
    body: 'Handcrafted ceramic veneers tailored to your facial symmetry and smile dynamics.',
  },
  {
    eyebrow: 'Orthodontics',
    title: 'Clear Aligner Orthodontics',
    body: 'Discreet teeth alignment designed via digital predictive scans.',
  },
];

const FOOTER = {
  href: '#journey',
  label: 'Learn procedure & view recovery roadmap →',
};

export default function CoreServices() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="Four pillars of modern, unhurried dentistry."
          lead="Every service begins with a scan and a conversation, and ends with a result you can see and feel."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <TiltCard
              key={service.title}
              index={index}
              {...service}
              footerHref={FOOTER.href}
              footerLabel={FOOTER.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}