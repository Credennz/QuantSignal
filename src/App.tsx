import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Indicators from './components/Indicators';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactBanner from './components/ContactBanner';
import Footer from './components/Footer';
import { IndicatorsProvider } from './context/IndicatorsContext';
import IndicatorsPage from './pages/IndicatorsPage';
import MakeAlgoPage from './pages/MakeAlgoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SupportModal from './components/support/SupportModal';

export const SupportContext = React.createContext({
  openSupport: () => {},
  closeSupport: () => {}
});

export default function App() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const openSupport = () => setIsSupportOpen(true);
  const closeSupport = () => setIsSupportOpen(false);

  return (
    <Router>
      <SupportContext.Provider value={{ openSupport, closeSupport }}>
        <IndicatorsProvider>
          <div className="min-h-screen bg-gradient-to-b from-violet-900 via-gray-900 to-gray-900">
            <Header />
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <Indicators />
                  <Features />
                  <Testimonials />
                  <ContactBanner />
                </main>
              } />
              <Route path="/indicators" element={<IndicatorsPage />} />
              <Route path="/make-algo" element={<MakeAlgoPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
            <SupportModal 
              isOpen={isSupportOpen} 
              onClose={closeSupport} 
            />
          </div>
        </IndicatorsProvider>
      </SupportContext.Provider>
    </Router>
  );
}