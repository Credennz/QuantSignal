import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import SupportForm from './SupportForm';
import { fadeIn } from '../../utils/animations';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  // Prevent body scroll when modal is open
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
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="relative min-h-screen px-4 flex items-center justify-center">
        <div 
          className={`relative bg-gray-900 rounded-xl max-w-md w-full mx-auto p-6 ${fadeIn}`}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
          
          <p className="text-gray-400 mb-6">
            Need help? Contact us at{' '}
            <a 
              href="mailto:help@quantsignal.in" 
              className="text-blue-400 hover:text-blue-300"
            >
              help@quantsignal.in
            </a>
          </p>

          <SupportForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}