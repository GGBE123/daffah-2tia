import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Left Image */}
          <div className="md:w-1/2">
            <img 
              src="https://hauteliving.com/wp-content/uploads/2012/03/Gary-Danko.jpg" 
              alt="Sedap Restaurant" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 p-8">
            <p className="text-sm text-red-500 font-semibold mb-2">Tentang Kami</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore All Corners Of <br /> The Food World
            </h2>
            <p className="text-gray-600 mb-6">
              Kami menyediakan makanan sehat, lezat dan membuat kuat.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
