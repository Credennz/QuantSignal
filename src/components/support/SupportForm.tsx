import React from 'react';
import { X } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import GradientButton from '../common/GradientButton';

interface SupportFormProps {
  indicator: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportForm({ indicator, isOpen, onClose }: SupportFormProps) {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: async (values) => {
      try {
        // Here you would integrate with your email service
        const emailData = {
          to: 'enquiry@quantsignal.in',
          subject: `Support Request: ${indicator.name}`,
          body: `
            Name: ${values.name}
            Email: ${values.email}
            Phone: ${values.phone}
            Indicator: ${indicator.name}
            Message: ${values.message}
          `
        };
        
        console.log('Sending support email:', emailData);
        // After successful email send:
        alert('Support request sent! We will get back to you shortly.');
        onClose();
      } catch (error) {
        alert('Failed to send support request. Please try again.');
      }
    }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-gray-900 rounded-xl max-w-md w-full mx-auto p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>

          <h3 className="text-2xl font-bold text-white mb-2">Contact Support</h3>
          <p className="text-gray-400 mb-6">
            Have questions about {indicator.name}? Our team is here to help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <GradientButton type="submit">
              Send Message
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  );
}