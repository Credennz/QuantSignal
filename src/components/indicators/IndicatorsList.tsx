import React from 'react';
import { useIndicators } from '../../context/IndicatorsContext';
import { fadeInUp } from '../../utils/animations';
import IndicatorCard from './IndicatorCard';

export default function IndicatorsList() {
  const { indicators } = useIndicators();

  return (
    <div className="space-y-4">
      {indicators.map((indicator, index) => (
        <IndicatorCard
          key={indicator.id}
          indicator={indicator}
          delay={index * 100}
        />
      ))}
    </div>
  );
}