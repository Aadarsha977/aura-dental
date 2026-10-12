import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, GraduationCap, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/aura/SectionHeading';
import Reveal, { EASE } from '@/components/aura/Reveal';
import { Image } from '@/components/ui/image';
import { TEAM } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function Team() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="team" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="EXPERT CLINICIANS"
          title="Led by recognized leaders in restorative and cosmetic dentistry."
          lead="Recognized educators and clinicians who pair technical mastery with a genuinely unhurried chairside manner."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TEAM.map((doc, i) => {
            const isOpen = openId === i;
            return (
              <Reveal key={doc.name} delay={i * 0.15} className="h-full">
                <article
                  className={cn(
                    'group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line/60 bg-card transition-all duration-500 ease-micro',
                    isOpen ? 'shadow-aura' : 'hover:-translate-y-1 hover:shadow-aura',
                  )}
                >
                  {/* Portrait — grayscale to warm color on hover */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fittingType="fill"
                      className="h-full w-full object-cover grayscale transition-all duration-700 ease-micro group-hover:grayscale-0 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">{doc.name}</h3>
                      <p className="mt-1 text-sm font-medium text-primary">{doc.role}</p>
                    </div>
                  </div>

                  {/* Bio + credentials toggle */}
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-sm leading-relaxed text-muted-foreground">{doc.bio}</p>

                    <button
                      onClick={() => setOpenId(isOpen ? null : i)}
                      className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-accent transition-colors hover:text-primary"
                      aria-expanded={isOpen}
                    >
                      View Credentials & Research
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-300 ease-micro',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>

                    {/* Credentials drawer — smooth slide down, no layout jump */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 grid gap-5 pt-1 sm:grid-cols-2">
                            <div>
                              <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                                <GraduationCap className="h-3.5 w-3.5 text-accent" />
                                Education
                              </p>
                              <ul className="mt-3 space-y-1.5">
                                {doc.education.map((e) => (
                                  <li key={e} className="text-sm text-foreground">{e}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                                Board Certifications
                              </p>
                              <ul className="mt-3 space-y-1.5">
                                {doc.certifications.map((c) => (
                                  <li key={c} className="text-sm text-foreground">{c}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}