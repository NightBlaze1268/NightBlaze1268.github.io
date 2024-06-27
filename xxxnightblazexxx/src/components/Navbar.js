import { Link, useLocation } from 'react-router-dom';
import sunIcon from '../icons/generic-sun-icon.png';
import moonIcon from '../icons/generic-moon-icon.png';
import darkLogo from '../icons/rick-studios-logo-removebg-preview.png'
import lightLogo from '../icons/light-rick-studios-removebg-preview.png'

const Navbar = ({ darkMode, toggleDisplayMode }) => {
  const location = useLocation();

  const getLinkClass = (path) => {
    if (location.pathname === path) {
      // Active nav state
      return "bg-gray-400 text-black font-bold dark:text-gray-100 dark:bg-gray-500";
    } else {
      // Inactive nav state
      return "bg-gray-300 text-gray-900 dark:text-gray-200 dark:bg-gray-900";
    }
  };

  const baseButton = "bg-gray-300 hover:bg-gray-500 hover:border hover:font-bold p-3 rounded-lg dark:bg-gray-900 dark:hover:bg-gray-500";
  const baseButtonLink = "text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300"
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
          <button className={`${baseButton} ${getLinkClass('/')}`}>
            <Link to="/" className={`${baseButtonLink}`}>Home</Link>
          </button>
          <button className={`${baseButton} ${getLinkClass('/career')}`}>
            <Link to="/career" className={`${baseButtonLink}`}>Career</Link>
          </button>
          <button className={`${baseButton} ${getLinkClass('/education')}`}>
            <Link to="/education" className={`${baseButtonLink}`}>Education</Link>
          </button>
          <button className={`${baseButton} ${getLinkClass('/projects')}`}>
            <Link to="/projects" className={`${baseButtonLink}`}>Projects</Link>
          </button>
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
