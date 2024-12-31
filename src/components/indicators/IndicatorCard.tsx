import React from 'react';
import { fadeInUp, hoverScale, hoverGlow } from '../../utils/animations';

interface IndicatorCardProps {
  indicator: any;
  onClick: () => void;
  delay?: number;
}

export default function IndicatorCard({ indicator, onClick, delay = 0 }: IndicatorCardProps) {
  const Icon = indicator.icon;

  return (
    <button
      onClick={onClick}
      className={`w-full p-6 text-left rounded-xl border border-gray-800 
        bg-gray-800/30 backdrop-blur-sm group cursor-pointer
        ${fadeInUp} ${hoverScale} ${hoverGlow}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold text-white mb-2">{indicator.name}</h3>
      <p className="text-gray-400">{indicator.tagline}</p>
      
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">{indicator.category}</span>
        <span className="text-blue-400 text-sm group-hover:translate-x-2 transition-transform duration-300">
          Learn More →
        </span>
      </div>
    </button>
  );
}