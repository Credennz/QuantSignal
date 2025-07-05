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
        window.open('https://www.instagram.com/quantsignal.in', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com/@stockse_ind?si=k8P4t6AONDA1nbNM', '_blank');
        break;
      case 'telegram':
        window.open('https://t.me/+SfIDPbYr-sI5ZjE1', '_blank');
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
              <svg width="30" height="30" viewBox="0 0 70 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_6_13)">
<path d="M51.751 12.8775C49.9759 8.4398 46.6703 4.7845 42.4328 2.57363L40.7607 1.70123C38.6186 0.583626 36.2383 0 33.8222 0H22.2195C20.0973 0 17.9993 0.450309 16.0641 1.32118L15.8787 1.40459C11.4453 3.39961 7.89039 6.94114 5.87866 11.367L5.0756 13.1337C4.36675 14.6931 4 16.3863 4 18.0993V31.4007C4 33.1137 4.36675 34.8069 5.0756 36.3663L5.67685 37.6891C7.80953 42.381 11.6711 46.0685 16.4564 47.9825L17.2119 48.2848C18.3931 48.7572 19.6536 49 20.9258 49H25V40H23.1421C20.49 40 17.9464 38.9464 16.0711 37.0711L15.9289 36.9289C14.0536 35.0536 13 32.51 13 29.8579V19.5078C13 17.2371 13.7728 15.034 15.1913 13.2609L15.9976 12.253C17.8953 9.8809 20.7684 8.5 23.8062 8.5H32.6938C35.7316 8.5 38.6047 9.8809 40.5024 12.253L41.6526 13.6907C42.8584 15.198 43.6022 17.022 43.7943 18.9426L44 21H53V17.9258C53 16.6536 52.7572 15.3931 52.2848 14.2119L51.751 12.8775Z" fill="#0037C2"></path>
</g>
<path d="M53 24H36.2088C34.7613 24 33.339 24.3777 32.0823 25.0958L32.0165 25.1334C31.0173 25.7044 30.1537 26.4849 29.4848 27.4213V27.4213C28.5191 28.7732 28 30.3931 28 32.0546V49H35V31.5H53V24Z" fill="#26BD04"></path>
<g filter="url(#filter1_ii_6_13)">
<path d="M53 24H36.2088C34.7613 24 33.339 24.3777 32.0823 25.0958L32.0165 25.1334C31.0173 25.7044 30.1537 26.4849 29.4848 27.4213V27.4213C28.5191 28.7732 28 30.3931 28 32.0546V49H35V32.5C35 31.9477 35.4477 31.5 36 31.5H53V24Z" fill="#26BD04"></path>
</g>
<g filter="url(#filter2_dii_6_13)">
<rect x="36" y="37.6569" width="8" height="17" rx="4" transform="rotate(-45 36 37.6569)" fill="#E11717"></rect>
</g>
<defs>
<filter id="filter0_dii_6_13" x="-1" y="0" width="58" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dy="4"></feOffset>
<feGaussianBlur stdDeviation="2"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="out"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_13"></feBlend>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_13" result="shape"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="-5" dy="5"></feOffset>
<feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.0633333 0 0 0 0 0.0580555 0 0 0 0 0.0580555 0 0 0 0.58 0"></feColorMatrix>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_13"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="-5" dy="5"></feOffset>
<feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.241674 0 0 0 0 0.147408 0 0 0 0 0.775833 0 0 0 0.69 0"></feColorMatrix>
<feBlend mode="normal" in2="effect2_innerShadow_6_13" result="effect3_innerShadow_6_13"></feBlend>
</filter>
<filter id="filter1_ii_6_13" x="28" y="24" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="4" dy="4"></feOffset>
<feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.16 0 0 0 0 0.0909331 0 0 0 0 0.0909331 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_6_13"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="3" dy="4"></feOffset>
<feGaussianBlur stdDeviation="1"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.105833 0 0 0 0 0.0102306 0 0 0 0 0.0102306 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="effect1_innerShadow_6_13" result="effect2_innerShadow_6_13"></feBlend>
</filter>
<filter id="filter2_dii_6_13" x="24.6569" y="20.6569" width="44.364" height="44.364" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="2" dy="2"></feOffset>
<feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="out"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_13"></feBlend>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_13" result="shape"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="-2" dy="2"></feOffset>
<feGaussianBlur stdDeviation="1"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.1625 0 0 0 0 0.065 0 0 0 0 0.065 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_6_13"></feBlend>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dx="2" dy="-2"></feOffset>
<feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0.169167 0 0 0 0 0.0724597 0 0 0 0 0.0724597 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="effect2_innerShadow_6_13" result="effect3_innerShadow_6_13"></feBlend>
</filter>
</defs>
</svg>
              <span className="text-xl font-bold text-white">QuantSignal</span>
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
                <a href="https://youtube.com/@stockse_ind?si=k8P4t6AONDA1nbNM" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@stockse_ind?si=k8P4t6AONDA1nbNM" target='_blank' className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Video Tutorials
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
                <span className="text-gray-400 text-sm">support@quantsignal.in</span>
              </div>             
              <div className="flex items-center space-x-3">
                <Send className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm"><a href='https://t.me/+SfIDPbYr-sI5ZjE1' target='_blank'>QuantSignal</a></span>
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
              © 2025 Credennz Edusoft Private Limited. All rights reserved. Trading involves risk and is not suitable for all investors.
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