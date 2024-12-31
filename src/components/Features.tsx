import React from 'react';
import { LineChart, Cpu, BarChart2, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { fadeIn } from '../utils/animations';

const features = [
  {
    icon: LineChart,
    title: 'Choose a Signals Package',
    description: 'Get the signals package that matches your trading style, including ES/MES, S&P500, BTC/ETH.'
  },
  {
    icon: Cpu,
    title: 'Choose a Profit Target',
    description: 'Set your daily profit target and let our MicroQuant system target your goals.'
  },
  {
    icon: BarChart2,
    title: 'Receive Buy/Sell Signals',
    description: 'Access clear entry and exit signals with exact price targets for optimal trading execution.'
  },
  {
    icon: Shield,
    title: 'Performance Protection',
    description: 'Our advanced risk management system ensures your capital is always protected.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${fadeIn}`}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Compound Returns with the <span className="text-blue-400">QuantSignal™</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional-grade algorithms designed for retail traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
              delay={index * 100} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
}