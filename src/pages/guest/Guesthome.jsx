import React from 'react';
import HeroSection from '/src/components/guest/HeroSection';
import AboutSection from '/src/components/guest/AboutSection';
import ProductGrid from '/src/components/guest/ProductGrid';
import Testimonial from '/src/components/guest/Testimonial';

const Guesthome = () => {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <Testimonial />
    </div>
  );
};

export default Guesthome;