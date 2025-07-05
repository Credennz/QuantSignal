import React from 'react';
import { X, Star, CheckCircle, CreditCard, ExternalLink } from 'lucide-react';
import { Indicator } from '../App';

interface PurchaseModalProps {
  indicator: Indicator;
  onClose: () => void;
}

export function PurchaseModal({ indicator, onClose }: PurchaseModalProps) {
  const handlePayment = () => {
    // In a real application, this would integrate with a payment gateway like Stripe
    alert('Redirecting to payment gateway...');
  };

  const handleVideoTutorial = () => {
    // Open video tutorial in new tab
    window.open('https://www.youtube.com/watch?v=example', '_blank');
  };

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const priceInINR = Math.round(indicator.price * 83);

  // Define supported instruments based on indicator type
  const getSupportedInstruments = (indicatorName: string) => {
    switch (indicatorName) {
      case 'TrendMaster Pro':
        return ['NIFTY', 'BANKNIFTY', 'Stocks', 'Forex', 'Commodities'];
      case 'ScalpBot Elite':
        return ['NIFTY', 'BANKNIFTY', 'Forex Majors', 'Crypto'];
      case 'SwingTrader Max':
        return ['Stocks', 'ETFs', 'NIFTY', 'Commodities'];
      case 'CryptoWave Master':
        return ['Bitcoin', 'Ethereum', 'Altcoins', 'DeFi Tokens'];
      case 'Ultimate Trading Suite':
        return ['All Markets', 'All Instruments', 'Global Coverage'];
      default:
        return ['NIFTY', 'BANKNIFTY', 'Stocks', 'Forex'];
    }
  };

  const supportedInstruments = getSupportedInstruments(indicator.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-green-50 via-green-100 to-yellow-50 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50 border-b border-green-200/50 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${
              indicator.isLarge 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black'
                : 'bg-green-500 text-white'
            }`}>
              {indicator.isLarge ? 'PREMIUM' : 'PROFESSIONAL'}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{indicator.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {indicator.description}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-gray-700">{indicator.accuracy} Accuracy</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-gray-700">Lifetime Updates</span>
              </div>
            </div>
          </div>

          {/* Video Tutorial Button - Only for non-premium indicators */}
          {!indicator.isLarge && (
            <div className="mb-8">
              <button
                onClick={handleVideoTutorial}
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ backgroundColor: '#22C55E' }}
              >
                <ExternalLink className="h-5 w-5 transform rotate-12" />
                <span>Watch Tutorial - How to Use {indicator.name}</span>
              </button>
            </div>
          )}

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {indicator.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Timeframes */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Supported Timeframes:</h3>
            <div className="flex flex-wrap gap-2">
              {indicator.timeframes.map((timeframe, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-500/20 text-green-700 border border-green-500/30 rounded-full text-sm font-medium"
                >
                  {timeframe}
                </span>
              ))}
            </div>
          </div>

          {/* Supported Instruments */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Supported Instruments:</h3>
            <div className="flex flex-wrap gap-2">
              {supportedInstruments.map((instrument, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-700 border border-blue-500/30 rounded-full text-sm font-medium"
                >
                  {instrument}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing and Purchase */}
          <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-800 mb-2">
                ₹{priceInINR.toLocaleString('en-IN')}
              </div>
              <div className="text-gray-600">
                {indicator.isLarge ? 'Lifetime Access' : 'One-time Payment'}
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-4 px-6 font-bold rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 bg-green-500 hover:bg-green-600 text-white"
              style={{ backgroundColor: '#22C55E' }}
            >
              <CreditCard className="h-5 w-5" />
              <span>Purchase Now - Secure Payment</span>
            </button>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Secure payment powered by industry-standard encryption</p>
              <p className="mt-1">
                💳 Credit Card • UPI • Net Banking • Wallets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}