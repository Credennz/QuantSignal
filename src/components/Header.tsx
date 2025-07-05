import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToVideoSection = () => {
    const element = document.getElementById('video-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <nav className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-8 py-3 shadow-lg">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img 
                  src="/QuantSignal.svg" 
                  alt="QuantSignal" 
                  className="h-8 w-8 object-contain"
                />
                <span className="text-lg font-bold text-gray-800">QuantSignal</span>
              </div>
              
              <button
                onClick={scrollToVideoSection}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('indicators')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Indicators
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection('indicators')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <TrendingUp className="h-4 w-4" />
                <span>Avail Now</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <nav className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-full px-4 py-3 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img 
                  src="/QuantSignal.svg" 
                  alt="QuantSignal Logo" 
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-bold text-gray-800">QuantSignal</span>
              </div>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-xl overflow-hidden">
              <div className="py-2">
                <button
                  onClick={scrollToVideoSection}
                  className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  How it works
                </button>
                <button
                  onClick={() => scrollToSection('indicators')}
                  className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Indicators
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Support
                </button>
                <div className="px-4 py-3">
                  <button
                    onClick={() => scrollToSection('indicators')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Avail Now</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}