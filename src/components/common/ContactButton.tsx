import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ContactButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors group z-40">
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Need Help?
      </span>
    </button>
  );
}