import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/components/aura/clinic';
import { cn } from '@/lib/utils';

export default function TreatmentCard({ item, index, className, isEmergency = false }) {
  const Icon = item.icon;

  if (isEmergency) {
    return (
      <article
        className={cn(
          'glass-panel shadow-aura relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.03] p-7 transition-transform duration-200 ease-micro hover:-translate-y-1 sm:flex-row sm:items-center sm:p-8',
          className,
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-6 w-6" />
          </span>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                Immediate Care
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-emerald-600">
                Slots Held Daily
              </span>
            </div>
            <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={CONTACT.emergencyPhoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground shadow-halo transition-all hover:bg-primary/90"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Emergency Desk</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        'glass-panel shadow-aura flex h-full w-full flex-col justify-between rounded-3xl p-7 transition-transform duration-200 ease-micro hover:-translate-y-1',
        className,
      )}
    >
      <div>
        <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-6 font-heading text-xl tracking-tight text-foreground">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
      <p className="mt-6 border-t border-border pt-4 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        {item.meta}
      </p>
    </article>
  );
}