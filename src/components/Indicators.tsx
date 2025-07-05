import React from 'react';
import { ArrowRight, Star, Clock, BarChart3 } from 'lucide-react';
import { Indicator } from '../App';

interface IndicatorsProps {
  indicators: Indicator[];
  onPurchase: (indicator: Indicator) => void;
}

export function Indicators({ indicators, onPurchase }: IndicatorsProps) {
  const regularIndicators = indicators.filter(indicator => !indicator.isLarge);
  const premiumIndicator = indicators.find(indicator => indicator.isLarge);

  return (
    <section id="indicators" className="py-20 relative overflow-hidden">
      {/* Black and Green Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-gray-900 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Trading Indicators
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of battle-tested indicators, each designed for specific trading strategies and market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regular indicators - 2x2 grid on desktop, single column on mobile */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularIndicators.map((indicator) => (
                <div
                  key={indicator.id}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-white via-green-50 to-green-100 border border-green-200/50 hover:border-green-300/70 transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                        <span className="text-xs sm:text-sm font-medium text-green-600">Professional</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                        <span className="text-xs sm:text-sm text-gray-700">{indicator.accuracy}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{indicator.name}</h3>
                    <p className="text-gray-600 mb-4 text-xs sm:text-sm">{indicator.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        <span>{indicator.timeframes.join(', ')}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {indicator.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800">₹{Math.round(indicator.price * 83).toLocaleString('en-IN')}</span>
                        <span className="text-gray-500 ml-1 text-sm">one-time</span>
                      </div>
                      <button
                        onClick={() => onPurchase(indicator)}
                        className="group/btn px-3 sm:px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center text-sm"
                        style={{ backgroundColor: '#22C55E' }}
                      >
                        <span>Purchase</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium indicator - large card */}
          {premiumIndicator && (
            <div className="lg:col-span-1">
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-100"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        PREMIUM
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{premiumIndicator.accuracy}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{premiumIndicator.name}</h3>
                  <p className="text-gray-300 mb-6 text-sm sm:text-base">{premiumIndicator.description}</p>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{premiumIndicator.timeframes.join(', ')}</span>
                    </div>
                    
                    <div className="space-y-3">
                      {premiumIndicator.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <Star className="h-4 w-4 text-yellow-400 mr-2 fill-current" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="text-center mb-6">
                      <span className="text-2xl sm:text-3xl font-bold text-white">₹{Math.round(premiumIndicator.price * 83).toLocaleString('en-IN')}</span>
                      <span className="text-gray-400 ml-2 text-sm">lifetime access</span>
                    </div>
                    <button
                      onClick={() => onPurchase(premiumIndicator)}
                      className="w-full group/btn px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl text-sm sm:text-base"
                    >
                      <span>Get Premium Access</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-100 blur-xl -z-10"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}