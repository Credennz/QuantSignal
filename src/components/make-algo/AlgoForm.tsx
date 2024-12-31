import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import GradientButton from '../common/GradientButton';
import emailjs from 'emailjs-com';

// Define broker options
const brokers = [
  'Python',
  'Pine Script',
  
];

export default function AlgoForm() {
  // Form hook to handle form values and submission
  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      broker: '',
      remarks: ''
    },
    onSubmit: async (values) => {
      console.log('Form submitted:', values);
      // Send form data using EmailJS
      try {
        const formData = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          broker: values.broker,
          remarks: values.remarks,
        };

        // Optional: Append file to the email
        if (file) {
          formData.file = file.name; // You can send file name or handle it differently.
        }

        // Send email via EmailJS service
        const result = await emailjs.send(
          'service_dwxndyd',      // Replace with your EmailJS service ID
          'template_zxswbkk',     // Replace with your EmailJS template ID
          formData,               // Data to be sent in the email
          '3UtBxf_d8mK7aqcXU'          // Replace with your EmailJS user ID
        );
        console.log('Email sent successfully:', result.text);
        alert('Your form has been submitted successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending your form data.');
      }
    }
  });

  const [file, setFile] = useState<File | null>(null);

  // File change handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 3 * 1024 * 1024) {
        alert('File size must be less than 3MB');
        return;
      }
      if (!['application/pdf', 'application/msword'].includes(selectedFile.type)) {
        alert('Only PDF and DOC files are allowed');
        return;
      }
      setFile(selectedFile);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Submit Your Requirements
            </h2>
            <p className="text-gray-400">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Broker</label>
              <select
                name="broker"
                value={values.broker}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              >
                <option value="">Select Language</option>
                {brokers.map((broker) => (
                  <option key={broker} value={broker}>{broker}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Strategy Document</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-400">
                Supported formats: PDF or DOC. Max size: 3 MB
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Additional Remarks</label>
              <textarea
                name="remarks"
                value={values.remarks}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <GradientButton type="submit">
                Submit Requirements
              </GradientButton>
              <p className="mt-4 text-sm text-gray-400">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
