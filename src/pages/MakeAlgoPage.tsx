import React from 'react';
import AlgoHero from '../components/make-algo/AlgoHero';
import ProcessSteps from '../components/make-algo/ProcessSteps';
import AlgoForm from '../components/make-algo/AlgoForm';
import ContactBanner from '../components/ContactBanner';

export default function MakeAlgoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-gray-900">
      <AlgoHero />
      <ProcessSteps />
      <AlgoForm />
      <ContactBanner />
    </div>
  );
}