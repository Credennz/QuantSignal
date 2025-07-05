import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
              <Shield className="h-8 w-8 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
            </div>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-8 shadow-lg space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              QuantSignal ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website and use our 
              trading indicator services. Please read this privacy policy carefully.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">Name and contact information (email address, phone number)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">Payment information (processed securely through third-party providers)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">Trading platform information (for indicator installation)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Usage Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Website usage data and analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Device information (IP address, browser type, operating system)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-600">•</span>
                    <span className="text-gray-700">Cookies and tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Service Delivery</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Process and fulfill orders</li>
                  <li className="text-gray-700">• Provide customer support</li>
                  <li className="text-gray-700">• Send product updates and notifications</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Communication</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Respond to inquiries</li>
                  <li className="text-gray-700">• Send marketing communications (with consent)</li>
                  <li className="text-gray-700">• Provide technical support</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Improvement</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Analyze website usage</li>
                  <li className="text-gray-700">• Improve our services</li>
                  <li className="text-gray-700">• Develop new features</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Legal Compliance</h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-700">• Comply with legal obligations</li>
                  <li className="text-gray-700">• Prevent fraud and abuse</li>
                  <li className="text-gray-700">• Protect our rights and interests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-700">SSL encryption for data transmission</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-700">Secure payment processing through certified providers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-700">Regular security audits and updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-700">Limited access to personal information on a need-to-know basis</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">With service providers who assist in our operations (payment processors, hosting providers)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">When required by law or to protect our legal rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">In connection with a business transfer or merger</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Access & Correction</h3>
                <p className="text-gray-700 text-sm">Request access to or correction of your personal information</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Deletion</h3>
                <p className="text-gray-700 text-sm">Request deletion of your personal information (subject to legal requirements)</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Opt-out</h3>
                <p className="text-gray-700 text-sm">Unsubscribe from marketing communications at any time</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Portability</h3>
                <p className="text-gray-700 text-sm">Request a copy of your data in a portable format</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> support@quantsignal.in
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Support:</span> support@quantsignal.in
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