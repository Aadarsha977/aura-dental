import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/components/aura/clinic';

export default function EmergencyBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-9">
      <a
        href={CONTACT.emergencyPhoneHref}
        className="group relative flex h-full w-full items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-accent px-4 text-white"
      >
        <span className="absolute inset-0 bg-accent/20 blur-sm" aria-hidden="true" />
        <motion.span
          aria-hidden="true"
          className="relative"
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="absolute -inset-1.5 rounded-full bg-white/40 blur-[3px]" />
          <Phone className="relative h-3.5 w-3.5 fill-white" />
        </motion.span>
        <span className="relative text-[0.7rem] font-semibold tracking-wide sm:text-xs">
          Same-Day Emergency Dental Relief Available
        </span>
        <span className="relative hidden h-3 w-px bg-white/50 sm:block" />
        <span className="relative hidden text-[0.7rem] font-medium sm:text-xs">
          Call Directly: {CONTACT.emergencyPhoneDisplay}
        </span>
      </a>
    </div>
  );
}