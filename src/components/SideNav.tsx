'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAmbulance, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

const SideNav = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-blue-600 text-white h-full w-30">
      <nav className="flex flex-col p-4 space-y-4">
      <button 
          onClick={() => handleNavigation('/')}
          className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-lg transition-colors text-left w-full"
        >
          <FontAwesomeIcon icon={faHome} className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button 
          onClick={() => handleNavigation('/ambulance')}
          className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-lg transition-colors text-left w-full"
        >
          <FontAwesomeIcon icon={faAmbulance} className="w-5 h-5" />
          <span>Ambulance</span>
        </button>
        <button 
          onClick={() => handleNavigation('/Hospital')}
          className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-lg transition-colors text-left w-full"
        >
          <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          <span>Hospital</span>
        </button>
      </nav>
    </div>
  );
};

export default SideNav;