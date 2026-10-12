import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, Check, ChevronRight, Stethoscope } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { TEAM, whatsappHref } from '@/components/aura/clinic';
import { EASE } from '@/components/aura/Reveal';
import { cn } from '@/lib/utils';

const DOCTORS = [
  { id: 'any', name: 'No preference', role: 'First available clinician' },
  ...TEAM.map((t) => ({ id: t.name, name: t.name, role: t.role })),
];

function buildDateOptions(count) {
  const out = [];
  const d = new Date();
  let added = 0;
  while (added < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) {
      out.push({
        value: d.toISOString(),
        label: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      });
      added++;
    }
  }
  return out;
}

const DATE_OPTIONS = buildDateOptions(4);

function StepDot({ active, done, n }) {
  return (
    <span
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] font-semibold transition-colors duration-300',
        active ? 'bg-accent text-white' : done ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground',
      )}
    >
      {done ? <Check className="h-3.5 w-3.5" /> : n}
    </span>
  );
}

function BookingDialog({ open, setOpen }) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const reset = () => {
    setStep(1);
    setDate(null);
    setDoctor(null);
    setSubmitted(false);
  };

  const handleClose = (next) => {
    setOpen(next);
    if (!next) setTimeout(reset, 250);
  };

  const confirm = () => {
    const dateLabel = DATE_OPTIONS.find((d) => d.value === date)?.label ?? 'a preferred date';
    const doctorLabel = DOCTORS.find((d) => d.id === doctor)?.name ?? 'no preference';
    const msg = `Hello Aura, I would like to book the New Patient Comprehensive Experience (3D Scan & Exam).\nPreferred date: ${dateLabel}\nPreferred clinician: ${doctorLabel}`;
    window.open(whatsappHref(msg), '_blank', 'noopener');
    setSubmitted(true);
    setTimeout(() => handleClose(false), 2600);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md overflow-hidden p-0 sm:rounded-[1.75rem]">
        <DialogHeader className="border-b border-border/70 bg-secondary/40 px-6 pt-6">
          <DialogTitle className="text-base font-semibold tracking-tight">
            Book your visit
          </DialogTitle>
          <DialogDescription className="text-xs">
            New Patient Comprehensive Experience — Includes 3D Scan &amp; Exam
          </DialogDescription>
          <div className="mt-4 mb-5 flex items-center gap-2">
            {[1, 2, 3].map((n) => (
              <React.Fragment key={n}>
                <StepDot active={step === n} done={step > n} n={n} />
                {n < 3 && (
                  <span className={cn('h-px flex-1 transition-colors', step > n ? 'bg-primary' : 'bg-border')} />
                )}
              </React.Fragment>
            ))}
          </div>
        </DialogHeader>

        <div className="px-6 py-5">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-6 text-center"
              >
                <motion.svg
                  width="72"
                  height="72"
                  viewBox="0 0 52 52"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2.5"
                    variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                  <motion.path
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27 L22 35 L38 18"
                    variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                    transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
                  />
                </motion.svg>
                <p className="mt-5 text-sm font-semibold text-foreground">Request sent</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  We have opened WhatsApp to confirm your appointment. We will reply shortly.
                </p>
              </motion.div>
            ) : step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Calendar className="h-4 w-4 text-accent" /> Choose a date
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {DATE_OPTIONS.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setDate(d.value)}
                      className={cn(
                        'rounded-xl border px-3 py-2.5 text-sm transition-all duration-200 ease-micro',
                        date === d.value
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border text-muted-foreground hover:border-accent hover:text-foreground',
                      )}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    disabled={!date}
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-micro enabled:hover:-translate-y-0.5 disabled:opacity-40"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <p className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                  <Stethoscope className="h-4 w-4 text-accent" /> Choose a clinician
                </p>
                <div className="grid gap-2">
                  {DOCTORS.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setDoctor(doc.id)}
                      className={cn(
                        'flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-all duration-200 ease-micro',
                        doctor === doc.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-accent',
                      )}
                    >
                      <span>
                        <span className="block text-sm font-medium text-foreground">{doc.name}</span>
                        <span className="block text-xs text-muted-foreground">{doc.role}</span>
                      </span>
                      {doctor === doc.id && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Back
                  </button>
                  <button
                    disabled={!doctor}
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-micro enabled:hover:-translate-y-0.5 disabled:opacity-40"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <p className="mb-4 text-sm font-medium text-foreground">Confirm your details</p>
                <dl className="space-y-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Date</dt>
                    <dd className="font-medium text-foreground">
                      {DATE_OPTIONS.find((d) => d.value === date)?.label}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Clinician</dt>
                    <dd className="text-right font-medium text-foreground">
                      {DOCTORS.find((d) => d.id === doctor)?.name}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Experience</dt>
                    <dd className="text-right font-medium text-foreground">3D Scan &amp; Exam</dd>
                  </div>
                </dl>
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Back
                  </button>
                  <button
                    onClick={confirm}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-200 ease-micro hover:-translate-y-0.5"
                  >
                    Confirm via WhatsApp <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function BookingDock() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('top');
      setVisible(!!hero && window.scrollY > hero.offsetHeight - 240);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={false}
        animate={{ y: visible ? 0 : 160, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:px-0 sm:pb-0"
      >
        <div className="glass-panel shadow-aura mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-3xl p-3 sm:flex-row sm:gap-4 sm:rounded-full sm:py-3">
          <div className="hidden flex-1 text-right sm:block">
            <p className="text-sm font-semibold text-foreground">Ready for anxiety-free care?</p>
          </div>
          <div className="w-full flex-1 border-t border-border/60 pt-3 text-center sm:border-l sm:border-t-0 sm:border-l sm:pl-4 sm:pt-0 sm:text-left">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">New Patient</p>
            <p className="text-xs leading-snug text-muted-foreground sm:text-sm">
              Comprehensive Experience — Includes 3D Scan &amp; Exam
            </p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="shadow-halo w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 ease-micro hover:-translate-y-0.5 sm:w-auto"
          >
            Book Instant Visit
          </button>
        </div>
      </motion.div>

      <BookingDialog open={open} setOpen={setOpen} />
    </>
  );
}