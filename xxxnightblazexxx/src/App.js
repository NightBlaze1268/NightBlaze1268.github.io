import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Career from "./routes/Career";
import Education from "./routes/Education";
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import sunIcon from './icons/generic-sun-icon.png';
import moonIcon from './icons/generic-moon-icon.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setDarkMode(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setDarkMode(savedMode === 'dark');
  }, []);

  const toggleDisplayMode = () => {
    const newMode = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("displayMode", newMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col h-screen`}>
      <Navbar darkMode={darkMode} toggleDisplayMode={toggleDisplayMode}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
