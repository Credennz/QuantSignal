import React, { useState } from 'react';
import { useIndicators } from '../../context/IndicatorsContext';
import { fadeIn, slideInRight } from '../../utils/animations';
import GradientButton from '../common/GradientButton';
import PurchaseModal from '../purchase/PurchaseModal';

export default function IndicatorDetails() {
  const { selectedIndicator } = useIndicators();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  if (!selectedIndicator) {
    return (
      <div className="h-full flex items-center justify-center p-8 rounded-xl border border-gray-800 bg-gray-800/30">
        <p className="text-gray-400">Select an indicator to view details</p>
      </div>
    );
  }

  return (
    <>
      <div className={`p-8 rounded-xl border border-gray-800 bg-gray-800/30 ${slideInRight}`}>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {selectedIndicator.name}
          </h2>
          <p className="text-gray-400 mb-6">{selectedIndicator.description}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-gray-800/50">
              <p className="text-sm text-gray-400 mb-1">Accuracy Rate</p>
              <p className="text-2xl font-bold text-green-400">
                {selectedIndicator.accuracy}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/50">
              <p className="text-sm text-gray-400 mb-1">Daily Signals</p>
              <p className="text-2xl font-bold text-purple-400">
                {selectedIndicator.signals}
              </p>
            </div>
          </div>

          <GradientButton onClick={() => setIsPurchaseModalOpen(true)}>
            Add to TradingView
          </GradientButton>
        </div>

        <div className="aspect-video rounded-lg bg-gray-800/50 overflow-hidden">
          <img 
            src={selectedIndicator.chartImage}
            alt={`${selectedIndicator.name} Chart`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <PurchaseModal 
        indicator={selectedIndicator}
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
      />
    </>
  );
}