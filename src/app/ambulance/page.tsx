import React from 'react';
import NavBar from '@/components/NavBar';
import SideNav from '@/components/SideNav';
import { Search } from 'lucide-react';

const AmbulancePage = () => {
  return (
    <div className="flex h-screen">
      <SideNav />

      <div className="flex flex-col flex-1">
        <NavBar />
        <main className="flex-grow p-6 bg-gray-100">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className='flex gap-6'>
              {/* Left Column - Search Bar and Radio Box */}
              <div className='flex flex-col gap-4 w-96'>
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>

                {/* Radio Button Selection Box */}
                <div className='p-4 border rounded-lg bg-gray-50'>
                  <h3 className="font-semibold mb-3">Available Personnel</h3>
                  <form className="space-y-3">
                    {[
                      'Dr. Sarah Johnson',
                      'Dr. Michael Chen',
                      'Nurse David Williams',
                      'Nurse Emma Thompson',
                      'Paramedic John Smith'
                    ].map((name) => (
                      <div key={name} className="flex items-center">
                        <input
                          type="radio"
                          id={name.toLowerCase().replace(/\s+/g, '-')}
                          name="personnel"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                          htmlFor={name.toLowerCase().replace(/\s+/g, '-')}
                          className="ml-2 text-sm font-medium text-gray-700"
                        >
                          {name}
                        </label>
                      </div>
                    ))}
                  </form>
                </div>
              </div>

              {/* Right Column - Welcome Message and Description */}
              <div className='flex-1'>
                <h1 className="text-2xl font-bold mb-4">Welcome to CareKonnect</h1>
                <p className="text-lg">
                  This is the homepage where you'll find all the essential information related to ambulance services.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AmbulancePage;