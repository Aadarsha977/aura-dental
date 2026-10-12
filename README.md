# Aura Dental & Implant Suite

A modern, responsive dental clinic web application built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Interactive Experience**: Hero showcase, before/after transformation slider, and 3D precision tour.
- **Service & Treatment Discovery**: Comprehensive catalog of general, cosmetic, and surgical treatments.
- **Appointment Scheduling**: Direct WhatsApp and phone contact channels for frictionless patient booking.
- **Patient Portal UI**: Clean, standalone authentication views for patient login and registration.
- **Fast & Responsive**: Fully optimized for mobile, tablet, and desktop viewing.

## Getting Started

### Prerequisites

- Node.js 18+ (Node 20 or 22 recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

Build static assets for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is pre-configured for instant zero-configuration deployment to:

- **Vercel**: SPA rewrites configured in `vercel.json`
- **Cloudflare Pages**: SPA routing configured in `public/_redirects`
- **GitHub Pages**: Automated workflow in `.github/workflows/deploy.yml`

Output directory: `dist/`
