// src/app/page.tsx
import React from 'react';
import NavBar from '@/components/NavBar';
import SideNav from '../components/SideNav';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
    <NavBar />
    <div className="flex flex-1">
      <SideNav />
      <main className="flex-grow p-6 bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Welcome to CareKonnect</h1>
          <p className="text-lg">
            This is the homepage where you'll find all the essential information related to ambulance services.
          </p>
        </div>
      </main>
    </div>
  </div>



  );
};

export default HomePage;
