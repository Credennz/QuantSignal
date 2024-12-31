import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { fadeIn } from '../../utils/animations';
import PurchaseForm from './PurchaseForm';

interface PurchaseModalProps {
  indicator: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ indicator, isOpen, onClose }: PurchaseModalProps) {
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

  const features = [
    'Real-time signals and alerts',
    'TradingView integration',
    'Email and mobile notifications',
    'Technical support',
    '30-day money-back guarantee'
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="relative min-h-screen px-4 flex items-center justify-center">
        <div 
          className={`relative bg-gray-900 rounded-xl max-w-2xl w-full mx-auto ${fadeIn}`}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{indicator.name}</h3>
            <p className="text-gray-400 mb-6">{indicator.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    $199
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">Includes lifetime updates and premium support</p>
                </div>

                <div className="space-y-3 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <PurchaseForm indicator={indicator} onClose={onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}