// src/components/NavBar.tsx
import React from 'react';

const NavBar = () => {
  return (
    <div className='flex flex-row'>
        <div className=' w-1/6 bg-blue-600'>
            <div className='text-white'>
                <p>J</p>
            </div>
        </div>
        <div className=' w-5/6 '>
            <div className="bg-white text-black p-4">
                <h1 className="text-xl font-bold ">CareKonnect</h1>
            </div>
        </div>
    </div>
    
    
  );
};

export default NavBar;
