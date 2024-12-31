import React from 'react';
import { indicators } from '../../data/indicators';
import IndicatorCard from './IndicatorCard';
import { fadeIn } from '../../utils/animations';

interface IndicatorGridProps {
  onIndicatorClick: (indicator: any) => void;
}

export default function IndicatorGrid({ onIndicatorClick }: IndicatorGridProps) {
  return (
    <section id="indicators" className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${fadeIn}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional-Grade Trading Indicators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose from our suite of advanced trading indicators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((indicator, index) => (
            <IndicatorCard
              key={indicator.id}
              indicator={indicator}
              onClick={() => onIndicatorClick(indicator)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}