import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { scaleIn, hoverScale } from '../utils/animations';

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  isPositive: boolean;
  delay?: number;
}

export default function StatsCard({ title, value, trend, isPositive, delay = 0 }: StatsCardProps) {
  return (
    <div 
      className={`bg-gray-800/50 rounded-lg p-4 border border-gray-700 
        ${scaleIn} ${hoverScale} transition-all duration-300`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white">{value}</span>
        <div className={`flex items-center space-x-1 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          <span>{trend}</span>
        </div>
      </div>
    </div>
  );
}