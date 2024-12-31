import React from 'react';
import { FileText, Code, TestTube2, Upload } from 'lucide-react';
import { fadeInUp } from '../../utils/animations';

const steps = [
  {
    icon: FileText,
    title: 'Share Your Strategy',
    description: 'Tell us about your trading goals and requirements'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our experts will craft an algorithm tailored to your needs'
  },
  {
    icon: TestTube2,
    title: 'Testing',
    description: 'We ensure your algo is ready for live trading through rigorous testing'
  },
  {
    icon: Upload,
    title: 'Deployment',
    description: 'We help you deploy the algorithm to your preferred platform'
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className={`${fadeInUp} text-center`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-[60%] w-full h-0.5 bg-purple-100" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}