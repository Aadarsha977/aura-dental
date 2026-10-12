import React from 'react';
import { cn } from '@/lib/utils';

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-medium transition-all duration-200 ease-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const variants = {
  solid:
    'shadow-aura bg-primary px-5 py-3.5 text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90',
  glass:
    'glass-panel shadow-aura px-5 py-3.5 text-foreground hover:-translate-y-0.5 hover:bg-glass/90',
  quiet:
    'rounded-full px-4 py-2 text-muted-foreground hover:text-foreground',
};

export default function ActionButton({
  href,
  variant = 'solid',
  className,
  children,
  external = false,
  ...props
}) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  );
}