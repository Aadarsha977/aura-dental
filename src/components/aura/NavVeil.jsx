import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, X } from 'lucide-react';
import ToothMark from '@/components/aura/ToothMark';
import { CONTACT, whatsappHref } from '@/components/aura/clinic';
import { EASE } from '@/components/aura/Reveal';

const RESERVE_HREF = whatsappHref('Hello Aura, I would like to reserve an appointment.');

export default function NavVeil({ open, onClose, links }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0, y: '-2%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-2%' }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <div className="absolute inset-0 bg-glass/90 backdrop-blur-2xl" />
          <div className="relative flex h-full flex-col px-6 pb-10 pt-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <ToothMark className="h-9 w-9 text-primary" />
                <span className="font-heading text-[0.82rem] font-semibold tracking-[0.22em] text-foreground">
                  AURA DENTAL
                </span>
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col">
              {links.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  className="border-b border-border py-5 font-heading text-2xl tracking-tight text-foreground"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.08 + index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-auto grid gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + links.length * 0.05 }}
            >
              <a
                href={RESERVE_HREF}
                target="_blank"
                rel="noreferrer"
                className="shadow-aura flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Reserve Appointment
              </a>
              <a
                href={CONTACT.phoneHref}
                className="glass-panel flex w-full items-center justify-center gap-2.5 rounded-full px-5 py-4 text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4" />
                Call {CONTACT.phoneDisplay}
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}