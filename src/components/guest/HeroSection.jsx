import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:pr-10 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nikmati Kelezatan <span className="text-orange-600">Makanan Sedap & Lezat</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sedap menyajikan menu makanan yang luas dengan cita rasa autentik 
            yang dibuat dari bahan-bahan premium dan segar setiap harinya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#products" 
              className="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors duration-300"
            >
              Jelajahi Menu
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-white text-orange-600 font-medium rounded-md border border-orange-600 hover:bg-orange-50 transition-colors duration-300"
            >
              Tentang Kami
            </a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="md:w-1/2">
          <div className="relative">
            <img 
              src="https://images.alphacoders.com/862/thumb-1920-862729.jpg" 
              alt="Makanan Indonesia Lezat" 
              className="rounded-t-full shadow-xl w-full h-auto object-cover"
            />

          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 opacity-10 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-600 opacity-10 rounded-tr-full"></div>
    </section>
  );
};

export default HeroSection;