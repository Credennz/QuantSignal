import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? Need support? We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="p-3 rounded-lg shadow-lg"
                  style={{ 
                    backgroundColor: '#22C55E',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
                  <p className="text-gray-600">support@quantsignal.in</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Get detailed help with setup, technical issues, or general questions.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="p-3 rounded-lg shadow-lg"
                  style={{ 
                    backgroundColor: '#22C55E',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              
              </div>
              <p className="text-gray-700 text-sm">
                Chat with our support team for immediate assistance.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div 
                  className="p-3 rounded-lg shadow-lg"
                  style={{ 
                    backgroundColor: '#22C55E',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)'
                  }}
                >
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                We typically respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 border border-green-300/50 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                style={{ backgroundColor: '#22C55E' }}
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}