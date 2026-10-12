import React from 'react';
import { Sparkles, Star, Wind } from 'lucide-react';

const CHIPS = [
  { Icon: Star, label: '4.98 Rating (850+ Verified Patients)', solid: true },
  { Icon: Wind, label: 'Zero-Anxiety Nitrous & Sedation' },
  { Icon: Sparkles, label: 'Same-Day Restorations' },
];

export default function HeroTrustChips() {
  return (
    <ul className="flex flex-wrap items-center gap-2.5">
      {CHIPS.map(({ Icon, label, solid }) => (
        <li
          key={label}
          className="glass-panel inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-muted-foreground"
        >
          <Icon className="h-3.5 w-3.5 text-primary" {...(solid ? { fill: 'currentColor' } : {})} />
          {label}
        </li>
      ))}
    </ul>
  );
}