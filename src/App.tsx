import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Indicators } from './components/Indicators';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PurchaseModal } from './components/PurchaseModal';
import { RefundPolicy } from './components/RefundPolicy';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { RiskDisclosure } from './components/RiskDisclosure';

export interface Indicator {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  accuracy: string;
  timeframes: string[];
  isLarge?: boolean;
}

type CurrentPage = 'home' | 'refund-policy' | 'privacy-policy' | 'terms-of-service' | 'risk-disclosure';

function App() {
  const [selectedIndicator, setSelectedIndicator] = useState<Indicator | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');

  const indicators: Indicator[] = [
    {
      id: '1',
      name: 'TrendMaster Pro',
      description: 'Advanced trend following indicator with AI-powered signals',
      price: 297,
      features: ['Real-time alerts', 'Multi-timeframe analysis', 'Backtesting results', '24/7 support'],
      accuracy: '94.7%',
      timeframes: ['1M', '5M', '15M', '1H', '4H', '1D']
    },
    {
      id: '2',
      name: 'ScalpBot Elite',
      description: 'High-frequency scalping indicator for quick profits',
      price: 197,
      features: ['Lightning fast signals', 'Low drawdown', 'Risk management', 'Mobile alerts'],
      accuracy: '89.3%',
      timeframes: ['1M', '5M', '15M']
    },
    {
      id: '3',
      name: 'SwingTrader Max',
      description: 'Perfect for swing trading with high probability setups',
      price: 247,
      features: ['Swing detection', 'Support/Resistance levels', 'Entry/Exit signals', 'Profit targets'],
      accuracy: '91.8%',
      timeframes: ['1H', '4H', '1D', '1W']
    },
    {
      id: '4',
      name: 'CryptoWave Master',
      description: 'Specialized for cryptocurrency market movements',
      price: 347,
      features: ['Crypto-optimized', 'Volume analysis', 'Market sentiment', 'DeFi integration'],
      accuracy: '87.2%',
      timeframes: ['5M', '15M', '1H', '4H', '1D']
    },
    {
      id: '5',
      name: 'Ultimate Trading Suite',
      description: 'Complete trading solution with all indicators and advanced features',
      price: 497,
      features: ['All indicators included', 'Advanced analytics', 'Portfolio management', 'Personal coaching', 'Lifetime updates', 'Priority support'],
      accuracy: '96.1%',
      timeframes: ['All timeframes supported'],
      isLarge: true
    }
  ];

  const handlePurchase = (indicator: Indicator) => {
    setSelectedIndicator(indicator);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndicator(null);
  };

  const handlePageChange = (page: CurrentPage) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Render different pages based on currentPage state
  if (currentPage === 'refund-policy') {
    return <RefundPolicy onBack={handleBackToHome} />;
  }

  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfService onBack={handleBackToHome} />;
  }

  if (currentPage === 'risk-disclosure') {
    return <RiskDisclosure onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <Hero />
      <VideoShowcase />
      <HowItWorks />
      <Indicators indicators={indicators} onPurchase={handlePurchase} />
      <FAQ />
      <Contact />
      <Footer onPageChange={handlePageChange} />
      
      {isModalOpen && selectedIndicator && (
        <PurchaseModal indicator={selectedIndicator} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;