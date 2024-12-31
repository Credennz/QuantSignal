import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { slideInRight } from '../../utils/animations';
import GradientButton from '../common/GradientButton';
import PurchaseForm from '../purchase/PurchaseForm';
import SupportForm from '../support/SupportForm';

interface IndicatorModalProps {
  indicator: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function IndicatorModal({ indicator, isOpen, onClose }: IndicatorModalProps) {
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSupportForm, setShowSupportForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className={`relative min-h-screen md:flex md:items-center md:justify-center p-4 ${slideInRight}`}>
        <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full mx-auto">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-6 md:p-8">
            <div className="flex items-center space-x-4 mb-6">
              <indicator.icon className="h-10 w-10 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">{indicator.name}</h3>
                <p className="text-gray-400">{indicator.tagline}</p>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <iframe
                src={indicator.videoUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={`${indicator.name} Demo`}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Description</h4>
                <p className="text-gray-400 mb-6">{indicator.description}</p>

                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-2 text-gray-400">
                  {indicator.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Pricing</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">$199</span>
                    <span className="text-gray-400 ml-2">/ month</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    Includes lifetime updates and premium support
                  </p>
                  <GradientButton onClick={() => setShowPurchaseForm(true)}>
                    Add to TradingView
                  </GradientButton>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
                  <p className="text-gray-400 mb-4">
                    Need help or have questions? Our team is here to assist you.
                  </p>
                  <button 
                    onClick={() => setShowSupportForm(true)}
                    className="w-full px-4 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-colors"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPurchaseForm && (
        <PurchaseForm 
          indicator={indicator} 
          isOpen={showPurchaseForm}
          onClose={() => setShowPurchaseForm(false)}
        />
      )}

      {showSupportForm && (
        <SupportForm
          indicator={indicator}
          isOpen={showSupportForm}
          onClose={() => setShowSupportForm(false)}
        />
      )}
    </div>
  );
}