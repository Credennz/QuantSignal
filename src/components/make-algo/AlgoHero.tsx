import React from 'react';
import { Code2 } from 'lucide-react';

export default function AlgoHero() {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Code2 className="h-5 w-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Custom Algorithm Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Custom Algorithms{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Tailored for Your Trading Strategy
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Work with experts to transform your trading ideas into reality. Get started with your custom algorithm today.
          </p>
        </div>
      </div>
    </div>
  );
}