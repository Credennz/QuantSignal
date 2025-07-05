import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, Users, Gavel } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
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
              <FileText className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-800">Terms of Service</h1>
            </div>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-8 shadow-lg space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using TradePro's website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">TradePro provides:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Trading indicators and technical analysis tools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Educational content and tutorials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Customer support and technical assistance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600">•</span>
                  <span className="text-gray-700">Software updates and improvements</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">3. User Responsibilities</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Account Security</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">Maintain confidentiality of account credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">Notify us immediately of any unauthorized access</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-600">•</span>
                    <span className="text-gray-700">Use strong passwords and enable two-factor authentication when available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Proper Usage</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Use indicators for personal trading purposes only</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Do not share, distribute, or resell indicator files</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Comply with all applicable laws and regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">4. Prohibited Activities</h2>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">Users are strictly prohibited from:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Reverse engineering, decompiling, or modifying indicator code</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Creating derivative works based on our indicators</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Using automated systems to access our services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Attempting to gain unauthorized access to our systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600">•</span>
                  <span className="text-gray-700">Sharing login credentials with third parties</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Intellectual Property Rights</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                All content, including but not limited to trading indicators, algorithms, documentation, and educational 
                materials, are the exclusive property of TradePro and are protected by copyright and other intellectual 
                property laws.
              </p>
              <p className="text-gray-700">
                Users are granted a limited, non-exclusive, non-transferable license to use the indicators for personal 
                trading purposes only.
              </p>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Disclaimers and Risk Warnings</h2>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Trading Risks</h3>
                  <p className="text-gray-700 text-sm">
                    Trading in financial markets involves substantial risk of loss. Past performance does not guarantee 
                    future results. You should carefully consider your financial situation before trading.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">No Financial Advice</h3>
                  <p className="text-gray-700 text-sm">
                    Our indicators and content are for educational purposes only and do not constitute financial advice. 
                    Always consult with qualified financial advisors before making investment decisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Service Availability</h3>
                  <p className="text-gray-700 text-sm">
                    We strive to maintain service availability but do not guarantee uninterrupted access. We reserve 
                    the right to modify or discontinue services with reasonable notice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Gavel className="h-6 w-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-800">7. Limitation of Liability</h2>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                TradePro shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                resulting from the use or inability to use our services, including but not limited to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Trading losses or missed opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Technical failures or service interruptions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Data loss or corruption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Third-party platform compatibility issues</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, 
                for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the service will cease immediately, but these terms will remain 
                in effect regarding any prior use of the service.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts 
                located in Mumbai, India.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> legal@tradepro.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Support:</span> support@tradepro.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Response Time:</span> Within 48 hours
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}