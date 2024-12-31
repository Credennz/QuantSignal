import React from 'react';
import { LineChart, Target, Users, Shield } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To democratize algorithmic trading by providing professional-grade tools to retail traders.'
  },
  {
    icon: Users,
    title: 'Our Team',
    description: 'A dedicated group of traders, developers, and analysts working to revolutionize trading technology.'
  },
  {
    icon: Shield,
    title: 'Our Commitment',
    description: 'Delivering reliable, accurate, and profitable trading solutions with exceptional support.'
  }
];

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-violet-900 via-gray-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">QuantSignal</span>
          </h1>
          <p className="text-xl text-gray-300">
            Empowering traders with advanced algorithmic solutions since 2020
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`${fadeInUp} p-6 rounded-xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <value.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800/30 rounded-xl p-8 border border-gray-800 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Founded by a team of professional traders and technologists, QuantSignal emerged from the need to bridge the gap between institutional and retail trading capabilities.
            </p>
            <p>
              Our journey began with a simple mission: to democratize algorithmic trading by making professional-grade tools accessible to individual traders. Today, we serve thousands of traders worldwide, helping them achieve consistent profitability through our advanced trading solutions.
            </p>
            <p>
              We continue to innovate and expand our offerings, staying at the forefront of trading technology while maintaining our commitment to reliability, accuracy, and customer success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}