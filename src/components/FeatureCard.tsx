import React from 'react';
import { LucideIcon } from 'lucide-react';
import { fadeInUp, hoverScale, hoverGlow } from '../utils/animations';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className={`p-6 rounded-xl border border-gray-800 bg-gray-800/30 
        ${fadeInUp} ${hoverScale} ${hoverGlow}
        hover:bg-gray-800/50 transition-all duration-300 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}