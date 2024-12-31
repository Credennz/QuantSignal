import React, { useState } from 'react';
import { LineChart, TrendingUp, Activity } from 'lucide-react';
import { fadeInUp, fadeIn } from '../utils/animations';
import GradientButton from './common/GradientButton';
import PurchaseModal from './purchase/PurchaseModal';

interface Indicator {
  id: number;
  name: string;
  description: string;
  accuracy: string;
  signals: string;
  icon: typeof LineChart;
  videoUrl: string;
}

const indicators: Indicator[] = [
  {
    id: 1,
    name: 'MicroTrend Indicator',
    description: 'Advanced trend detection using machine learning algorithms',
    accuracy: '94.5%',
    signals: '15-20 per day',
    icon: LineChart,
    videoUrl: 'https://player.vimeo.com/video/517031489?autoplay=1&loop=1&muted=1'
  },
  {
    id: 2,
    name: 'Momentum Scanner',
    description: 'Real-time momentum analysis for quick market moves',
    accuracy: '92.3%',
    signals: '10-15 per day',
    icon: TrendingUp,
    videoUrl: 'https://player.vimeo.com/video/517031489?autoplay=1&loop=1&muted=1'
  },
  {
    id: 3,
    name: 'Volatility Predictor',
    description: 'Predicts market volatility spikes with high accuracy',
    accuracy: '91.8%',
    signals: '8-12 per day',
    icon: Activity,
    videoUrl: 'https://player.vimeo.com/video/517031489?autoplay=1&loop=1&muted=1'
  }
];

export default function Indicators() {
  const [selectedIndicator, setSelectedIndicator] = useState(indicators[0]);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 ${fadeIn}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional-Grade Trading Indicators
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powered by advanced algorithms and real-time market data
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {indicators.map((indicator, index) => (
              <button
                key={indicator.id}
                onClick={() => setSelectedIndicator(indicator)}
                className={`w-full p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 text-left group
                  ${fadeInUp}
                  ${selectedIndicator.id === indicator.id 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-gray-800 bg-gray-800/30 hover:bg-gray-800/50'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <indicator.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{indicator.name}</h3>
                <p className="text-gray-400 text-sm">{indicator.description}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 p-8 rounded-xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedIndicator.name}</h3>
              <p className="text-gray-400 mb-6">{selectedIndicator.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <p className="text-sm text-gray-400 mb-1">Accuracy Rate</p>
                  <p className="text-2xl font-bold text-green-400">{selectedIndicator.accuracy}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-800/50">
                  <p className="text-sm text-gray-400 mb-1">Daily Signals</p>
                  <p className="text-2xl font-bold text-purple-400">{selectedIndicator.signals}</p>
                </div>
              </div>

              <GradientButton onClick={() => setIsPurchaseModalOpen(true)}>
                Add to TradingView
              </GradientButton>
            </div>

            <div className="aspect-video rounded-lg bg-gray-800/50 overflow-hidden">
              <iframe
                src={selectedIndicator.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`${selectedIndicator.name} Demo`}
              />
            </div>
          </div>
        </div>
      </div>

      <PurchaseModal 
        indicator={selectedIndicator}
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
      />
    </section>
  );
}