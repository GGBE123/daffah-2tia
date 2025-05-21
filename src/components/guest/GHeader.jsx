// GHeader.jsx
import React, { useState } from 'react';

const GHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-2 text-2xl font-bold text-orange-600 cursor-pointer">Sedap.</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-orange-600 font-medium">Beranda</button>
          <button onClick={() => scrollTo('products')} className="text-gray-700 hover:text-orange-600 font-medium">Menu</button>
          <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-orange-600 font-medium">Tentang Kami</button>
          <button onClick={() => scrollTo('testimonials')} className="text-gray-700 hover:text-orange-600 font-medium">Testimoni</button>
          <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-orange-600 font-medium">Kontak</button>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="px-4 py-2 text-gray-700 hover:text-orange-600 font-medium">Masuk</a>
          <a href="/register" className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 font-medium">Daftar</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            <button onClick={() => scrollTo('hero')} className="text-gray-700 hover:text-orange-600 py-2 font-medium">Beranda</button>
            <button onClick={() => scrollTo('products')} className="text-gray-700 hover:text-orange-600 py-2 font-medium">Menu</button>
            <button onClick={() => scrollTo('about')} className="text-gray-700 hover:text-orange-600 py-2 font-medium">Tentang Kami</button>
            <button onClick={() => scrollTo('testimonial')} className="text-gray-700 hover:text-orange-600 py-2 font-medium">Testimoni</button>
            <button onClick={() => scrollTo('contact')} className="text-gray-700 hover:text-orange-600 py-2 font-medium">Kontak</button>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <a href="/login" className="py-2 text-gray-700 hover:text-orange-600 font-medium">Masuk</a>
              <a href="/register" className="py-2 px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 font-medium text-center">Daftar</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default GHeader;
