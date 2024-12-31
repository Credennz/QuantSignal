import React from 'react';
import { Code } from 'lucide-react';
import ContactModal from './ContactModal';
import { useModal } from '../hooks/useModal';

export default function ContactBanner() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 opacity-90" />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            animation: 'slide 20s linear infinite'
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                Make Your Own Algo
              </h2>
              <p className="text-purple-200">
                Custom solutions tailored to your trading strategy
              </p>
            </div>
            <button
              onClick={openModal}
              className="px-8 py-3 bg-white text-purple-900 rounded-lg font-semibold 
                hover:bg-purple-100 transform hover:scale-105 transition-all duration-300
                shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}