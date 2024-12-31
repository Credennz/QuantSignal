import { useState } from 'react';

export function useIndicatorModal() {
  const [selectedIndicator, setSelectedIndicator] = useState<any>(null);

  const openModal = (indicator: any) => {
    setSelectedIndicator(indicator);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndicator(null);
    document.body.style.overflow = 'unset';
  };

  return {
    selectedIndicator,
    openModal,
    closeModal
  };
}