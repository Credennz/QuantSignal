import React from 'react';
import { X } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import GradientButton from '../common/GradientButton';

interface PurchaseFormProps {
  indicator: { name: string; price: number }; // Ensure `indicator` contains `name` and `price`
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseForm({ indicator, isOpen, onClose }: PurchaseFormProps) {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      tradingviewUsername: '',
      paymentMethod: 'card'
    },
    onSubmit: async (values) => {
      try {
        // Calculate the amount in paisa (1 INR = 100 paisa)
        const amountInPaisa = indicator.price * 100; // Convert the price in INR to paisa

        // Razorpay payment options
        const options = {
          key: 'rzp_test_YE1E8VYciSc79K', // Your Razorpay Key ID
          amount: amountInPaisa, // Amount in paisa
          currency: 'INR', // Currency
          name: 'Your Company Name',
          description: `Purchase ${indicator.name}`,
          image: 'https://your-logo-url.com/logo.png', // Optional logo
          handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            onClose();
          },
          prefill: {
            name: values.name,
            email: values.email,
            contact: values.phone,
          },
          theme: {
            color: '#3399cc',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          alert('Payment failed. Error: ' + response.error.description);
          console.log(response.error);
        });
        rzp.open();
      } catch (error) {
        alert('Payment failed. Please try again.');
        console.log(error);
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

          <h3 className="text-2xl font-bold text-white mb-2">Purchase {indicator.name}</h3>
          <p className="text-gray-400 mb-6">Complete your purchase to add this indicator to TradingView</p>

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
              <label className="block text-sm font-medium text-gray-300 mb-1">TradingView Username</label>
              <input
                type="text"
                name="tradingviewUsername"
                value={values.tradingviewUsername}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Payment Method</label>
              <select
                name="paymentMethod"
                value={values.paymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            <GradientButton type="submit">
              Complete Purchase
            </GradientButton>

            <p className="text-sm text-gray-400 mt-4">
              By completing this purchase, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
