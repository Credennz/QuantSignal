import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import { fadeInUp } from '../utils/animations';

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-violet-900 via-gray-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for any inquiries or assistance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Mail, title: 'Email', info: 'hello@quantsignal.in' },
            { icon: Phone, title: 'Phone', info: '+91-7008013957, +91-7978013108' },
            { icon: MapPin, title: 'Location', info: 'Bhubaneswar, India' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`${fadeInUp} text-center p-6 rounded-xl border border-gray-800 bg-gray-800/30 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <item.icon className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.info}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}