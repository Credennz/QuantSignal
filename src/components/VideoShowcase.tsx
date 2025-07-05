import React from 'react';
import { Play, TrendingUp, TrendingDown } from 'lucide-react';

export function VideoShowcase() {
  return (
    <section id="video-showcase" className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            See Our Indicators in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our professional traders use these indicators to generate consistent profits in real market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center max-w-6xl mx-auto">
          {/* Left Trading Card - NIFTY - Smaller Size */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="animate-float">
              <div className="bg-green-400 rounded-xl p-3 shadow-xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 w-48">
                <div className="bg-gray-900 rounded-md p-3 mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">NIFTY 50</span>
                    <TrendingUp className="h-3 w-3 text-green-400" />
                  </div>
                  <div className="text-green-400 text-lg font-bold">19,847.50</div>
                  <div className="text-green-400 text-xs">+247.30 (+1.26%)</div>
                  <div className="mt-2 h-10 bg-gray-800 rounded flex items-end space-x-1 p-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-green-400 rounded-sm animate-pulse"
                        style={{
                          height: `${Math.random() * 25 + 10}px`,
                          width: '4px',
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-800 font-semibold text-xs">Live Analysis</div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Video Section - Larger Size with Less Rounded Corners */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl group cursor-pointer bg-gray-900">
                {/* YouTube Thumbnail Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="h-10 w-10 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Trading Indicators Demo
                    </h3>
                    <p className="text-gray-300 text-base">
                      Learn our proven strategies • 15:42
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Trading Card - BANKNIFTY - Smaller Size */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="animate-float-delayed">
              <div className="bg-green-400 rounded-xl p-3 shadow-xl transform rotate-[5deg] hover:rotate-0 transition-transform duration-500 w-48">
                <div className="bg-gray-900 rounded-md p-3 mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">BANKNIFTY</span>
                    <div className="flex items-center space-x-1">
                      <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">SELL</span>
                      <span className="bg-blue-500 text-white text-xs px-1 py-0.5 rounded">BUY</span>
                    </div>
                  </div>
                  <div className="text-red-400 text-lg font-bold">44,235.80</div>
                  <div className="text-red-400 text-xs">-156.20 (-0.35%)</div>
                  <div className="mt-2 h-10 bg-gray-800 rounded flex items-end space-x-1 p-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-red-400 rounded-sm animate-pulse"
                        style={{
                          height: `${Math.random() * 25 + 10}px`,
                          width: '4px',
                          animationDelay: `${i * 0.3}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-gray-800 font-semibold text-xs">Real-time Signals</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">15 min</div>
            <div className="text-gray-700 font-medium">Complete Tutorial</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">Live</div>
            <div className="text-gray-700 font-medium">Real Market Data</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">Step-by-Step</div>
            <div className="text-gray-700 font-medium">Easy to Follow</div>
          </div>
        </div>
      </div>
    </section>
  );
}