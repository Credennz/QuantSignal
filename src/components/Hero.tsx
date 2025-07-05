import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Box } from 'lucide-react';

export function Hero() {
  const scrollToIndicators = () => {
    const element = document.getElementById('indicators');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-yellow-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        {/* Small badge */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg px-6 py-3 mb-8 shadow-xl">
            <Box className="h-4 w-4" style={{ color: '#1F2937' }} />
            <span className="text-sm font-semibold" style={{ color: '#1F2937' }}>Indicators with Questsignal</span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-green-600">The </span>
            <span className="text-gray-800">Only Indicator </span>
            <span className="text-green-400">Platform</span>
            <br />
            <span className="text-green-400">Is All You Need</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Transform your trading with professional-grade indicators that deliver consistent 
            results in any market condition.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
          <button
            onClick={scrollToIndicators}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Get Indicators</span>
          </button>
        </div>
      </div>
    </section>
  );
}