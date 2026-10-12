import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import NavVeil from '@/components/aura/NavVeil';
import ToothMark from '@/components/aura/ToothMark';
import { CONTACT, whatsappHref } from '@/components/aura/clinic';
import { EASE } from '@/components/aura/Reveal';
import { cn } from '@/lib/utils';

export const NAV_LINKS = [
  { id: 'treatments', label: 'Treatments' },
  { id: 'approach', label: 'Technology' },
  { id: 'journey', label: 'Patient Comfort' },
  { id: 'transformations', label: 'Transformations' },
  { id: 'team', label: 'Doctors' },
];

export const RESERVE_HREF = whatsappHref('Hello Aura, I would like to reserve an appointment.');

const SCROLLED_AT = 60;
const ACTIVE_LINE = 140;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLLED_AT);
      let current = null;
      let closest = -Infinity;
      NAV_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (!section) return;
        const top = section.getBoundingClientRect().top;
        if (top <= ACTIVE_LINE && top > closest) {
          closest = top;
          current = id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-9 z-40 border-b transition-all duration-300 ease-micro',
          scrolled
            ? 'h-16 border-border/80 bg-glass/85 backdrop-blur-lg'
            : 'h-[84px] border-transparent bg-transparent',
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            aria-label="Aura Dental — back to top"
            className="flex items-center gap-2.5"
          >
            <ToothMark className="h-9 w-9 text-primary" />
            <span className="hidden font-heading text-[0.82rem] font-semibold tracking-[0.22em] text-foreground lg:block">
              AURA DENTAL
            </span>
          </a>

          <nav className="hidden items-center md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={cn(
                  'relative px-2 py-2 text-xs transition-colors duration-200 hover:text-foreground lg:px-4 lg:text-sm',
                  active === link.id ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-1.5 bottom-0.5 h-[2px] rounded-full bg-accent lg:inset-x-3"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 text-[13px] text-muted-foreground transition-colors duration-200 hover:text-foreground xl:flex"
            >
              <Phone className="h-4 w-4 text-primary" />
              {CONTACT.phoneDisplay}
            </a>

            <a
              href={RESERVE_HREF}
              target="_blank"
              rel="noreferrer"
              className="shadow-aura hidden rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 ease-micro hover:-translate-y-0.5 hover:shadow-halo lg:px-5 lg:text-sm md:inline-flex"
            >
              Reserve Appointment
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="glass-panel shadow-aura flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-glass/90 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <NavVeil open={open} onClose={() => setOpen(false)} links={NAV_LINKS} />
    </>
  );
}