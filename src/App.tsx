import { useState, useCallback } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { WaterLevelTransition } from './components/WaterLevelTransition';
import { UtilityBar } from './components/UtilityBar';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { ServicesBento } from './components/ServicesBento';
import { Story } from './components/Story';
import { Process } from './components/Process';
import { OurWork } from './components/OurWork';
import { DriftBand } from './components/DriftBand';
import { Reviews } from './components/Reviews';
import { Standards } from './components/Standards';
import { PlumbingChecklist } from './components/PlumbingChecklist';
import { FAQ } from './components/FAQ';
import { ServiceArea } from './components/ServiceArea';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [heroReady, setHeroReady] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleTransitionComplete = useCallback(() => {
    setHeroReady(true);
  }, []);

  const handleSelectService = useCallback((service: string) => {
    setSelectedService(service);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#12303A] font-sans antialiased selection:bg-[#0F5C6E] selection:text-[#F6F1E7] relative overflow-x-hidden">
      {/* S11: Top Viewport Scroll Progress Line */}
      <ScrollProgress />

      {/* Load Transition: Water level fill & split */}
      <WaterLevelTransition onComplete={handleTransitionComplete} />

      {/* 1. Utility Bar (Desktop Only) */}
      <UtilityBar />

      {/* 2. Floating Nav with Mobile/Tablet Slide-in Drawer */}
      <FloatingNav heroReady={heroReady} />

      {/* Main Content Area */}
      <main className="overflow-x-hidden">
        {/* 3. Hero */}
        <Hero
          heroReady={heroReady}
          selectedService={selectedService}
          onServiceChange={handleSelectService}
        />

        {/* 4. Proof Bar (Overlaps Hero bottom edge by 40px) */}
        <ProofBar />

        {/* 5. Services (Bento Grid) */}
        <ServicesBento onSelectService={handleSelectService} />

        {/* 6. Story (Reversed Split Layout) */}
        <Story />

        {/* 7. Process (Sticky Stacked Cards) */}
        <Process />

        {/* 8. Our Work (Masonry Gallery) */}
        <OurWork />

        {/* S7. Drift Band (Outlined Text Between Gallery and Reviews) */}
        <DriftBand />

        {/* 9. Reviews */}
        <Reviews />

        {/* 10. Standards & Guarantees (New Section 1) */}
        <Standards />

        {/* 11. Emergency Action Checklist (New Section 2) */}
        <PlumbingChecklist />

        {/* 12. FAQ Accordion (New Section 3) */}
        <FAQ />

        {/* 13. Service Area */}
        <ServiceArea />

        {/* 14. Final CTA */}
        <FinalCTA
          selectedService={selectedService}
          onServiceChange={handleSelectService}
        />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Sticky Mobile Bar */}
      <StickyMobileBar />
    </div>
  );
}
