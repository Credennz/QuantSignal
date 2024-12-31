import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function GradientButton({ children, onClick }: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium 
                hover:from-purple-600 hover:to-blue-700 transition-all duration-200 
                shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)]"
    >
      {children}
    </button>
  );
}