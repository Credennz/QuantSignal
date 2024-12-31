import React, { useEffect, useState } from 'react';
import { LineChart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from './common/GradientButton';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-violet-800 via-blue-900 to-gray-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
        <div className="max-w-xl animate-[fadeInUp_1s_ease-out]">
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <LineChart className="h-5 w-5 text-violet-400" />
            <span className="text-violet-400 font-medium">AI Based Trading Indicators</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Daily profit with {' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-500 text-transparent bg-clip-text">
              MicroQuant
            </span>{' '}
            Technology
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Here an youtube link will be given
          </p>

          <div className="flex items-center space-x-6">
          <GradientButton>
            <Link to="/indicators" className="text-white-900 hover:text-white-600">View indicators</Link>
            </GradientButton>
                        
            
            
            <button className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                <Play className="h-4 w-4 fill-current" />
              </div>
              <span>Watch 2 min video</span>
            </button>
          </div>
        </div>

        {/* Demo Card */}
        <div className="hidden lg:block w-[400px] animate-[fadeInRight_1s_ease-out]">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div className="relative p-6 bg-gray-900/90 backdrop-blur-xl rounded-xl border border-violet-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">Live Trading Demo</h3>
              
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=800&q=80"
                  alt="Trading Demo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="text-green-400">89%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Avg. Daily Signals</span>
                  <span className="text-blue-400">15-20</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
  );
}