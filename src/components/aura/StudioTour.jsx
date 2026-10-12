import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IMAGES } from '@/components/aura/clinic';
import { Image } from '@/components/ui/image';

const ROOMS = [
  {
    src: IMAGES.architecture,
    alt: 'The Aura treatment suite in daylight',
    caption: 'The suite, late afternoon',
  },
  {
    src: IMAGES.lounge,
    alt: 'The Aura arrival lounge with soft seating',
    caption: 'The arrival lounge',
  },
  {
    src: IMAGES.instrument,
    alt: 'Sterilised dental instruments on a pale surface',
    caption: 'The instrument table',
  },
  {
    src: IMAGES.clinician,
    alt: 'A clinician at work in the treatment room',
    caption: 'In the treatment room',
  },
];

export default function StudioTour({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-[1.75rem] border-line/60 bg-card p-0 sm:rounded-[1.75rem]">
        <DialogHeader className="space-y-2 px-6 pr-14 pt-7 sm:px-8 sm:pr-16">
          <DialogTitle className="font-heading text-xl tracking-tight text-foreground">
            A quiet walk through the suite
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
            Four rooms, photographed in daylight — exactly as they look when you arrive.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8">
          {ROOMS.map((room) => (
            <figure key={room.caption} className="overflow-hidden rounded-2xl border border-line/60">
              <div className="aspect-[4/3] w-full">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fittingType="fill"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                {room.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}