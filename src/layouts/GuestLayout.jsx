import React from 'react';
import { Outlet } from 'react-router-dom'; // ✅ ini penting!
import GHeader from '../components/guest/GHeader';
import FooterGuest from '../components/guest/FooterGuest';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <GHeader />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <FooterGuest />
    </div>
  );
};

export default GuestLayout;
