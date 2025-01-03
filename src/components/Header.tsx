import React, { useState, useContext } from 'react';
import { LineChart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SupportContext } from '../App';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSupport } = useContext(SupportContext);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between" >
          <Link to="/" className="flex items-center space-x-1">
            <img src="https://i.ibb.co/Vpp05BQ/image.png" alt="QuantSignal Logo" className="h-8 w-40 text-blue-600" />
          </Link>
   
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/indicators" className="text-gray-600 hover:text-blue-600 transition-colors">Indicators</Link>
            <Link to="/make-algo" className="text-gray-600 hover:text-blue-600 transition-colors">Make Algo</Link>
            <button 
              onClick={openSupport}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Support
            </button>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <button 
            className="md:hidden"
            style={{
              color: 'rgb(24 63 218)'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/indicators" className="text-gray-600 hover:text-blue-600">Indicators</Link>
              <Link to="/make-algo" className="text-gray-600 hover:text-blue-600">Make Algo</Link>
              <button 
                onClick={() => {
                  openSupport();
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
