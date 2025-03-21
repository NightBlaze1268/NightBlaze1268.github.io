import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import darkLogo from "../icons/rick-studios-logo-removebg-preview.png";
import lightLogo from "../icons/light-rick-studios-removebg-preview.png";

// Theme options
const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  //{ name: "Cyberpunk", value: "cyberpunk" },
  //{ name: "Solarized", value: "solarized" }
];

const Navbar = ({ currentTheme, setTheme }) => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "bg-gray-400 text-black font-bold dark:text-gray-100 dark:bg-gray-500"
      : "bg-gray-300 text-gray-900 dark:text-gray-200 dark:bg-gray-900";
  };

  const baseButton =
    "navbar-btn-bg hover:bg-gray-500 hover:border hover:font-bold p-3 rounded-lg dark:hover:bg-gray-500";
  const baseButtonLink =
    "text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300";

  return (
    <nav className="bg-primary text-primary p-4">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <img
          src={currentTheme === "dark" ? darkLogo : lightLogo}
          alt="Theme Switcher"
          className="w-12 h-12 cursor-pointer"
        />

        {/* Navigation Links */}
        <div>
          <button className={`${baseButton} ${getLinkClass("/")}`}>
            <Link to="/" className={baseButtonLink}>
              Home
            </Link>
          </button>
          <button className={`${baseButton} ${getLinkClass("/career")}`}>
            <Link to="/career" className={baseButtonLink}>
              Career
            </Link>
          </button>
          <button className={`${baseButton} ${getLinkClass("/education")}`}>
            <Link to="/education" className={baseButtonLink}>
              Education
            </Link>
          </button>
          <button className={`${baseButton} ${getLinkClass("/projects")}`}>
            <Link to="/projects" className={baseButtonLink}>
              Projects
            </Link>
          </button>
        </div>

        {/* Theme Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-300 dark:bg-gray-900 p-3 rounded-lg border-black dark:border-white flex items-center gap-2 border"
          >
            {themes.find((t) => t.value === currentTheme)?.name}
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-gray-200 dark:bg-gray-800 border rounded-lg shadow-lg">
              {themes.map((theme) => (
                <li
                  key={theme.value}
                  onClick={() => {
                    setTheme(theme.value);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  {theme.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
