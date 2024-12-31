import React, { useEffect, useState } from 'react';
import { LineChart } from 'lucide-react';
import GradientButton from '../common/GradientButton';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIndicators = () => {
    const indicatorsSection = document.getElementById('indicators');
    indicatorsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[60vh] overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated Chart Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.2}px)` 
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <LineChart className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Professional Trading Tools</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Trading Indicators to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Elevate Your Strategy
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Cutting-edge tools powered by advanced algorithms to help you make informed decisions in the financial markets.
          </p>

          <GradientButton onClick={scrollToIndicators}>
            Explore Indicators
          </GradientButton>
        </div>
      </div>
    </div>
  );
}