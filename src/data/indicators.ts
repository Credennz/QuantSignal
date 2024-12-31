import { LineChart, TrendingUp, Activity, Waves, Target, Zap } from 'lucide-react';

export const indicators = [
  {
    id: 1,
    name: 'MicroTrend Indicator',
    tagline: 'Identify market trends with precision',
    category: 'Trend Following',
    description: 'Advanced trend detection using machine learning algorithms to identify market direction with high accuracy.',
    icon: LineChart,
    price: 199,
    pricingDetails: 'Includes lifetime updates and premium support',
    features: [
      'Real-time trend detection',
      'Multiple timeframe analysis',
      'Custom alert system',
      'Advanced filtering options'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Momentum Scanner',
    tagline: 'Catch explosive market moves early',
    category: 'Momentum',
    description: 'Real-time momentum analysis for quick market moves, perfect for day traders and swing traders.',
    icon: TrendingUp,
    price: 149,
    pricingDetails: 'Monthly subscription with premium features',
    features: [
      'Volume analysis',
      'Price action signals',
      'Momentum strength meter',
      'Early entry detection'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Volatility Predictor',
    tagline: 'Stay ahead of market volatility',
    category: 'Volatility',
    description: 'Predicts market volatility spikes with high accuracy using advanced statistical models.',
    icon: Activity,
    price: 179,
    pricingDetails: 'Includes volatility alerts and reporting',
    features: [
      'Volatility forecasting',
      'Risk measurement tools',
      'Market regime detection',
      'Custom alert system'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'Wave Pattern Analyzer',
    tagline: 'Master Elliott Wave patterns',
    category: 'Pattern Recognition',
    description: 'Automatically identifies Elliott Wave patterns and market cycles for precise entry and exit points.',
    icon: Waves,
    price: 229,
    pricingDetails: 'Complete Elliott Wave suite with training',
    features: [
      'Automatic wave counting',
      'Pattern recognition',
      'Fibonacci integration',
      'Wave probability analysis'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    name: 'Support/Resistance Finder',
    tagline: 'Never miss key price levels',
    category: 'Price Action',
    description: 'Automatically detects and plots key support and resistance levels using machine learning.',
    icon: Target,
    price: 159,
    pricingDetails: 'Includes daily level updates and alerts',
    features: [
      'Dynamic level detection',
      'Historical validation',
      'Strength analysis',
      'Multi-timeframe support'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    name: 'Flash Signal Generator',
    tagline: 'Lightning-fast trading signals',
    category: 'Signal Generation',
    description: 'Ultra-fast signals for scalping strategies with high win rate and minimal drawdown.',
    icon: Zap,
    price: 189,
    pricingDetails: 'Real-time alerts and mobile notifications',
    features: [
      'Sub-second analysis',
      'Multi-market scanning',
      'Risk management rules',
      'Performance tracking'
    ],
    demoImage: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80'
  }
];