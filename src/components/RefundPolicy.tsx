import React from 'react';
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react';

interface RefundPolicyProps {
  onBack: () => void;
}

export function RefundPolicy({ onBack }: RefundPolicyProps) {
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
              <h1 className="text-3xl font-bold text-gray-800">Refund Policy</h1>
            </div>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-xl p-8 shadow-lg space-y-8">
          
          {/* 30-Day Money Back Guarantee */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">30-Day Money Back Guarantee</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We stand behind the quality of our trading indicators and offer a comprehensive 30-day money-back guarantee. 
              If you are not completely satisfied with your purchase for any reason, you can request a full refund within 
              30 days of your purchase date.
            </p>
          </section>

          {/* Eligibility Criteria */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Refund request must be made within 30 days of purchase</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Original purchase receipt or order confirmation required</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Indicator files must not have been shared or distributed to third parties</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Customer must provide feedback on reasons for refund request</p>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Step 1: Contact Support</h3>
                <p className="text-gray-700 text-sm">
                  Email our support team at support@tradepro.com with your order details and reason for refund request.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Step 2: Review Process</h3>
                <p className="text-gray-700 text-sm">
                  Our team will review your request within 2-3 business days and may ask for additional information.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Step 3: Refund Processing</h3>
                <p className="text-gray-700 text-sm">
                  Once approved, refunds are processed within 5-7 business days to your original payment method.
                </p>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Processing Time</h2>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600 font-semibold">Credit Cards:</span>
                  <span className="text-gray-700">3-5 business days</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600 font-semibold">UPI/Net Banking:</span>
                  <span className="text-gray-700">1-3 business days</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-600 font-semibold">Digital Wallets:</span>
                  <span className="text-gray-700">1-2 business days</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Exceptions</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-gray-700 mb-3">
                Refunds may not be available in the following circumstances:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Requests made after 30 days from purchase date</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Evidence of indicator file sharing or unauthorized distribution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Chargebacks or disputes initiated without contacting support first</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-yellow-600">•</span>
                  <span className="text-gray-700">Purchases made with promotional codes or during special offers (case-by-case basis)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                For any questions about our refund policy or to initiate a refund request, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> support@tradepro.com
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Response Time:</span> Within 24 hours
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Business Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}