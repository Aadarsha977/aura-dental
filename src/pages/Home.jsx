import React from 'react';
import Nav from '@/components/aura/Nav';
import Hero from '@/components/aura/Hero';
import TrustStrip from '@/components/aura/TrustStrip';
import Philosophy from '@/components/aura/Philosophy';
import CoreServices from '@/components/aura/CoreServices';
import Treatments from '@/components/aura/Treatments';
import Approach from '@/components/aura/Approach';
import Journey from '@/components/aura/Journey';
import PrecisionShowcase from '@/components/aura/PrecisionShowcase';
import TechnologyShowcase from '@/components/aura/TechnologyShowcase';
import TransformationSlider from '@/components/aura/TransformationSlider';
import Team from '@/components/aura/Team';
import ReviewsPinned from '@/components/aura/ReviewsPinned';
import Faq from '@/components/aura/Faq';
import Visit from '@/components/aura/Visit';
import EmergencyBanner from '@/components/aura/EmergencyBanner';
import Footer from '@/components/aura/Footer';
import BookingDock from '@/components/aura/BookingDock';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Philosophy />
        <CoreServices />
        <Treatments />
        <Approach />
        <Journey />
        <PrecisionShowcase />
        <TechnologyShowcase />
        <TransformationSlider />
        <Team />
        <ReviewsPinned />
        <Faq />
        <Visit />
      </main>
      <Footer />
      <BookingDock />
    </div>
  );
}