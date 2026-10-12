const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import {
  Activity,
  Baby,
  ClipboardList,
  Clock,
  Feather,
  FileText,
  HeartPulse,
  Layers,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waves,
} from 'lucide-react';

export const CONTACT = {
  name: 'Aura Dental & Implant Suite',
  phoneDisplay: '(555) 019-2834',
  phoneHref: 'tel:+15550192834',
  whatsappNumber: '15550192834',
  emergencyPhoneDisplay: '(555) 019-9911',
  emergencyPhoneHref: 'tel:+15550199911',
  addressLine1: '120 Marina Boulevard, Suite 300',
  addressLine2: 'San Francisco, CA 94123',
};

export const MAPS_HREF =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('120 Marina Boulevard Suite 300 San Francisco CA 94123');

export const HOURS = [
  { days: 'Monday – Friday', time: '8:00 – 18:00' },
  { days: 'Saturday', time: '9:00 – 14:00' },
  { days: 'Sunday', time: 'Closed' },
];

export const whatsappHref = (
  message = 'Hello Aura, I would like to book a dental visit.',
) => `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const isOpenNow = (now = new Date()) => {
  const minutes = now.getHours() * 60 + now.getMinutes();
  const day = now.getDay();
  if (day === 0) return false;
  if (day === 6) return minutes >= 9 * 60 && minutes < 14 * 60;
  return minutes >= 8 * 60 && minutes < 18 * 60;
};

export const IMAGES = {
  architecture:
    'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/a6fc60b3f_generated_image.png',
  lounge:
    'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/46255c1e2_generated_image.png',
  instrument:
    'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/949c6fa1d_generated_image.png',
  clinician:
    'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/78947bbeb_generated_image.png',
};

export const PROMISES = [
  { title: 'First visit', note: 'A full hour, unhurried' },
  { title: 'Same day', note: 'Emergency slots held daily' },
  { title: 'Ages 2+', note: 'Welcome from the first tooth' },
  { title: 'In writing', note: 'Costs agreed before we start' },
];

export const TREATMENTS = [
  {
    icon: ClipboardList,
    title: 'Exams & digital diagnosis',
    body:
      'A complete look at teeth, gums and bite, with intraoral scans and low-dose imaging you can see on screen. You leave knowing exactly where things stand.',
    meta: '60 minutes · new patients welcome',
  },
  {
    icon: Sparkles,
    title: 'Hygiene & prevention',
    body:
      'Gentle scaling and polishing, fluoride and sealants — the unglamorous work that keeps small things small.',
    meta: '45 minutes · every six months',
  },
  {
    icon: Layers,
    title: 'Restorative dentistry',
    body:
      'Tooth-coloured fillings, crowns and bridges, shaped to sit quietly inside your natural smile.',
    meta: 'One or two visits',
  },
  {
    icon: Activity,
    title: 'Root canal therapy',
    body:
      'Modern endodontics with proper anaesthesia and magnification. Most patients tell us it felt like having a filling.',
    meta: 'Usually one visit',
  },
  {
    icon: Baby,
    title: "Children's dentistry",
    body:
      'First appointments that feel like a friendly hello. Habit-building, sealants and gentle guidance from age two.',
    meta: 'Ages 2 and up',
  },
  {
    icon: Waves,
    title: 'Gum & periodontal care',
    body:
      'Deep cleaning, monitoring and maintenance for the tissue that holds everything else in place.',
    meta: 'Ongoing care plans',
  },
  {
    icon: Clock,
    title: 'Same-day relief',
    body:
      'Chipped, swollen or aching? Call before 11:00 and we will almost always find you a slot that day.',
    meta: 'Emergency line',
  },
];

export const APPROACH = [
  {
    icon: ScanLine,
    title: 'Digital diagnosis',
    body:
      'Intraoral scanning replaces putty trays and gagging. You watch your own teeth on the screen while we explain what we see.',
  },
  {
    icon: HeartPulse,
    title: 'Comfort-first anaesthesia',
    body:
      'Numbing that is gradual, complete and quiet. We wait until you are genuinely numb before we begin.',
  },
  {
    icon: FileText,
    title: 'A plan you can take home',
    body:
      'Options, timelines and costs in writing before anything starts, so nothing arrives as a surprise on the day.',
  },
  {
    icon: ShieldCheck,
    title: 'Traceable sterilisation',
    body:
      'Instruments are sealed, batch-logged and opened in front of you. Single-use wherever single-use is better.',
  },
  {
    icon: Feather,
    title: 'Appointments that do not rush',
    body:
      'Longer time in the chair, shorter waits in reception, warm blankets and headphones if you would like them.',
  },
];

export const JOURNEY = [
  {
    step: '01',
    title: 'Arrival & conversation',
    body:
      'We begin with how you feel about your teeth, not a clipboard. Nothing is decided on a first visit.',
  },
  {
    step: '02',
    title: 'Digital diagnosis',
    body:
      'Scans and images that show you what we see, explained in plain language rather than dentistry jargon.',
  },
  {
    step: '03',
    title: 'A plan in writing',
    body:
      'Options, timelines and costs you can take home. Treatment begins only when you are comfortable with it.',
  },
  {
    step: '04',
    title: 'Treatment & aftercare',
    body:
      'Unhurried appointments, follow-up check-ins and a maintenance rhythm that protects the work for years.',
  },
];

export const TEAM = [
  {
    name: 'Dr. Julian Vance, DDS, FAGD',
    role: 'Chief Cosmetic & Reconstructive Surgeon',
    bio: 'Fellow of the Academy of General Dentistry with 16 years specializing in minimally invasive aesthetic restorations.',
    image: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/65774998a_generated_image.png',
    education: [
      'DDS, University of California San Francisco',
      'Fellowship, Academy of General Dentistry (FAGD)',
      'Aesthetic continuum, Las Vegas Institute',
    ],
    certifications: [
      'American Academy of Cosmetic Dentistry',
      'Fellow, Academy of General Dentistry',
      'ADA member in good standing',
    ],
  },
  {
    name: 'Dr. Maya Lin, DMD, MS',
    role: 'Orthodontics & Facial Orthopedics Specialist',
    bio: 'Harvard School of Dental Medicine alumna dedicated to airway-friendly clear aligner therapies.',
    image: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/2703c4de9_generated_image.png',
    education: [
      'DMD, Harvard School of Dental Medicine',
      'MS in Oral Biology, UCLA',
      'Orthodontic residency, University of Washington',
    ],
    certifications: [
      'Diplomate, American Board of Orthodontics',
      'Invisalign Diamond Provider',
      'American Association of Orthodontists',
    ],
  },
];

export const VOICES = [
  {
    quote:
      'I had put off seeing a dentist for nine years. They showed me the scan, explained the plan twice, and my root canal was honestly painless.',
    name: 'Priya M.',
    meta: 'Patient for two years',
  },
  {
    quote:
      'Both of my children ask when their next check-up is. That says more than any review I could write.',
    name: 'Daniel R.',
    meta: 'Parent of two',
  },
  {
    quote:
      'Written costs before treatment, a hygienist who remembers our names, and a waiting room that does not feel like a hospital.',
    name: 'Aisha K.',
    meta: 'Local resident',
  },
];

export const TECH = {
  backdrop:
    'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/ae440fdb5_generated_image.png',
  cards: [
    {
      icon: ScanLine,
      title: 'CBCT 3D Ultra-Low Dose Imaging',
      short:
        'Comprehensive nerve and bone visualization with 80% less radiation than legacy X-rays.',
      benefits: [
        '3D nerve mapping before any surgical procedure',
        'Bone density and implant site evaluation',
        'Sinus, joint and root anatomy in a single scan',
      ],
      safety: [
        { label: 'Radiation reduction', value: '80% lower than legacy X-rays' },
        { label: 'Scan time', value: 'Under 9 seconds' },
        { label: 'Shielding', value: 'Lead apron + thyroid collar standard' },
      ],
    },
    {
      icon: Waves,
      title: 'Gentle Laser Periodontal Therapy',
      short:
        'Pinpoint gum treatments without scalpels, sutures, or bleeding.',
      benefits: [
        'No cutting, no stitches, minimal bleeding',
        'Faster soft-tissue healing and recovery',
        'Reduced post-operative sensitivity',
      ],
      safety: [
        { label: 'Invasive tools', value: 'No scalpels or sutures' },
        { label: 'Bleeding', value: 'Minimal to none' },
        { label: 'Anaesthesia', value: 'Often topical only' },
      ],
    },
    {
      icon: HeartPulse,
      title: 'Computer-Assisted Local Anaesthesia',
      short:
        'Pressure-regulated numbing so gentle you won’t even feel the pinch.',
      benefits: [
        'Computer-controlled flow rate from the first drop',
        'Comfortable delivery even for anxious patients',
        'Numbing that is complete before treatment begins',
      ],
      safety: [
        { label: 'Delivery', value: 'Pressure-regulated computer control' },
        { label: 'Sensation', value: 'Virtually painless' },
        { label: 'Control', value: 'Patient can pause at any time' },
      ],
    },
  ],
};

export const TRANSFORMATIONS = [
  {
    tab: 'Porcelain Veneers (Full Arch)',
    patient: 'Elena M., Age 34',
    concern: 'Enamel discoloration & mild crowding',
    solution: '6 Minimal-Prep Ceramic Veneers',
    timeframe: 'Completed in 2 appointments',
    before: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/8bdb5332c_generated_image.png',
    after: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/1ed21abcc_generated_image.png',
    beforeLabel: 'Before Treatment',
    afterLabel: 'After Treatment',
  },
  {
    tab: 'Invisalign + Whitening',
    patient: 'Marcus T., Age 28',
    concern: 'Crowded lower arch & staining',
    solution: 'Invisalign aligners + in-chair whitening',
    timeframe: 'Completed in 9 months',
    before: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/98bb845d4_generated_image.png',
    after: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/df7846505_generated_image.png',
    beforeLabel: 'Before Treatment',
    afterLabel: 'After Treatment',
  },
  {
    tab: 'Single Implant Restoration',
    patient: 'Sophia L., Age 41',
    concern: 'Missing lateral incisor',
    solution: 'Titanium implant + ceramic crown',
    timeframe: 'Completed in 4 months',
    before: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/1963e0c05_generated_image.png',
    after: 'https://media.base44.com/images/public/6aca014128f76a12771ec9c5/0b83fab35_generated_image.png',
    beforeLabel: 'Before Treatment',
    afterLabel: 'After Treatment',
  },
];

export const FAQS = [
  {
    q: 'I have severe dental anxiety. How can you help me feel safe?',
    a: 'We offer dedicated anxiety consultations, oral conscious sedation, nitrous oxide, and noise-canceling headphones. We pause anytime you raise your hand.',
  },
  {
    q: 'How much do treatments cost, and do you accept insurance?',
    a: 'We provide 100% upfront pricing with zero surprise bills. We work with all major PPO insurance plans and offer 0% APR financing terms.',
  },
  {
    q: 'Are digital dental scans really gag-free?',
    a: 'Yes. Our handheld intraoral scanner uses gentle light sensors rather than cold, goopy impression trays.',
  },
  {
    q: 'What happens during my very first appointment?',
    a: 'A relaxed 45-minute comprehensive visit: a 3D scan, gentle exam, high-def photos, and an unhurried consultation over tea or water.',
  },
];