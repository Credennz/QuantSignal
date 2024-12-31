import React from 'react';
import { useForm } from '../../hooks/useForm';
import GradientButton from '../common/GradientButton';
import emailjs from 'emailjs-com';  // Import EmailJS

export default function ContactForm() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    onSubmit: async (values) => {
      console.log('Contact form submitted:', values);

      // Send form data using EmailJS
      try {
        const formData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        };

        // Send email via EmailJS service
        const result = await emailjs.send(
          'service_dwxndyd',      // Replace with your EmailJS service ID
          'template_zxswbkk',     // Replace with your EmailJS template ID
          formData,               // Data to be sent in the email
          '3UtBxf_d8mK7aqcXU'          // Replace with your EmailJS user ID
        );

        console.log('Email sent successfully:', result.text);
        alert('Your message has been sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('There was an error sending your message.');
      }
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/30 p-8 rounded-xl border border-gray-800 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-6">
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
        <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={values.subject}
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
          rows={6}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <GradientButton type="submit">
        Send Message
      </GradientButton>
    </form>
  );
}
