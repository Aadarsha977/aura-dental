import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT, isOpenNow, whatsappHref } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function ContactDock() {
  const open = isOpenNow();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:px-0 sm:pb-0">
      <div className="glass-panel shadow-aura mx-auto flex max-w-md items-center gap-2 rounded-full p-2 sm:mx-0">
        <span className="hidden items-center gap-2 pl-3 pr-1 lg:flex">
          <span
            className={cn(
              'h-2 w-2 rounded-full',
              open ? 'animate-pulse bg-primary' : 'bg-muted-foreground',
            )}
          />
          <span className="text-xs font-medium text-muted-foreground">
            {open ? 'Open now' : 'Closed'}
          </span>
        </span>
        <a
          href={CONTACT.phoneHref}
          className="shadow-aura flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-micro hover:-translate-y-0.5 sm:flex-none"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-foreground transition-transform duration-200 ease-micro hover:-translate-y-0.5 sm:flex-none"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}