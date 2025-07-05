import React from 'react';
import { ArrowLeft, AlertTriangle, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';

interface RiskDisclosureProps {
  onBack: () => void;
}

export function RiskDisclosure({ onBack }: RiskDisclosureProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-yellow-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-800">Risk Disclosure Statement</h1>
            </div>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-bold text-red-800">IMPORTANT NOTICE</h2>
          </div>
          <p className="text-red-700 font-medium">
            Trading in financial markets involves substantial risk of loss and is not suitable for all investors. 
            You should carefully consider your objectives, financial situation, needs, and level of experience 
            before making any investment decisions.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-8 shadow-lg space-y-8">
          
          {/* General Risk Warning */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <TrendingDown className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">General Risk Warning</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Trading indicators, signals, and analysis tools provided by QuantSignal are for educational and 
                informational purposes only. They do not guarantee profitable trades or eliminate the risk of loss.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Past performance is not indicative of future results</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Market conditions can change rapidly and unpredictably</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">No trading system or methodology is infallible</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">You may lose some or all of your invested capital</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Specific Market Risks */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Specific Market Risks</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Equity Markets</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Stock prices can be highly volatile</li>
                  <li className="text-gray-700">• Company-specific risks affect individual stocks</li>
                  <li className="text-gray-700">• Market sentiment can override technical analysis</li>
                  <li className="text-gray-700">• Liquidity risks in smaller cap stocks</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Forex Markets</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• High leverage amplifies both gains and losses</li>
                  <li className="text-gray-700">• Currency fluctuations can be extreme</li>
                  <li className="text-gray-700">• Economic and political events impact rates</li>
                  <li className="text-gray-700">• 24-hour market with gap risks</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Cryptocurrency</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Extreme price volatility</li>
                  <li className="text-gray-700">• Regulatory uncertainty</li>
                  <li className="text-gray-700">• Technology and security risks</li>
                  <li className="text-gray-700">• Limited historical data</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Derivatives</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Complex instruments with high risk</li>
                  <li className="text-gray-700">• Potential for unlimited losses</li>
                  <li className="text-gray-700">• Time decay affects option values</li>
                  <li className="text-gray-700">• Margin requirements can change</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Analysis Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Technical Analysis Limitations</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                While technical analysis can be a valuable tool, it has inherent limitations:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Historical patterns may not repeat in the future</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Fundamental factors can override technical signals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">False signals and whipsaws are common</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Market manipulation can distort technical patterns</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Indicators may lag price movements</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Risk Management */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Risk Management Guidelines</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                To help manage trading risks, consider implementing these practices:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Position Sizing</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700">• Never risk more than you can afford to lose</li>
                    <li className="text-gray-700">• Use appropriate position sizes (1-2% per trade)</li>
                    <li className="text-gray-700">• Diversify across different assets and strategies</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Stop Losses</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700">• Always use stop-loss orders</li>
                    <li className="text-gray-700">• Set realistic profit targets</li>
                    <li className="text-gray-700">• Maintain favorable risk-reward ratios</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700">• Continuously educate yourself</li>
                    <li className="text-gray-700">• Practice with demo accounts first</li>
                    <li className="text-gray-700">• Keep detailed trading records</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Emotional Control</h3>
                  <ul className="space-y-1 text-sm">
                    <li className="text-gray-700">• Stick to your trading plan</li>
                    <li className="text-gray-700">• Avoid emotional decision-making</li>
                    <li className="text-gray-700">• Take breaks when stressed</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Regulatory Considerations */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Considerations</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Trading regulations vary by jurisdiction and may affect your trading activities:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Ensure your broker is properly regulated</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Understand tax implications of trading profits/losses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Be aware of pattern day trading rules (if applicable)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Comply with all local financial regulations</span>
                </li>
              </ul>
            </div>
          </section>

          {/* No Guarantee Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Performance Guarantee</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                QuantSignal makes no representations or warranties regarding the performance of our indicators:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Accuracy rates are based on historical backtesting and may not reflect future performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Market conditions can change, affecting indicator effectiveness</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Individual results may vary based on execution, timing, and market conditions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">We do not guarantee any specific level of performance or profit</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Acknowledgment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Acknowledgment</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 font-medium">
                By purchasing and using QuantSignal's indicators and services, you acknowledge that you have read, 
                understood, and accepted all the risks outlined in this disclosure statement. You confirm that 
                you are aware of the potential for financial loss and that you are trading with capital you can 
                afford to lose.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions and Support</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about these risks or need clarification, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> risk@quantsignal.in
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Support:</span> support@quantsignal.in
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Response Time:</span> Within 24 hours
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}