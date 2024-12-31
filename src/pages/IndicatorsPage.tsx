import React from 'react';
import HeroSection from '../components/indicators/HeroSection';
import IndicatorGrid from '../components/indicators/IndicatorGrid';
import ContactButton from '../components/common/ContactButton';
import IndicatorModal from '../components/indicators/IndicatorModal';
import ContactBanner from '../components/ContactBanner';
import { useIndicatorModal } from '../hooks/useIndicatorModal';

export default function IndicatorsPage() {
  const { selectedIndicator, openModal, closeModal } = useIndicatorModal();

  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <IndicatorGrid onIndicatorClick={openModal} />
      <ContactBanner />
      <ContactButton />
      {selectedIndicator && (
        <IndicatorModal 
          indicator={selectedIndicator} 
          isOpen={!!selectedIndicator} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}