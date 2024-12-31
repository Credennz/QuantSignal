import React, { createContext, useContext, useState } from 'react';
import { LineChart, TrendingUp, Activity, Waves, Target, Zap } from 'lucide-react';
import type { Indicator } from '../types/indicators';

const indicators: Indicator[] = [
  {
    id: 1,
    name: 'MicroTrend Indicator',
    description: 'Advanced trend detection using machine learning algorithms',
    accuracy: '94.5%',
    signals: '15-20 per day',
    icon: LineChart,
    chartImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Momentum Scanner',
    description: 'Real-time momentum analysis for quick market moves',
    accuracy: '92.3%',
    signals: '10-15 per day',
    icon: TrendingUp,
    chartImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Volatility Predictor',
    description: 'Predicts market volatility spikes with high accuracy',
    accuracy: '91.8%',
    signals: '8-12 per day',
    icon: Activity,
    chartImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'Wave Pattern Analyzer',
    description: 'Identifies Elliott Wave patterns and market cycles',
    accuracy: '89.7%',
    signals: '5-10 per day',
    icon: Waves,
    chartImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    name: 'Support/Resistance Finder',
    description: 'Automatically detects key price levels',
    accuracy: '93.1%',
    signals: '12-18 per day',
    icon: Target,
    chartImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    name: 'Flash Signal Generator',
    description: 'Ultra-fast signals for scalping strategies',
    accuracy: '90.5%',
    signals: '20-30 per day',
    icon: Zap,
    chartImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  }
];

interface IndicatorsContextType {
  indicators: Indicator[];
  selectedIndicator: Indicator | null;
  setSelectedIndicator: (indicator: Indicator) => void;
}

const IndicatorsContext = createContext<IndicatorsContextType | undefined>(undefined);

export function IndicatorsProvider({ children }: { children: React.ReactNode }) {
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);

  return (
    <IndicatorsContext.Provider value={{ indicators, selectedIndicator, setSelectedIndicator }}>
      {children}
    </IndicatorsContext.Provider>
  );
}

export function useIndicators() {
  const context = useContext(IndicatorsContext);
  if (context === undefined) {
    throw new Error('useIndicators must be used within an IndicatorsProvider');
  }
  return context;
}