import React from 'react';
import { Clock, Lock, MapPin, Train, UserRound } from 'lucide-react';
import ToothMark from '@/components/aura/ToothMark';
import { CONTACT, HOURS, MAPS_HREF, whatsappHref } from '@/components/aura/clinic';

const LINKS = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Technology', href: '#approach' },
  { label: 'Patient comfort', href: '#journey' },
  { label: 'Doctors', href: '#team' },
  { label: 'Visit us', href: '#visit' },
];

const TRANSIT_HREF =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent('120 Marina Boulevard Suite 300 San Francisco CA 94123') +
  '&dirflg=r';

export default function Footer() {
  return (
    <footer className="relative border-t border-border pb-28 pt-16 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <ToothMark className="h-9 w-9 text-primary" />
              <span className="leading-none">
                <span className="block font-heading text-[0.8rem] font-semibold tracking-[0.24em] text-foreground">
                  AURA
                </span>
                <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Dental &amp; Implant Suite
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              General and family dentistry, practised slowly and explained properly. Every plan in
              writing, every appointment unhurried.
            </p>
            <a
              href="/login"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-all duration-200 ease-micro hover:-translate-y-0.5 hover:border-accent"
            >
              <UserRound className="h-3.5 w-3.5 text-primary" />
              Patient Portal Login
            </a>
          </div>

          <nav className="grid gap-3 content-start">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-accent" /> Office hours
            </p>
            <dl className="mt-4 space-y-2">
              {HOURS.map((row) => (
                <div key={row.days} className="flex gap-3 text-xs text-muted-foreground">
                  <dt className="min-w-[7.5rem]">{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              WhatsApp concierge
            </a>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" /> Find us
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {CONTACT.addressLine1}
              <br />
              {CONTACT.addressLine2}
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Aura Dental clinic location map"
                src="https://www.google.com/maps?q=120+Marina+Boulevard+Suite+300+San+Francisco+CA+94123&output=embed"
                className="h-40 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={TRANSIT_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              <Train className="h-4 w-4 text-primary" />
              Transit directions
            </a>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noreferrer"
              className="ml-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Driving
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aura Dental &amp; Implant Suite.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 font-medium text-foreground">
              <Lock className="h-3.5 w-3.5 text-primary" />
              HIPAA Compliant
            </span>
            <span>Digital diagnosis · Written plans · Same-day care for pain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}