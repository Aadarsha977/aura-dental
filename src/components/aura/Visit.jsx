import React from 'react';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/aura/Reveal';
import SectionHeading from '@/components/aura/SectionHeading';
import { CONTACT, HOURS, IMAGES, MAPS_HREF, whatsappHref } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

const TILE =
  'glass-panel shadow-aura block rounded-3xl p-7 transition-transform duration-200 ease-micro hover:-translate-y-1';

export default function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit us"
          title="Call, message, or simply drop in."
          lead="Booking at Aura happens on the phone or by message — a person answers, and you get a real time, not a request form."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal className="h-full">
                <a href={CONTACT.phoneHref} className={`${TILE} h-full`}>
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="mt-6 font-heading text-lg tracking-tight text-foreground">
                    Call the clinic
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{CONTACT.phoneDisplay}</p>
                  <p className="mt-5 text-[0.7rem] uppercase tracking-[0.16em] text-primary">
                    Fastest for pain
                  </p>
                </a>
              </Reveal>

              <Reveal delay={0.08} className="h-full">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className={`${TILE} h-full`}
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <p className="mt-6 font-heading text-lg tracking-tight text-foreground">
                    WhatsApp concierge
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Send a photo, ask a question
                  </p>
                  <p className="mt-5 text-[0.7rem] uppercase tracking-[0.16em] text-primary">
                    Replies within minutes
                  </p>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="mt-4">
              <div className="rounded-3xl border border-border p-7">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Opening hours
                </p>
                <dl className="mt-6">
                  {HOURS.map((row) => (
                    <div
                      key={row.days}
                      className="flex items-baseline justify-between gap-6 border-b border-border py-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted-foreground">{row.days}</dt>
                      <dd className="text-sm font-medium text-foreground">{row.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  Dental emergency outside opening hours? Call the clinic line and follow the
                  recorded instructions — we hold same-day slots every morning.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-[2rem] border border-line/60">
              <Image
                src={IMAGES.lounge}
                alt="The Aura waiting lounge"
                fittingType="fill"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/5 to-transparent" />
              <div className="glass-panel shadow-aura absolute inset-x-4 bottom-4 rounded-3xl p-6 sm:inset-x-6 sm:bottom-6">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Where to find us
                </p>
                <p className="mt-3 font-heading text-lg leading-snug tracking-tight text-foreground">
                  {CONTACT.addressLine1}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{CONTACT.addressLine2}</p>
                <a
                  href={MAPS_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent"
                >
                  Get directions
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}