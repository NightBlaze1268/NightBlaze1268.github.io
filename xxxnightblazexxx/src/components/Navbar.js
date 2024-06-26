import { Link } from 'react-router-dom';
import sunIcon from '../icons/generic-sun-icon.png';
import moonIcon from '../icons/generic-moon-icon.png';
import darkLogo from '../icons/rick-studios-logo-removebg-preview.png'
import lightLogo from '../icons/light-rick-studios-removebg-preview.png'

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  return (
    <nav className="bg-gray-300 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        <img
            src={lightLogo}
            alt="Sun Icon"
            className={`w-12 h-12 cursor-pointer ${darkMode ? 'display-none' : ''}`}
            onClick={toggleDisplayMode}
          />
          <img
            src={darkLogo}
            alt="Moon Icon"
            className={`w-12 h-12 cursor-pointer ${darkMode ? '' : 'display-none'}`}
            onClick={toggleDisplayMode}
          />
        <div>
          <Link to="/" className="text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300">Home</Link>
          <Link to="/career" className="text-black hover:text-gray-800 ml-4 dark:text-white dark:hover:text-gray-300">Career</Link>
          <Link to="/education" className="text-black hover:text-gray-800 ml-4 dark:text-white dark:hover:text-gray-300">Education</Link>
        </div>
        <div className="flex items-center">
          <img
            src={sunIcon}
            alt="Sun Icon"
            className={`w-12 h-12 cursor-pointer ${darkMode ? 'display-none' : ''}`}
            onClick={toggleDisplayMode}
          />
          <img
            src={moonIcon}
            alt="Moon Icon"
            className={`w-12 h-12 cursor-pointer ${darkMode ? '' : 'display-none'}`}
            onClick={toggleDisplayMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
