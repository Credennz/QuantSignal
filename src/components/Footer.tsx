import React from 'react';
import { TrendingUp, Mail, MessageSquare, Shield, Award, Instagram, Youtube, Send } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: 'refund-policy' | 'privacy-policy' | 'terms-of-service' | 'risk-disclosure') => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'instagram':
        window.open('https://instagram.com/tradepro', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com/@tradepro', '_blank');
        break;
      case 'telegram':
        window.open('https://t.me/8895244936', '_blank');
        break;
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">TradePro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional trading indicators trusted by thousands of successful traders worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-400">Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-400">Trusted</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                >
                  <Instagram className="h-5 w-5 text-gray-400 group-hover:text-pink-400" />
                </button>
                <button
                  onClick={() => handleSocialClick('youtube')}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                >
                  <Youtube className="h-5 w-5 text-gray-400 group-hover:text-red-400" />
                </button>
                <button
                  onClick={() => handleSocialClick('telegram')}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
                >
                  <Send className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('indicators')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Indicators
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Video Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('refund-policy')}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">support@tradepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-4 w-4 text-purple-400" />
                <span className="text-gray-400 text-sm">Live Chat Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Send className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">@8895244936</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                Response time: Within 24 hours
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TradePro. All rights reserved. Trading involves risk and is not suitable for all investors.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button
                onClick={() => onPageChange('privacy-policy')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onPageChange('terms-of-service')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onPageChange('risk-disclosure')}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Risk Disclosure
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}