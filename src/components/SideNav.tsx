import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAmbulance, faUser } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div className="w-1/20 bg-blue-600 text-white h-full">
      <nav className="flex flex-col p-4 space-y-4">
        <a href="/" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a href="/reports" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faAmbulance} />
          <span>Reports</span>
        </a>
        <a href="/contacts" className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faUser} />
          <span>Contacts</span>
        </a>
      </nav>
    </div>
  );
};

export default SideNav;
